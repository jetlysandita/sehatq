import { GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { DetailProduct } from '../../src/components/product'
import { ADD_HISTORY } from '../../redux/actions/history.Actions'
import { CHANGE_FAVORITE } from '../../redux/actions/productActions'
import useGuard from '../../src/hooks/useGuard'
import Layout from '../../src/layout/general'
export default function Detail(props) {
  useGuard()
  const product = useSelector(state => {
    let result
    state.product.forEach((item: IProductPromo) => {
      if (item.id === props.id) {
        result = item
      }
    })
    return result
  })
  const dispatch = useDispatch()
  return (
    <Layout>

      {product && < DetailProduct product={product} onClick={(product) => dispatch({ type: ADD_HISTORY, data: product })} onClickFavorite={(id) => {
        dispatch({
          type: CHANGE_FAVORITE,
          data: { id }
        })
      }} />}

    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      id: context.query.id
    },
  }
}