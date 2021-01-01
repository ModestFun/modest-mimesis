export const navList = [
  {
    name: 'article',
    class: 'navLink navLink_selected',
    path: '/article',
    component: () => import('../src/views/Home.vue'),
    title: '文章'
  },
  {
    name: 'diary',
    class: 'navLink',
    path: '/diary',
    component: () => import('../src/views/About.vue'),
    title: '日记'
  },
  {
    name: 'archive',
    class: 'navLink',
    path: '/archive',
    component: () => import('../src/views/Home.vue'),
    title: '归档'
  },
  {
    name: 'interact',
    class: 'navLink',
    path: '/interact',
    component: () => import('../src/views/About.vue'),
    title: '留言'
  },
  {
    name: 'friend',
    class: 'navLink',
    path: '/friend',
    component: () => import('../src/views/Home.vue'),
    title: '友链'
  },
  {
    name: 'about',
    class: 'navLink',
    path: '/about',
    component: () => import('../src/views/About.vue'),
    title: '关于'
  }
]