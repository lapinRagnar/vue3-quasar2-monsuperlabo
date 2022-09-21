
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/about',
    component: () => import('layouts/MonLayout.vue'),
    children: [
      { path: 'moi', component: () => import('pages/AboutPage.vue') }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      { path: 'login', component: () => import('pages/auth/LoginPage.vue') },
      { path: 'register', component: () => import('pages/auth/RegisterPage.vue') },
      { path: 'confirmation-email', name:'confirEmail', component: () => import('pages/auth/ConfirmationInscriptionEmail.vue') },
      { path: 'forgot-password', name:'forgotPassword', component: () => import('pages/auth/ForgotPassword.vue') },
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
