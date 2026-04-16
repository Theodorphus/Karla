/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://karlacleaningcrew.se',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
    ],
  },
  transform: async (config, path) => {
    // Startsida
    if (path === '/') {
      return { loc: path, priority: 1.0, changefreq: 'weekly', lastmod: new Date().toISOString() }
    }
    // Tjänster-index + tjänstesidor
    if (path === '/tjanster' || ['/hemstadning', '/flyttstad', '/fonsterputs', '/byggstad', '/kontorsstadning', '/lokalvard'].includes(path)) {
      return { loc: path, priority: 0.9, changefreq: 'weekly', lastmod: new Date().toISOString() }
    }
    // Om oss + Kontakt
    if (path === '/om-karla-crew' || path === '/kontakt') {
      return { loc: path, priority: 0.8, changefreq: 'monthly', lastmod: new Date().toISOString() }
    }
    // Övriga sidor — standardvärden
    return { loc: path, priority: 0.7, changefreq: 'monthly', lastmod: new Date().toISOString() }
  },
}
