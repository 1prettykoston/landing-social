export const copy = () => {
  return app.gulp.src([app.path.src.files, "src/img/**/*.mp4"]).pipe(app.gulp.dest(app.path.build.files));
};
