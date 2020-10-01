import SearchBar from "../src/components/searchBar";
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import Category from "../src/components/category";
import Product from "../src/components/product";
import NavBar from "../src/components/navBar";
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from "react";
import { UPDATE_PRODUCT, CHANGE_FAVORITE } from "../redux/actions/productActions";
import HeaderWithIcon from "../src/components/headerWithIcon";
import useGuard from "../src/hooks/useGuard";
import Layout from "../src/layout/general";
import Head from "next/head";

export const config = { amp: 'hybrid' }
export default function Index(props) {
  useGuard()
  const dispatch = useDispatch()
  const product = useSelector(state => state.product)
  useEffect(() => {
    if (product.length <= 0) {
      dispatch({
        type: UPDATE_PRODUCT,
        data: props.product
      })
    }
  }, [])
  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)
  const topRef = useRef(null)
  const scrollToTop = () => scrollToRef(topRef)

  return (
    <Layout>
      <Head>
        <script async src="https://cdn.ampproject.org/v0.js" />

      </Head>
      <div ref={topRef}></div>
      <HeaderWithIcon icon={faHeart}>
        <Link shallow href="/search">
          <div style={{ width: "100%", display: "flex", alignItems: "center" }}>
            <SearchBar />
          </div>
        </Link>
      </HeaderWithIcon>
      <div style={{ display: "flex", overflowX: "auto" }}>
        {
          props.category.map(item => {
            return <Category {...item} key={item.id} />
          })
        }
      </div>
      <h1>Promo
      </h1>
      <div>
        {
          product.length > 0 && product.map(item => {
            return <Product product={item} key={item.id} onClickFavorite={(id) => {
              dispatch({
                type: CHANGE_FAVORITE,
                id
              })
            }} />
          })
        }
        <div style={{ display: "flex", justifyContent: "center", backgroundColor: "blue", margin: "0 50px", color: "white" }} onClick={() => scrollToTop()}>Go To Top</div>
      </div>
      <NavBar />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://private-4639ce-ecommerce56.apiary-mock.com/home')
  const dataJson = await res.json()

  return {
    props: {
      category: dataJson[0].data.category,
      product: dataJson[0].data.productPromo
    },
  }
}