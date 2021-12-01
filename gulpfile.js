import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sourcemap from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
//const sync = require("browser-sync").create();
import sync from 'browser-sync';
import csso from 'postcss-csso';
import rename from 'gulp-rename';
import terser from 'gulp-terser';
import htmlmin from 'gulp-htmlmin';
import uglify from 'gulp-uglify-es'//'default';
import imagemin from 'gulp-imagemin';
import webp from 'gulp-webp';
import cheerio from 'gulp-cheerio';
import svgstore from 'gulp-svgstore';
import del from 'del';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import sass from 'gulp-dart-sass';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';

// Styles

// const styles = () => {
//   return gulp.src("source/sass/style.scss")
//     .pipe(plumber())
//     .pipe(sourcemap.init())
//     .pipe(sass())
//     .pipe(gulp.dest("build/css"))
//     .pipe(postcss([
//       autoprefixer(),csso()
//     ]))
//     .pipe(sourcemap.write("."))
//     .pipe(rename("style.min.css"))
//     .pipe(gulp.dest("source/css"))
//     .pipe(sync.stream());
// }

// exports.styles = styles;

// // Html

// const html = () => {
//   return gulp.src("source/*.html")
//   .pipe(htmlmin({collapseWhitespace: false}))
//   .pipe(gulp.dest("build"))
// }

// exports.html = html;

// // Scripts

// const scripts = () => {
//   return gulp.src("source/js/*.js")
//   .pipe(terser())
//   .pipe(rename({suffix: '.min'}))
//   .pipe(gulp.dest("build/js"));
// }

// exports.scripts = scripts;

// // Images

// const images = () => {
//   return gulp.src("source/img/**/*.{jpg, png, svg}")
//     .pipe(imagemin([
//       imagemin.mozjpeg({progressive: true}),
//       imagemin.optipng({optimizationLevel: 3}),
//       imagemin.svgo()
//     ]))
//     .pipe(gulp.dest("build/img"))
// }

// exports.images = images;

// // Webp

// const createWebp = () => {
//   return gulp.src("source/img/**/*.{jpg, png}")
//    .pipe(webp({quality: 90}))
//    .pipe(gulp.dest("build/img"))
// }

// exports.createWebp = createWebp;

// // Sprites

// const sprite = () => {
//   return gulp.src("source/img/icons/*.svg")
//   .pipe(cheerio({
// run: function ($) {
// $('[fill]').removeAttr('fill');
// },
// parserOptions: { xmlMode: true }
// }))
//   .pipe(svgstore())
//   .pipe(rename("sprite.svg"))
//   .pipe(gulp.dest("build/img"))
// }

// exports.sprite = sprite;

// // Copy

// const copy = (done) => {
//   return gulp.src([
//     "source/fonts/*.{woff2, woff}",
//     "source/*.ico",
//     "source/img/**/*.{jpg,png,svg}",
//   ],
//     {
//       base: "source"
//     })
//   .pipe(gulp.dest("build"));
//   done();
// }

// exports.copy = copy;

// //Clean

// const clean = () => {
//   return del("build");
// }

// exports.clean = clean;

// // Server

// const server = (done) => {
//   sync.init({
//     server: {
//       baseDir: 'source'
//     },
//     cors: true,
//     notify: false,
//     ui: false,
//   });
//   done();
// }

// exports.server = server;

// // Watcher

// const watcher = () => {
//   gulp.watch("source/sass/**/*.scss", gulp.series("styles"));
//   gulp.watch("source/*.html").on("change", sync.reload);
// }

// exports.default = gulp.series(
//   styles, server, watcher
// );

// // build

// const build = gulp.series(
//   clean,
//   gulp.parallel(
//     styles,
//     html,
//     sprite,
//     copy,
//     images,
//     createWebp
//   )
// )

// exports.build = build;

// exports.default = gulp.series(
//   clean,
//   gulp.parallel(
//     styles,
//     html,
//     scripts,
//     sprite,
//     copy,
//     createWebp
//   ),
//   gulp.series(
//     server, watcher
//   )
// )
