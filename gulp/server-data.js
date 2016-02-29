'use strict'

/**
 * npm i -D gulp gulp-template gulp-rename yargs require-dir
 * gulp component --name myComponentName
 */
const path = require('path')
const gulp = require('gulp')
const watch = require('gulp-watch')
const glob = require('glob-promise')
const jsonServer = require('json-server')
const bodyParser = require('body-parser')
const gutil = require('gulp-util')

let instance
const data_path = 'gulp/server/data/'
const port_number = 3001

function initServer() {
  const server = jsonServer.create()
  server.use(jsonServer.defaults())
  server.use(bodyParser.json())
  return glob(data_path + '*.json')
    .then(mocks => {
      const db = {}
      mocks.forEach(mock => {
        db[mock.replace(data_path, '').replace('.json', '')] = require(`./${mock.replace('gulp/', '') }`)
      })
      const router = jsonServer.router(db)
      server.use(router)
      instance = server.listen(port_number, () => {
        gutil.log('web-service listening on port ' + port_number)
      })
    })
}

gulp.task('json-server', () => {
  initServer()
  watch(data_path + '*', () => {
    instance.close()
    setTimeout(() => {
      initServer()
    }, 500)
  })
})
