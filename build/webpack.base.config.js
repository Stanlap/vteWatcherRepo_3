const PATHS = require('./globals')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: {
    chat_2: `${PATHS.pre_js}/chat_2.js`,
    date_manager: `${PATHS.pre_js}/general/date_manager.js`,
    gfr: `${PATHS.pre_js}/general/gfr.js`,
    login: `${PATHS.pre_js}/login.js`,
    main: `${PATHS.pre_js}/main.js`,
    modal_alert: `${PATHS.pre_js}/general/modal_alert.js`,
    regist: `${PATHS.pre_js}/regist.js`,
    vte_assignment_sheet: `${PATHS.pre_js}/vte_watch/vte_assignment_sheet.js`,
    vte_concl: `${PATHS.pre_js}/vte_watch/vte_concl.js`,
    vte_drug: `${PATHS.pre_js}/vte_watch/vte_drug.js`,
    vte_drug_list: `${PATHS.pre_js}/vte_watch/vte_drug_list.js`,
    vte_mirror_rf: `${PATHS.pre_js}/vte_watch/vte_mirror_rf.js`,
    vte_obst_profile: `${PATHS.pre_js}/vte_watch/vte_obst_profile.js`,
    vte_oper_profile: `${PATHS.pre_js}/vte_watch/vte_oper_profile.js`,
    vte_patient_list_rf: `${PATHS.pre_js}/vte_watch/vte_patient_list_rf.js`,
    vte_patient_profile: `${PATHS.pre_js}/vte_watch/vte_patient_profile.js`,
    vte_reference: `${PATHS.pre_js}/vte_watch/vte_reference.js`,
    vte_user_profile: `${PATHS.pre_js}/vte_watch/vte_user_profile.js`
  },
  output: {
    path: `${PATHS.dist}/`,
    publicPath: '/',
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: []
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${PATHS.src}/img`,
          to: `${PATHS.dist}/public/img`
        },
        {
          from: `${PATHS.src}/server/back`,
          to: `${PATHS.serv}/back`
        }
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/about_us.html',
      template: `${PATHS.pre}/about_us.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/chat.html',
      template: `${PATHS.pre}/chat.ejs`,
      chunks: ['main', 'chat_2']
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/login.html',
      template: `${PATHS.pre}/login.ejs`,
      chunks: ['main', 'login']
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/main.html',
      template: `${PATHS.pre}/main.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/main_auth.html',
      template: `${PATHS.pre}/mainAuth.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/prog_list.html',
      template: `${PATHS.pre}/prog_list.ejs`,
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'public/html/regist.html',
      template: `${PATHS.pre}/regist.ejs`,
      chunks: ['main', 'regist']
    }),

    // vte_watch
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_patient_profile.html`,
      template: `${PATHS.pre}/vte_watch/vte_patient_profile.ejs`,
      chunks: ['main', 'vte_patient_profile']
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_user_profile.html`,
      template: `${PATHS.pre}/vte_watch/vte_user_profile.ejs`,
      chunks: ['main','vte_user_profile']
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_reference.html`,
      template: `${PATHS.pre}/vte_watch/vte_reference.ejs`,
      chunks: ['main','vte_reference'],
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_scales.html`,
      template: `${PATHS.pre}/vte_watch/vte_scales.ejs`,
      chunks: ['main','vte_reference'],
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_outer_ref.html`,
      template: `${PATHS.pre}/vte_watch/vte_outer_ref.ejs`,
      chunks: ['main','vte_reference'],
      minify: false
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_obst_profile.html`,
      template: `${PATHS.pre}/vte_watch/vte_obst_profile.ejs`,
      chunks: ['main', 'vte_obst_profile'],
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_oper_profile.html`,
      template: `${PATHS.pre}/vte_watch/vte_oper_profile.ejs`,
      chunks: ['main', 'vte_oper_profile'],
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_patient_list_rf.html`,
      template: `${PATHS.pre}/vte_watch/vte_patient_list_rf.ejs`,
      chunks: ['main','gfr', 'vte_patient_list_rf'],
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_concl.html`,
      template: `${PATHS.pre}/vte_watch/vte_concl.ejs`,
      chunks: ['main','gfr', 'modal_alert', 'vte_concl'],
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_drug.html`,
      template: `${PATHS.pre}/vte_watch/vte_drug.ejs`,
      chunks: ['main','date_manager', 'modal_alert', 'vte_drug', 'vte_drug_list'],
    }),
    new HtmlWebpackPlugin({
      filename: `${PATHS.dist}/vte_watch/vte_assignment_sheet.html`,
      template: `${PATHS.pre}/vte_watch/vte_assignment_sheet.ejs`,
      chunks: ['main','date_manager', 'vte_assignment_sheet'],
    }),

    new FaviconsWebpackPlugin(`${PATHS.src}/img/favicon.png`)

  ],

}