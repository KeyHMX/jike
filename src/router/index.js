import { createBrowserRouter } from 'react-router-dom'

import Login from '@/pages/Login'
import Layout from '../pages/Layout'//这里只是配置别名，没有联想,联想需要设置jsconfig.json

const router = createBrowserRouter([
  { 
    
    path: '/',
    element: <Layout />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

export default router