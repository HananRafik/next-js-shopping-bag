import styles from './product.module.css'
import Link from 'next/link'

import ProductsCard from '../components/ProductCard';
export default async function Products() {
  const data = await fetch('https://dummyjson.com/products?limit=12&sortBy=rating&order=desc')
  
  const products = await data.json();
  return (
    <div className={styles.products}>

        <div className={`${styles.wrapper} container`}>
           <h2>Highest Rated Product</h2>
           <p>Check out below a curated list of the products that received the highest rating from our customers</p>

           <ul className={styles['products-list']}>

            {
              products.products.map(product=>(
                <ProductsCard key={product.id} product={product}/>
              ))
            }
                
           </ul>

            <Link href="/products">
                <button> View all products</button>
            </Link>


        </div>
      
      
    </div>
  )
}
