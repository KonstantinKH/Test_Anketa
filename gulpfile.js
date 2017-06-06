var gulp         = require('gulp'),

    sass         = require('gulp-sass'),

    browserSync  = require('browser-sync').create(),

    reload       = browserSync.reload,

    bourbon      = require('node-bourbon'),

    autoprefixer = require('gulp-autoprefixer'),

    del          = require('del'),      

    imagemin     = require('gulp-imagemin'),

    pngquant     = require('imagemin-pngquant'),

    cache        = require('gulp-cache'),

    pug          = require('gulp-pug'),

    // Configuration object

    config       = {

        src: {

          styles:   ['src/sass/**/*.{scss,sass}'],

          scripts:  ['src/js/**/*.js'],

          html:     ['src/html/**/*.{pug,jade,htm,html}'],

          images:   ['src/images/**/*.{jpg,jpeg,png,gif,svg}'],

        },

        dist: {

          styles:   'dist/css/',

          scripts:  'dist/js/',

          html:     'dist/',

          images:   'dist/images/',

        },

        watch: {

          dist: {

            styles:   'dist/css/**/*.css',

            scripts:  'dist/js/**/*.js',

            html:     'dist/**/*.{html,htm}',

            images:   'dist/images/**/*.{jpg,jpeg,png,gif,svg}'

          },

          src: {

            styles:   ['src/sass/**/*.{scss,sass}'],           

            scripts:  ['src/js/**/*.js'],                   

            html:     ['src/html/**/*.{pug,jade,htm,html}'],     

            images:   ['src/images/**/*.{jpg,jpeg,png,gif,svg}'],
          },

        },

        bSync: {

          injectChanges: true,

          notify: false,

          port: 8888,

          server: {

            baseDir: ['./dist']

          },

        }

    };



gulp.task('sass', function () {

  return gulp.src(config.src.styles)

    .pipe(sass({includePaths: bourbon.includePaths}))

    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))

    .pipe(gulp.dest(config.dist.styles))

    .pipe((reload({stream: true})));

});



gulp.task('js', function () {

  return gulp.src(config.src.scripts)

    .pipe(gulp.dest(config.dist.scripts));

});



gulp.task('html', function () {

  return gulp.src(config.src.html)

    .pipe(pug({pretty: true}))

    .pipe(gulp.dest(config.dist.html));

});



gulp.task('image', function () {

  return gulp.src(config.src.images)

    .pipe(imagemin({

      progressive: true,

      interlaced: true,

      svgoPlugins: [{cleanupIDs: false}],

    }))

    .pipe(gulp.dest(config.dist.images))

    .pipe(reload({stream: true}));

});



gulp.task('default', ['html', 'sass', 'js', 'image'], function () {

  browserSync.init(config.bSync);

  // On dist change

  gulp.watch(config.watch.dist.scripts).on('change', reload);

  gulp.watch(config.watch.dist.html).on('change', reload);
  // On src change

  gulp.watch(config.watch.src.scripts, ['js']);

  gulp.watch(config.watch.src.styles, ['sass']);

  gulp.watch(config.watch.src.html, ['html']);

  gulp.watch(config.watch.src.images, ['image']);

});