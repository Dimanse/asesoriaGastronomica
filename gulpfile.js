
// const autoprefixer = require('autoprefixer');
// const postcss = require('gulp-postcss');
// const sourcemaps = require('gulp-sourcemaps');
// const cssnano = require('cssnano');
// // const concat = require('gulp-concat');
// const terser = require('gulp-terser-js');
// // const rename = require('gulp-rename');

// const notify = require('gulp-notify');
// // const cache = require('gulp-cache');
// // const clean = require('gulp-clean');
// // const webp = require('gulp-webp');


// const gulp = require( 'gulp');
// const { src, dest, watch, series, parallel } = require( 'gulp');

// const sass = require('gulp-sass')(require('sass'));

// const paths = {
//     css: './src/css/*.css',
//     js: './src/js/*.js',
//     imagenes: './src/img/*.{jpg, jpeg, JPG, png}',
// }

// // export default () => (
// // 	gulp.src('src/img/*')
// // 		.pipe(imagemin())
// // 		.pipe(gulp.dest('build/img/opt'))
// // );


// function css() {
//     return src(paths.css)
//         .pipe(sourcemaps.init())
//         .pipe(sass())
//         .pipe(postcss([autoprefixer(), cssnano()]))
//         // .pipe(postcss([autoprefixer()]))
//         .pipe(sourcemaps.write('.'))
//         .pipe( dest('build/css') );
// }


// function javascript() {
//     return src(paths.js)
//       .pipe(terser())
//       .pipe(sourcemaps.write('.'))
//       .pipe(dest('build/js'));
// }

// function imagenes(){
//     return gulp.src(imgSRC)
//     .pipe(changed(imgDIST))
//     .pipe(imageMin([
//       imageMin.gifsicle({interlaced: true}),
//       imageMin.jpegtran({interlaced: true}),
//       imageMin.optipng({optimizationLevel: 5})
//     ]))
//     .pipe(gulp.dest(imgDIST));
//   }

// // function versionWebp() {
// //     return src(paths.imagenes)
// //         .pipe( webp() )
// //         .pipe(dest('public/build/img'))
// //         .pipe(notify({ message: 'Imagen Completada'}));
// // }


// function watchArchivos() {
//     watch( paths.scss, css );
//     watch( paths.js, javascript );
//     watch( paths.imagenes, imagenes );
//     // watch( paths.imagenes, versionWebp );
// }
  
// exports.css = css;
// exports.watchArchivos = watchArchivos;
// exports.default = parallel(css, javascript, imagenes ); 
// exports.default = parallel(css, javascript,  imagenes, versionWebp,  watchArchivos ); 
// exports.build = parallel(css, javascript,  imagenes, versionWebp ); 
// var resourcesOptimization = gulp.series(limpiar, imagenes, versionWebp, css, javascript, watchArchivos);
// const resourcesOptimization = gulp.series( imagenes);
// gulp.task('build', resourcesOptimization);
// gulp.task('default', resourcesOptimization);
// series: inicia una tarea y hasta que finaliza no inicia la siguiente.
//parallel: inicia las tareas y despues las va finalizando

import { src, dest, watch, series } from 'gulp'
import * as dartSass from 'sass'
import gulpSass from 'gulp-sass'
import imageMin from 'gulp-imagemin'

const sass = gulpSass(dartSass)

export function js( done ) {
    src('src/js/app.js')
        .pipe( dest('build/js') ) 

    done()
}

export function css( done ) {
    src('src/css/app.css', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: '.'}) )

    done()
}

export function imagenes (done) {
    src('src/img/*')
        .pipe(imageMin({optimationLevel: 3}))
        .pipe(dest('build/img/opt'))
    done();
}

export function dev() {
    watch('src/scss/**/*.scss', css)
    watch('src/js/**/*.js', js)
}

export default series( js, css, imagenes, dev )