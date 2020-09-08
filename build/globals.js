const path = require('path')
const PATHS = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  serv: path.resolve(__dirname, '../serv'),
  pre: path.resolve(__dirname, '../src/ejs'),
  pre_js: path.resolve(__dirname, '../src/js'),
}
module.exports = PATHS;
