import styles from './productCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductsCard({product}) {
  return (
    <Link href={`/product/${product.id}`}>
      <li className={styles['product-card']}>
        <Image
          src={product.thumbnail}
          alt={`Image of ${product.title}`}
          width={256}
          height={256}
        />
        <div className={styles.info}>
          <h3>{product.title}</h3>
          <p>${product.price}</p>
        </div>
      </li>
    </Link>
  )
}