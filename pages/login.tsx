import CustomLogin from '../src/components/login'
import { useRouter } from 'next/router'
import Layout from '../src/layout/general'
export default function Login() {
  const router = useRouter()
  const goToHome = () => {
    router.push('/', undefined, { shallow: true })
  }
  return (
    <Layout>
      <CustomLogin
        onSubmit={(data) => {
          localStorage.token = 'normal'
          console.log(data)
          goToHome()
        }}
        onFacebookLogin={(response) => {
          localStorage.token = 'facebook'
          console.log(response)
          goToHome()
        }}
        onGoogleLogin={(response) => {
          localStorage.token = 'google'
          console.log(response)
          goToHome()
        }} />
    </Layout>)
}
