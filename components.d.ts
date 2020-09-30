interface ISearchBar {
  onSubmit?: (value: string) => void,
  onChange?: (value: string) => void,
  defaultValue?: string
}

interface ISearchForm {
  search: string
}

interface ILoginForm {
  username: string,
  password: string
}