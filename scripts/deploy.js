const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'deploy',
    repo: 'git@github.com:ryanjyost/screenwriter.git',
    user: {
      name: 'ryanjyost',
      email: 'ryanjyost@gmail.com'
    }
  },
  () => {
    console.log('Deploy Complete!')
  }
)
