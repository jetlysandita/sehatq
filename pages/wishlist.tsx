import { useSelector } from 'react-redux'
import HeaderWithIcon from '../src/components/headerWithIcon'
import { MiniProduct } from '../src/components/product'
import useGuard from '../src/hooks/useGuard'
import Layout from '../src/layout/general'

export default function History() {
  useGuard()
  const favorite = useSelector(state => state.product.filter(item => {
    return item.loved
  }))

  return (
    <Layout>
      <HeaderWithIcon>
        <h1>Wishlist</h1>
      </HeaderWithIcon>
      <div>
        {
          favorite.map(item => {
            return <MiniProduct {...item} key={item.id} />
          })
        }
      </div>
    </Layout>
  )
}
