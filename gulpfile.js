let gulp = require('gulp');
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let tsify = require('tsify');
let sourcemaps = require('gulp-sourcemaps');
let buffer = require('vinyl-buffer');
let paths = {
    pages: ['app/images/*.*', './*.html',
        'app/login/*.html', 'app/login/*.css',
        'app/list-product/*.html', 'app/list-product/*.css',
        'app/product-detail/*.html', 'app/product-detail/*.css',
        'app/shopping-cart/*.html', 'app/shopping-cart/*.css'
    ]
};


gulp.task('copyStatic', function () {
    return gulp.src(paths.pages)
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['copyStatic'], function () {
        return browserify({
            basedir: '.',
            debug: true,
            entries: ['./main.ts'],
            cache: {},
            packageCache: {}
        })
        .plugin(tsify)
        .transform('babelify', {
            presets: ['es2015'],
            extensions: ['.ts']
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});