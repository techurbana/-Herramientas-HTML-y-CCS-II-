var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

gulp.task('images', function () {
  return gulp
    .src('src/assets/images/*.{jpg,png}')
    .pipe(
      $.responsive(
        {
          '*.jpg': {
            // Resize all JPG images to 200 pixels wide
            width: 200,
            rename: {
              suffix: '-300px',
              extname: '.webp'
            },
            format: 'webp'
          }
        },
        {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Zlib compression level of PNG output format
          compressionLevel: 6,
          // Strip all metadata
          withMetadata: false
        }
      )
    )
    .pipe(gulp.dest('dist'))
})