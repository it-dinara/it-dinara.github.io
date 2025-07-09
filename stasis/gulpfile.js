"use strict";

const {
  src,
  dest,
  watch,
  series,
  parallel
} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require("gulp-clean-css");
const livereload = require("gulp-livereload");
const connect = require("gulp-connect");
const gulpIf = require("gulp-if");
const yargs = require("yargs/yargs");
const {
  hideBin
} = require("yargs/helpers");
const svgstore = require("gulp-svgstore");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const pagebuilder = require("gulp-pagebuilder");
const path = require("path");

const argv = yargs(hideBin(process.argv)).argv;
const isDev = argv.dev === true;
const isProd = argv.prod === true;

// HTML task returns a Promise
function html() {
  return new Promise((resolve, reject) => {
    const stream = src("src/*.html")
      .pipe(pagebuilder("src"))
      .pipe(dest("build/"))
      .pipe(livereload());

    // ‘finish’ fires when the underlying write is complete
    stream.on("finish", resolve);
    stream.on("error", reject);
  });
}

// Styles returns its stream
function styles() {
  return src("scss/*.scss")
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpIf(isProd, cleanCSS()))
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(dest("css/"))
    .pipe(livereload());
}

// SVG store returns stream
function svgStoreTask() {
  return src("svg/store/*.svg", {
      base: "store/svg"
    })
    .pipe(
      svgmin(file => {
        const prefixId = path
          .basename(file.relative, path.extname(file.relative));
        return {
          plugins: [{
            cleanupIDs: {
              prefix: `${prefixId}-`,
              minify: false
            }
          }]
        };
      })
    )
    .pipe(svgstore())
    .pipe(dest("./store"));
}

// SVG cheerio returns stream
function svgCheerioTask() {
  return src("svg/cheerio/*.svg", {
      base: "cheerio/svg"
    })
    .pipe(
      svgmin(file => {
        const prefixId = path
          .basename(file.relative, path.extname(file.relative));
        return {
          plugins: [{
            cleanupIDs: {
              prefix: `${prefixId}-`,
              minify: false
            }
          }]
        };
      })
    )
    .pipe(
      cheerio({
        run: $ => {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
        },
        parserOptions: {
          xmlMode: true
        }
      })
    )
    .pipe(svgstore())
    .pipe(dest("./cheerio"));
}

// Dev server + livereload
function serve(done) {
  connect.server({
    root: "build/",
    livereload: true
  });
  livereload.listen();
  done();
}

// Watcher never needs to signal completion
function watcher() {
  watch("scss/*.scss", styles);
  watch("src/*.html", html);
  watch("svg/store/*.svg", svgStoreTask);
  watch("svg/cheerio/*.svg", svgCheerioTask);
}

// Composite flows
const build = series(
  parallel(html, styles, svgStoreTask, svgCheerioTask)
);

const dev = series(build, parallel(serve, watcher));

const prod = series(
  done => {
    argv.prod = true;
    argv.dev = false;
    done();
  },
  build
);

// Expose tasks
exports.html = html;
exports.styles = styles;
exports.svgstore = svgStoreTask;
exports.svgcheerio = svgCheerioTask;
exports.serve = serve;
exports.watch = watcher;
exports.build = build;
exports.dev = dev;
exports.prod = prod;
exports.default = dev;
