import style from '../../styles/category.module.scss'
export default function Category(props: ICategory) {
  return (
    <div className={style.container}>
      <img src={props.imageUrl} alt={props.imageUrl} loading="lazy" />
      <span>{props.name}</span>
    </div>
  )
}