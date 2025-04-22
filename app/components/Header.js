import { headers } from "next/headers";
import styles from './header.module.css'
import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className={styles['app-header']}>
        <div className={`${styles.wrapper} container`}>

        <aside>
            <Link href="/">
             <Image 
                src="/logo.jpg" 
                alt="Website Logo"
                width={108}
                height={22}/>
            </Link>
            
        </aside>

        <aside>
            <nav>
                <ul>
                   
                    
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/products"><li>Product</li></Link>
                    <Link href="/bag"><li>Shopping Bag</li></Link>
                </ul>
            </nav>
        </aside>

        </div>
    </header>
  )
}
