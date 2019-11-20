import React from 'react'
import { withRedux } from '../lib/redux'
import { useRouter } from 'next/router';
import withLayout from '../components/layout'


const jobberPage = () => {
    const router = useRouter()

    return (
        <>
            <h1>jobber Page</h1>
            <h1>{router.query.id}</h1>
        </>
    )
}

jobberPage.getInitialProps = async ({ reduxStore }) => {


    return {}
}

export default withRedux(withLayout(jobberPage))
