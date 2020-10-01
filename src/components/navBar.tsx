import style from '../../styles/navBar.module.scss'
import Link from 'next/link'
export default function NavBar() {
  return (
    <>
      <div style={{ marginTop: "60px" }}></div>
      <div className={style.container}>
        <Link href='/' shallow>
          <span>Home</span>
        </Link>
        <span>Feed</span>
        <Link href='wishlist' shallow>
          <span>Cart</span>
        </Link>
        <Link href='history' shallow>
          <span>Profile</span>
        </Link>
      </div>
    </>
  )
}