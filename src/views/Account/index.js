import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, loadUser } from '../../store/actions/user'
import "./index.css";

import AppLogin from '../../components/app-account/app-login'
import AppRegister from '../../components/app-account/app-register'
import AppAccountProfile from '../../components/app-account/app-account-profile-new'
import AppBrands from '../../components/app-brands'
import AppCurrentPath from '../../components/app-navigation/app-current-path'


const checkLoggedIn = (loggedIn, user) => {
  if(!loggedIn && user !== null){
    return (
      <div>
        <div className="row">
            <AppLogin />
            <AppRegister />
        </div>
      </div>
    )
  } else {
    return (
        <AppAccountProfile user={user}/>
    )
  }

}

export default function Account() {

  const user = useSelector(state => state.user.user)
  const loggedIn = useSelector(state => state.user.loggedIn)
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div>
      <AppCurrentPath/>
      <div className="user-bg">
        <div className="container">
          {checkLoggedIn(loggedIn, user, () => dispatch(logout()))}
        </div>
      </div>
      <AppBrands/>
    </div>
  )
}
