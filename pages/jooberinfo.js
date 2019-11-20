import React from 'react';
import { withRedux } from '../lib/redux';
import { useRouter } from 'next/router';
import withLayout from '../components/layout'
import { getJooberData } from '../reducers/api'
import { Container, Button, FormInput } from "shards-react";



class jobberPage extends React.Component {
    
    
    static async getInitialProps (query) {
  
     console.log("Asdy",query.query.id)
       
    };


    componentDidMount() {
      

    }

    router =  () => {
        const router = useRouter();
        return router
    }


    render() {
        return (
            <Container>
                <h1>Add jobber Page</h1>
                {/* <div>{console.log(this.props)}</div> */}
            </Container>
        )
    }
}

export default withRedux(jobberPage)