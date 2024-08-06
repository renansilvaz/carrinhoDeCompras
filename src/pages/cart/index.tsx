import { useContext } from "react"
import { CartContext } from "../../contents/CartContent"
import { Link } from "react-router-dom"

export default function Cart(){
    const {cart, total, addItemCart, removeItemCart} = useContext(CartContext)

    return (
      <div className="w-full max-w-7xl mx-auto">
        <h1 className="font-medium text-3xl text-center my-4">Meu carrinho</h1>

        {cart.length === 0 && (
          <div className="flex flex-col items-center justify-center">
            <p className="font-medium">Ops! Seu carrinho está vazio...</p>
            <Link to="/" className="bg-slate-500 rounded text-white p-3 mt-4 font-semibold">
              Acessar produtos
            </Link>
          </div>
        )}

        {cart.map( (item) => (
          <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
          <img 
            src={item.cover}
            alt={item.title}
            className="w-28" />

            <strong>Preço: {item.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL"
            })}</strong>

            <div className="flex gap-3 items-center justify-center">
              <button
                onClick={() => removeItemCart(item)} 
                className="bg-slate-600 text-white px-2 rounded font-medium flex items-center justify-center">
                -
              </button>
              {item.amount}
              <button
                onClick={() => addItemCart(item)} 
                className="bg-slate-600 text-white px-2 rounded font-medium flex items-center justify-center">
                +
              </button>
            </div>

            <strong className="float-right">
              SubTotal: {item.total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
              })}
            </strong>
        </section>
        ))}

        {cart.length > 0 && (
          <p className="font-bold mt-4">Total: {total}</p>
        )}
      </div>
    )
  }