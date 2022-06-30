import { createRouter, createWebHistory } from 'vue-router'
import ArticleView from '../views/ArticleView';
import ListArticleView from '../views/ListArticleView';

const routes = [
  {
    path: '/',
    name: 'article',
    component: ArticleView
  },
  {
    path: '/articles',
    name: 'articles',
    component: ListArticleView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
