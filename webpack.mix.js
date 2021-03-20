// Quand on modifie ce fichier, il faut faire : npm run prod 
const mix = require('laravel-mix');
require('laravel-mix-purgecss'); // Retirer du code inutile

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

mix.sass('resources/sass/app.scss', 'public/css').version() // Version, permet d'activer la minifaction des fichiers CSS et JS
    .js('resources/js/app.js', 'public/js').version() 
   .purgeCss({
        whitelistPatterns: [/Cookie--nx-theme$/],
        whitelistPatternsChildren: [/Cookie--nx-theme$/]
    }) // Retirer du code inutile
   .sourceMaps();