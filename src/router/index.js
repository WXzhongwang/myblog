import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Welcome from '@/components/pages/Welcome'
import Home from '@/components/pages/Home'
import Catalog from '@/components/pages/Catalog'
import Recommendation from '@/components/pages/Recommendation'
import Top from '@/components/pages/Top'
import My from '@/components/pages/My'
import Article from '@/components/pages/Article'
import ArticleDetail from '@/components/pages/ArticleDetail'
import Tag from '@/components/pages/Tag'
import Sidebar from '@/components/sidebar/Sidebar'

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'Home',
      components: {
        default: Home, 
        sidebar: Sidebar
      }
    },
    {
      path: '/catalog',
      name: 'Catalog',
      components: {
        default: Catalog, 
        sidebar: Sidebar
      }
    },
    {
      path: '/recommendation',
      name: 'Recommendation',
      components: {
        default: Recommendation, 
        sidebar: Sidebar
      }
    },
    {
      path: '/top',
      name: 'Top',
      components: {
        default: Top, 
        sidebar: Sidebar
      }
    },
    {
      path: '/my',
      name: 'My',
      components: {
        default: My, 
        sidebar: Sidebar
      }
    },
    {
      path: '/all-articles',
      name: 'Articles',
      components: {
        default: Article, 
        sidebar: Sidebar
      }
    },
    {
      path: '/articles/:id',
      name: 'ArticleDetail',
      components: {
        default: ArticleDetail, 
        sidebar: Sidebar
      }
    },
    {
      path: '/tags',
      name: 'Tags',
      components: {
        default: Tag, 
        sidebar: Sidebar
      }
    }
  ]
})
