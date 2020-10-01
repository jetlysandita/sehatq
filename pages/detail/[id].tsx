import { GetServerSideProps } from 'next'
import { useSelector, useDispatch } from 'react-redux'
import { DetailProduct } from '../../src/components/product'
import { ADD_HISTORY } from '../../redux/actions/history.Actions'
import { CHANGE_FAVORITE } from '../../redux/actions/productActions'
import useGuard from '../../src/hooks/useGuard'
import Layout from '../../src/layout/general'
import Swal from 'sweetalert2'
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
  const clickBuy = (product) => {
    dispatch({ type: ADD_HISTORY, data: product })
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'your purchase was successful',
      showConfirmButton: false,
      timer: 1500
    })
  }
  const dispatch = useDispatch()
  return (
    <Layout>

      {product && < DetailProduct product={product} onClick={(product) => clickBuy(product)} onClickFavorite={(id) => {
        dispatch({
          type: CHANGE_FAVORITE,
          id
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