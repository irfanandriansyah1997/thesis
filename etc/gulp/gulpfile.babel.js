/* eslint-disable */
'use strict';

import gulp from 'gulp';

import sass from 'gulp-sass';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import minify from 'gulp-minify-css';
import { src, task, series } from 'gulp';

class GulpModule {
    static generateSCSS(service, path) {
        return src(path)
            .pipe(
                sass({
                    outputStyle: 'compressed'
                }).on('error', sass.logError)
            )
            .pipe(concat('temp.css'))
            .pipe(minify())
            .pipe(
                rename({
                    basename: service,
                    suffix: '.min',
                    extname: '.css'
                })
            )
            .pipe(gulp.dest('../../lib/style'));
    }
}

task('sass-common', () => GulpModule.generateSCSS('common', '../../src/common/**/*.scss'));
task('sass-mobile', () => GulpModule.generateSCSS('mobile', '../../src/mobile/**/*.scss'));
task('sass-desktop', () => GulpModule.generateSCSS('desktop', '../../src/desktop/**/*.scss'));

task('default', series('sass-common', 'sass-mobile', 'sass-desktop'));
