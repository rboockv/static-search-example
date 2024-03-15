const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name:'home', component: () => import('pages/IndexPage.vue') },
      {
        path: 'page-1',
        children: [
          {
            path: '',
            name:'page-1',
            component: () => import('pages/clasification-1/Page1.vue'),
          },
          {
            path: 'page-1-1',
            name:'page-1-1',
            component: () => import('pages/clasification-1/Page1-1.vue'),
          },
          {
            path: 'page-1-2',
            name:'page-1-2',
            component: () => import('pages/clasification-1/Page1-2.vue'),
          },
        ],
      },
      {
        path: 'page-2',
        children: [
          {
            path: '',
            name:'page-2',
            component: () => import('pages/clasification-2/Page2.vue'),
          },
          {
            path: 'page-2-1',
            name:'page-2-1',
            component: () => import('pages/clasification-2/Page2-1.vue'),
          },
          {
            path: 'page-2-2',
            name:'page-2-2',
            component: () => import('pages/clasification-2/Page2-2.vue'),
          },
          {
            path: 'page-2-3',
            name:'page-2-3',
            component: () => import('pages/clasification-2/Page2-3.vue'),
          }
        ],
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
