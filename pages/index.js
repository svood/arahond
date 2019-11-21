import React from 'react'
import { useSelector } from 'react-redux'
import { withRedux } from '../lib/redux'
import { getAllJobers } from '../reducers/api';
import "../style.css"
import { BannerHome } from '../components/baners'


import Joobersist from '../components/joobersList';
import FindJobber from '../components/findjoober';
import Header from '../components/header'
import { Container, Row, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

const IndexPage = () => {

  console.log(useSelector(state => state.data))

  return (

    <Container >
      <Header />

      <Row>
        <FindJobber />
      </Row>
      <Row>
        <Container>
          <BannerHome />
        </Container>
      </Row>
      <Row>
        <Joobersist />
      </Row>
    </Container>

  )
}

IndexPage.getInitialProps = async ({ reduxStore }) => {

  const res = await getAllJobers();

  reduxStore.dispatch({
    type: 'GETJOBBERSLIST',
    data: res.data
  });

  return {}
}

export default withRedux(IndexPage)
