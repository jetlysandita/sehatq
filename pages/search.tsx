import SearchBar from "../src/components/searchBar";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MiniProduct as Product } from "../src/components/product";
import { GetServerSideProps } from 'next'
import { useState, useEffect } from "react";
import Link from 'next/link'
import useGuard from "../src/hooks/useGuard";
import Layout from "../src/layout/general";
export default function Search(props) {
  useGuard()
  const [productFilter, setProductFilter] = useState([])

  const filterProduct = (value: string) => {
    if (!value) {
      setProductFilter([])
    } else {
      setProductFilter(props.product.filter((item: IProductPromo) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
      }))
    }
  }
  return (
    <Layout>
      <div style={{ display: "flex", width: "100%", padding: "20px 20px" }}>
        <Link href="/" shallow>
          <div>
            <FontAwesomeIcon icon={faArrowLeft} size="2x" style={{ marginRight: "10px" }} />
          </div>
        </Link>
        <SearchBar onChange={(value) => filterProduct(value)} onSubmit={(value) => console.log(value)} />
      </div>
      <div>
        {
          productFilter.map(item => {
            return <Product {...item} key={item.id} />
          })
        }
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const res = await fetch('https://private-4639ce-ecommerce56.apiary-mock.com/home')
  const dataJson = await res.json()
  return {
    props: {
      product: dataJson[0].data.productPromo,
    },
  }
}