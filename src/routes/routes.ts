import Login from 'components/pages/Login/'
import Index from 'components/pages/Index/'
import Home from 'components/pages/Home/'
import About from 'components/pages/About/'
import NotFound from 'components/pages/NotFound/'
import * as templates from 'components/templates'

const routes = [
  {
    path: '/',
    exact: true,
    component: Index,
  },
  {
    path: '/login',
    component: templates.Auth,
    routes: [
      {
        path: '/login',
        exact: true,
        component: Login,
      },
    ],
  },
  {
    path: '/home',
    component: templates.App,
    routes: [
      {
        path: '/home',
        exact: true,
        component: Home,
      },
    ],
  },
  {
    path: '/about',
    component: templates.App,
    routes: [
      {
        path: '/about',
        exact: true,
        component: About,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
]

export default routes
