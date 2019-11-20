import React from 'react'
import { withRedux } from '../lib/redux'


const loginPage = () => {

  return (
    <>
    <h1>Login Page</h1>
    </>
  )
}

loginPage.getInitialProps = async ({ reduxStore }) => {


  return {}
}

export default withRedux(loginPage)
