import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import EventListView from '../views/event/List.vue'
import EventDetailView from '../views/event/Detail.vue'
import EventEditView from '../views/event/Edit.vue'
import EventRegisterView from '../views/event/Register.vue'
import EventLayout from '../views/event/Layout.vue'
import NotFound from '../views/NotFound.vue'
import NetworkError from '../views/NetworkError.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 })
    },
    {
      path: '/events/:id',
      name: 'EventLayout',
      component: EventLayout,
      props: true,
      children: [
        {
          path: '',
          name: 'EventDetails',
          component: EventDetailView,
        },
        {
          path: 'edit',
          name: 'EventEdit',
          component: EventEditView
        },
        {
          path: 'register',
          name: 'EventRegister',
          component: EventRegisterView
        }
      ]
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        // you don't need to pass id because they have the same name in the event details
        return { path: '/events/' + to.params.afterEvent }
      }
      // you can also add children's here to do the redirect for edit / register
    },
    {
      path: '/about-us',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
      component: AboutView,
      alias: '/about' // not so good for SEO, google may penalize you for duplicate content
    },
    /* {
      path: '/about',
      redirect: { name: 'About' }
    } */
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFound,
      props: true
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/network-error',
      name: 'NetworkError',
      component: NetworkError
    }
  ]
})

export default router
