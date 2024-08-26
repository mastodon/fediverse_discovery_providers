const purgecss = require('@fullhuman/postcss-purgecss')({
  // see https://gohugo.io/hugo-pipes/postprocess/#css-purging-with-postcss
  content: [
    './hugo_stats.json',
  ],
  safelist : [ /type/ ],
  defaultExtractor: (content) => {
    let els = JSON.parse(content).htmlElements;
    return els.tags.concat(els.classes, els.ids);
  },
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? [purgecss] : [])
  ],
}
