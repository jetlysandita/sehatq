import style from '../../styles/login.module.scss'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GoogleLogin } from 'react-google-login';
import { useForm } from 'react-hook-form';

export default function Login(props: { googleClientId: string, facebookClientId: string, onSubmit: (ILoginForm) => void, onGoogleLogin: (any) => void, onFacebookLogin: (any) => void }) {
  const { register, handleSubmit } = useForm<ILoginForm>()
  const onSubmit = (data) => {
    if (props.onSubmit)
      props.onSubmit(data)
  }


  return (
    <div className={style.container}>
      <div className={style.form}>
        {process.env.GOOGLE_CLIENT_ID}
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} >
          <label>username</label>
          <input required type="text" placeholder="username" ref={register} name="username" />
          <label>password</label>
          <input autoComplete="****" required type="password" placeholder="password" ref={register} name="password" />
          <div className={style.bottom}>
            <div className={style.checkbox}>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <button>Sign In</button>
          </div>
        </form>
        <FacebookLogin
          appId={props.facebookClientId}
          fields="name,email,picture"
          callback={(response) => {
            props.onFacebookLogin(response)
          }}

          render={renderProps => (
            <div onClick={renderProps.onClick} className={style.facebook}>
              <FontAwesomeIcon icon={faFacebook} size="1x" style={{ marginRight: "10px" }} />
              <span>
                Sign in With Facebook
                </span>
            </div>
          )}
        />
        <GoogleLogin
          clientId={props.googleClientId}
          render={renderProps => (
            <div onClick={(e) => {
              e.preventDefault()
              renderProps.onClick()
            }} className={style.google}>
              <FontAwesomeIcon icon={faGoogle} size="1x" style={{ marginRight: "10px" }} />
              <span>
                Sign In with Google
                </span>
            </div>
          )}
          onSuccess={(response) => { props.onGoogleLogin(response) }}
          onFailure={(response) => { console.log(response) }}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  )
}
