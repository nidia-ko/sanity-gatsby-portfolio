export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f7cf4debabdd90fccead791',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-muiazot7',
                  apiId: '27b40940-7346-47b6-9a45-fd8825f63f0a'
                },
                {
                  buildHookId: '5f7cf4de5e0d081164be409b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-xjvvz9ui',
                  apiId: '81bf7d97-9aa7-4f79-9dc9-aee638c48274'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nidia-ko/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-xjvvz9ui.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
