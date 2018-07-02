const config = require('./package.json');
const fs     = require('fs');

module.exports = function(ctx) {
   return {
      map: {inline: false},
      plugins: {
         'postcss-import': {},
         'postcss-cssnext': {},
         'postcss-flexbugs-fixes':{},
         'postcss-pxtorem': {
            rootValue: 16,
            mediaQuery: false
         },
         'postcss-assets': {
            'relative': true,
            cachebuster: function (filePath, urlPathname) {
               return fs.statSync(filePath).mtime.getTime().toString(16);
            }
         },
         'css-mqpacker': {},
         'cssnano': {
            "autoprefixer": false,
            "preset": [
               "default",
               {
                  discardComments: {removeAll: true},
                  normalizeWhitespace: (config.env === 'production') ? {} : false
               }
            ]
         }
      }
   }
}
