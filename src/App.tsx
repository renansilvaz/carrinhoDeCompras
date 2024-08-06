import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/home"
import Cart from "./pages/cart"
import { ProductDetail } from "./pages/product"
import { Layout } from "./components/layout"

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/carrinho",
        element: <Cart />
      },
      {
        path: "/product/:id",
        element: <ProductDetail/>
      }
    ]
  }
])
export { router };