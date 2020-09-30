import { useSelector } from 'react-redux'
import HeaderWithIcon from '../src/components/headerWithIcon'
import { MiniProduct } from '../src/components/product'
import useGuard from '../src/hooks/useGuard'

export default function History() {
  useGuard()
  const favorite = useSelector(state => state.product.filter(item => {
    return item.loved
  }))

  return (
    <>
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
    </>
  )
}
