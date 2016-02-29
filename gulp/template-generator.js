'use strict'

/**
 * npm i -D gulp json-server gulp-watch glob-promise body-parser gulp-util
 * gulp json-server
 */
const path = require('path')
const gulp = require('gulp')
const yargs = require('yargs')
const template = require('gulp-template')
const rename = require('gulp-rename')

function cap(val) {
  return val.charAt(0).toUpperCase() + val.slice(1)
}

gulp.task('component', () => {
  const name = yargs.argv.name
  const parentPath = yargs.argv.parent || ''
  const destPath = path.join('src/app/component', parentPath, name)
  const prefix = 'app'

  return gulp.src(path.join(__dirname, 'templates', 'component/**/*'))
    .pipe(template({
      name: name,
      upperName: cap(name),
      prefix: prefix,
      upperPrefix: cap(prefix),
    }))
    .pipe(rename(paths => {
      paths.basename = paths.basename.replace('temp', name)
    }))
    .pipe(gulp.dest(destPath))
})
