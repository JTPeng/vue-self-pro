// 路由懒加载
const Main = () => import('../pages/Main/Main.vue')
const Category = () => import('../pages/Category/Category.vue')
const Personal = () => import('../pages/Personal/Personal.vue')
const Search = () => import('../pages/Search/Search.vue')
const Topic = () => import('../pages/Topic/Topic.vue')
const ShopCart = () => import('../pages/ShopCart/ShopCart.vue')

import TopicDetail from '../components/TopicDetail/TopicDetail.vue'
import CategoryDetails from '../components/CategoryDetails/CategoryDetail.vue'

export default [
  {
    path: '/main',
    component: Main,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/category/categoryDetail/:id',
        component: CategoryDetails,
        meta: {
          isShowFooter: true
        }
      },
    ]
  },
  {
    path: '/search',
    component: Search,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/topic',
    component: Topic,
    meta: {
      isShowFooter: true
    },
    children: [
      {
        path: '/topic/topicDetail/:id',
        component: TopicDetail,
        meta: {
          isShowFooter: true
        }
      }
    ]
  },
  {
    path: '/shopcart',
    component: ShopCart,
    meta: {
      isShowFooter: true
    }
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '',
    redirect: '/main'
  }
]
