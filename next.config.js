const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh', 'ja', 'ko'],
    defaultLocale: 'en'
  }
})
