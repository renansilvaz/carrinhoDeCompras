import { Link } from "react-router-dom"
import { FiShoppingCart } from "react-icons/fi"
import { useContext } from "react"
import { CartContext } from "../../contents/CartContent"

export default function Header(){
    const { cartAmount } = useContext(CartContext)

    return (
      <header className="w-full bg-slate-300 px-1">
        <nav className="w-full max-w-7xl h-14 flex items-center justify-between mx-auto">
          <Link to={"/"} className="font-bold text-2xl ml-4">
            Dev<span className="bg-gradient-to-r from-blue-400 to-slate-600 bg-clip-text text-transparent">Shop</span>
          </Link>

          <Link className="relative mx-4" to={"/carrinho"}>
            <FiShoppingCart size={24} color="#121212" />

            {cartAmount > 0 && (
              <span className="absolute -top-3 -right-2.5 bg-sky-500 rounded-full text-white w-6 h-6 flex items-center justify-center text-xs">
              {cartAmount}
            </span>
            )}

          </Link>
        </nav>
      </header>
    )
  }