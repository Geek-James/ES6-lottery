import gulp from 'gulp';
import gulpSequeence from 'gulp-sequence';
// 编译顺序
gulp.task('build',gulpSequeence('clean','css','pages','scripts',['browser','serve']));