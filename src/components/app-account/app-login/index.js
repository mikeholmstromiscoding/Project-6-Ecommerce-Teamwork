import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../../store/actions/user'

import '../index.css'

import Google from '../../../assets/img/media-logos/google-icon.png'
import Facebook from '../../../assets/img/media-logos/facebook-icon.png'

export default function Login() {

  const loginErrorCode = useSelector(state => state.user.loginStatusCode)

  const dispatch = useDispatch()
  const [email, set_email] = useState("")
  const [password, set_password] = useState("")

  useEffect(() => {
  }, [dispatch])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const l_user = {
      email: email,
      password: password
    }
    dispatch(login(l_user))
    console.log(loginErrorCode)
  }

  const handleLoginError = () => {
    if(loginErrorCode === 404)
      return (<small className="invalid-login">This user does not exist!</small>)
    if(loginErrorCode === 400)
      return (<small className="invalid-login">Wrong password!</small>)
  }

  return (
    <div className="col-12 col-lg-6">
      <form className="custom-form" onSubmit={handleSubmit}>
        <h3 className="text-size-24">LOGIN</h3>
        <div className="form-group">
          <label htmlFor="l_username" className="text-size-14 font-montserrat">Username or email <span className="text-theme-color">*</span></label>
          <input type="text" className="form-control custom-r-input" id="l_username" value={email} onChange={e => set_email(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="l_password" className="text-size-14 font-montserrat">Password <span className="text-theme-color">*</span></label>
          <input type="password" className="form-control custom-r-input" id="l_password" value={password} onChange={e => set_password(e.target.value)}/>
        </div>
        { handleLoginError() }
        <button className="btn custom-theme-btn text-size-18 btn-p-t-c mt-3">
          LOGIN
        </button>
        <div className="d-flex align-items-center justify-content-between mt-4">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="accept-terms" />
            <label className="form-check-label" htmlFor="accept-terms">
              Remember me
            </label>
          </div>
          <p className="text-theme-color">Lost your password?</p>
        </div>
        <span className="d-flex align-items-center justify-content-between my-4">
          <hr />
          <p className="weight-medium">OR LOGIN WITH</p>
          <hr />
        </span>
        <div className="d-flex justify-content-between">
          <div className="opt-login opt-login-facebook d-flex align-items-center justify-content-center">
            <img src={Facebook} className="opt-login-img" alt=""/>
            <p>Facebook</p>
          </div>
          <div className="opt-login opt-login-google d-flex align-items-center justify-content-center">
            <img src={Google} className="opt-login-img" alt="" />
            <p>Google</p>
          </div>
        </div>
      </form>
    </div>
  )
}
