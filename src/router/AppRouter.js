import React from 'react'
import { Navigate, useRoutes } from 'react-router'
import { Cart } from '../components/Cart/Cart'
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer'
import { ItemListContainer } from '../components/ItemListContainer/ItemListContainer'

export const AppRouter = () => {
     
    const routes = useRoutes([
        {path:"/", element: <ItemListContainer greeting="Pagina Principal"/>},
        {path:"/productos", element: <ItemListContainer greeting="Productos"/>},
        {path:"/productos/:catId", element: <ItemListContainer greeting="Productos"/>},
        {path:"/detail/:ItemId", element: <ItemDetailContainer />},
        {path:"/cart", element: <Cart greeting="Carrito de Compras" />},
        {path:"*", element: <Navigate to="/" />},
    ])

    return routes;
}