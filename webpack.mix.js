const mix = require('laravel-mix');
var fs = require('fs');
var path = require('path');
var files = fs.readdirSync('./resources/sass/themes');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.disableNotifications();

mix.override(config => {
    const index = config.module.rules.findIndex(rule => rule.test.toString() === /\.html$/.toString());

    if (index === -1) {
        console.warn('Index for erroneous rule could not be found.');
    } else {
        config.module.rules.splice(index, 1);
    }
});

mix.webpackConfig({
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': __dirname + '/resources/js'
        }
    }
});

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/style.scss', 'public/styles/style.css');

for (var i=0; i<files.length; i++) {
  if(path.extname(files[i]) == '.scss') {
    mix.sass('resources/sass/themes/' + files[i], 'public/styles/themes');
  }
}