/* eslint-disable */
'use strict';

import gulp from 'gulp';

import sass from 'gulp-sass';
import rename from 'gulp-rename';
import concat from 'gulp-concat';
import postcss from 'gulp-postcss';
import minify from 'gulp-minify-css';
import autoprefixer from 'autoprefixer';
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
            .pipe(postcss([autoprefixer()]))
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

task('sass-common', () =>
    GulpModule.generateSCSS('common', '../../src/common/**/style.scss')
);
task('sass-mobile', () =>
    GulpModule.generateSCSS('mobile', '../../src/mobile-site/**/style.scss')
);
task('sass-desktop', () =>
    GulpModule.generateSCSS('desktop', '../../src/desktop-site/**/style.scss')
);
task('sass-etc', () =>
    GulpModule.generateSCSS('all', '../../src/style/app.scss')
);

task(
    'default',
    series('sass-common', 'sass-mobile', 'sass-desktop', 'sass-etc')
);
