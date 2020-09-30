import { useSelector } from 'react-redux'
import HeaderWithIcon from '../src/components/headerWithIcon'
import { MiniProduct } from '../src/components/product'
import useGuard from '../src/hooks/useGuard'
import Layout from '../src/layout/general'

export default function History() {
  useGuard()
  const history = useSelector(state => state.history)

  return (
    <Layout>
      <HeaderWithIcon>
        <h1>Purchase History</h1>
      </HeaderWithIcon>
      <div>
        {
          history.map(item => {
            return <MiniProduct {...item} key={item.id} />
          })
        }
      </div>
    </Layout>
  )
}
