module.exports = {
  title: 'P3 LTE',
  description: 'P3 LTE module for GPD Pocket 3',
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/last-updated',
    'vuepress-plugin-medium-zoom',
    'vuepress-plugin-smooth-scroll'
  ],
  head: [
    ['link', {rel: "shortcut icon", type: "image/png", sizes: "16x16", href: "/favicon.ico"}],
  ],
  markdown: {
    toc: {
      includeLevel: [1, 2, 3, 4]
    }
  },
  chainWebpack: (config, isServer) => {
    config.module
      .rule('zips')
      .test(/\.zip$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: `[path][name].[ext]`
      });

    config.module.rule('vue')
      .uses.store
      .get('vue-loader').store
      .get('options').transformAssetUrls = {
      a: 'href'
    };
  },
}