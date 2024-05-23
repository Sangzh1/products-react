import { useContext } from "react"
import { GlobalContext } from "../context/GlobalContext"
import { useCollection } from "../hooks/useCollection"
import ProductList from '../components/ProductList'

function Products() {
  const {user, dispatch} = useContext(GlobalContext)
  const {documents:products} = useCollection("products", ["uid", "==", user.uid])
  return (
    <div className="bg-slate-900 max-container h-screen pt-[34px] pb-[34px]">
      <div className="flex items-center mb-10">
        <h3 className="text-white opacity-50 mr-2">Pages</h3>
        <p className="text-white">/ Products</p>
      </div>
      <div className="bg-slate-950 py-[30px] px-[25px]">
        <h1 className="text-white text-3xl">Products</h1>
        {products && <ProductList products={products}/>}
      </div>
    </div>
  )
}

export default Products