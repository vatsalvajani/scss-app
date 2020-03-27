var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', async function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', async function() {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', function (){
  gulp.watch('app/scss/**/*.scss', gulp.series(['browserSync']));
  gulp.watch('app/scss/**/*.scss', gulp.series(['sass']));
});


// gulp.task('watch', gulp.parallel('browserSync', 'sass'), async function (){
//    gulp.watch('app/scss/main.scss', gulp.series(['sass']));
// });