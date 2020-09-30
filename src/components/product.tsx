import style from '../../styles/product.module.scss'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft, faShareAlt, faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
export default function Product({ product, onClickFavorite }: { product: IProductPromo, onClickFavorite: (id: string) => void }) {
  return (
    <div className={style.container}>
      <div className={style.image}>
        <Link href={`/detail/${product.id}`} shallow>
          <div>
            <img src={product.imageUrl} alt={product.imageUrl} />
          </div>
        </Link>
        <div onClick={() => { onClickFavorite(product.id) }}>
          {!product.loved
            ? <FontAwesomeIcon icon={faHeart} size="2x" style={{ marginRight: "10px" }} />
            : <FontAwesomeIcon icon={faHeartSolid} size="2x" color="red" style={{ marginRight: "10px" }} />}
        </div>
      </div>
      <Link href={`/detail/${product.id}`} shallow>
        <span>{product.title}</span>
      </Link>
    </div>
  )
}

export function MiniProduct(props: IProductPromo) {
  return (
    <Link href={`/detail/${props.id}`} shallow>
      <div className={style.miniContainer}>
        <img src={props.imageUrl} alt={props.imageUrl} />
        <div>
          <span>{props.title}</span>
          <span>{props.price}</span>
        </div>
      </div>
    </Link>
  )
}

export function DetailProduct({ product, onClick, onClickFavorite }: { onClickFavorite: (id: string) => void, product: IProductPromo, onClick: (product: IProductPromo) => void }) {
  return (
    <div className={style.detail}>
      <div className={style.header}>
        <div>
          <Link href="/" shallow>
            <div>
              <FontAwesomeIcon icon={faArrowLeft} size="2x" style={{ marginRight: "10px" }} />
            </div>
          </Link>
          <Link href="/" shallow>
            <div>
              <FontAwesomeIcon icon={faShareAlt} size="2x" style={{ marginRight: "10px" }} />
            </div>
          </Link>
        </div>
        <img src={product.imageUrl} alt={product.imageUrl} />
      </div>
      <div className={style.body}>
        <div className={style.title}>
          <h1>{product.title}</h1>
          <div onClick={() => { onClickFavorite(product.id) }}>
            {!product.loved
              ? <FontAwesomeIcon icon={faHeart} size="2x" style={{ marginRight: "10px" }} />
              : <FontAwesomeIcon icon={faHeartSolid} size="2x" color="red" style={{ marginRight: "10px" }} />}
          </div>
        </div>
        <p>{product.description}</p>
        <div className={style.footer}>
          <span>{product.price}</span>
          <button onClick={() => onClick(product)}>Buy</button>
        </div>
      </div>
    </div>
  )
}