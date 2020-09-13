export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f5e5448598fe121d897de64',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-efmax5qv',
                  apiId: '3ec7a5d1-34ba-47b1-af7e-5736490ee081'
                },
                {
                  buildHookId: '5f5e5448598fe121d897de65',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-qhe12tub',
                  apiId: '9a63a0ba-f712-430c-9e76-de62138d85ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/birkmann/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-qhe12tub.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
