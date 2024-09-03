import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Carros from './routes/Carros.jsx'
import Sobre from './routes/Sobre.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'

//função CreateBrowserRouter
const router = createBrowserRouter([
  {
    //Elemento Pai
      path:'/',element:<App/>,
      errorElement:<Error/>,

    //Elemento Filho
      children:[
        {path:'/',element:<Home/>},
        {path:'/login',element:<Login/>},
        {path:'/carros',element:<Carros/>},
        {path:'/sobre',element:<Sobre/>},
      ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*Chamando o componente GlobalStyle para estilizar */}
    <GlobalStyle/>
    <RouterProvider router={router} />
  </StrictMode>,
)
