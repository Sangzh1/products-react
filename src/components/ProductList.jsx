import { useDeleteDoc } from '../hooks/useDeleteDoc'
import { Link } from 'react-router-dom'

function ProductList(products) {
    const { deleteTodo } = useDeleteDoc()
  return (
    <>
      <ul className='grid grid-cols-2 my-10 gap-5'>
        {products && products.products.map((product) => {
          return(
            <li key={product.id} className='card card-compact w-370px bg-transparent border shadow-xl'>
              <figure>
                <img src={product.images} className='object-cover w-full h-48' alt="" />
              </figure>
              <div className='card-body'>
                <h2 className='card-title text-white font-bold text-lg'>
                  {product.name}
                </h2>
                <h2 className='text-white font-bold text-sm'>
                  {product.category}
                </h2>
                <h2 className='text-white font-bold'>
                  {product.price}
                </h2>
                <p className='text-white/50 w-[350px] mb-5'>
                  {product.description}
                </p>
                <button onClick={() => deleteTodo('products', product.id)} className='text-white w-[85px] bg-transparent border rounded-lg py-[10px]' data-tip="Delete">Delete</button>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductList