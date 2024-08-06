import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { ProductProps } from "../home";
import { CartContext } from "../../contents/CartContent";
import { BsCartPlus } from "react-icons/bs";
import toast from "react-hot-toast";


export function ProductDetail(){
    const { id } = useParams();
    const [product, setProduct] = useState<ProductProps>()
    const { addItemCart } = useContext(CartContext)

    useEffect(() => {
        async function getProducts(){
            const response = await api.get(`/products/${id}`)
            setProduct(response.data)
        }
        getProducts();
    }, [id])

    function handleAddItem(product: ProductProps){
        toast.success("Produto adicionado ao carrinho")
        addItemCart(product)
    }
    

    return(
        <div>
            <main className="w-full max-w-7xl px-4 mx-auto my-6">
                {product && (
                    <section className="flex w-full">
                       <div className="flex flex-col md:flex-row">
                            <img 
                                className="flex-1 max-h-72 object-contain"
                                src={product.cover}
                                alt={product.title} />

                            <div className="ml-6">
                                <p className="font-bold text-2xl mb-6">{product.title}</p>
                                
                                {product.description}
                                
                            <div className="flex gap-3">    
                                <p className="mt-10 text-slate-900/80 font-bold">{product.price.toLocaleString("pt-BR",{
                                    style: "currency",
                                    currency: "BRL"
                                })}</p>

                                <button 
                                    onClick={() => handleAddItem(product)}
                                    className="bg-slate-900/90 rounded p-1 mt-10">
                                    <BsCartPlus size={20} color="#FFF"/>
                                </button>

                            </div>

                            </div>
                        </div>
                    </section>
                )}
            </main>
        </div>
    )
}