import CustomLogin from '../src/components/login'
import { useRouter } from 'next/router'
import Layout from '../src/layout/general'
import { GetServerSideProps } from 'next'
export default function Login(props) {
  const router = useRouter()
  const goToHome = () => {
    router.push('/', undefined, { shallow: true })
  }
  return (
    <Layout>
      <CustomLogin
        googleClientId={props.googleClientid}
        facebookClientId={props.facebookClientId}
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

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      googleClientId: process.env.GOOGLE_CLIENT_ID,
      facebookClientId: process.env.FACEBOOK_CLIENT_ID
    },
  }
}