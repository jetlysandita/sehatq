import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import style from '../../styles/searchBar.module.scss'
export default function SearchBar(props: ISearchBar) {
  const { register, handleSubmit, watch } = useForm<ISearchForm>()
  const onSubmit = (data) => {
    if (props.onSubmit)
      props.onSubmit(data.search)
  }

  useEffect(() => {
    if (props.onChange)
      props.onChange(watch('search'))
  }, [watch('search')])

  return (
    <>
      <div className={style.container}>
        <FontAwesomeIcon icon={faSearch} />
        <form onSubmit={handleSubmit(onSubmit)} >
          <input type="text" ref={register()} name="search" defaultValue={props.defaultValue} />
        </form>
      </div>
    </>
  )
}