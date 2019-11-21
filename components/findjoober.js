import React from 'react'
import { withRedux } from '../lib/redux'
import { findJooberbyInn, findJooberbyPhone } from '../reducers/api'
import {
    InputGroup,
    InputGroupAddon,
    FormInput,
    Container, Row, Col, Button, Modal, ModalBody, ModalHeader
} from "shards-react";

import Router from 'next/router'

import Link from 'next/link'


class findJobber extends React.Component {
    constructor(props) {
        super(props);
        this.toggleInn = this.toggleInn.bind(this);
        this.togglePhone = this.togglePhone.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.state = {
            inn: "",
            phone: "",
            modal: false,
        };
    }

    static async getInitialProps({ req }) {

    }

    toggleInn(newinn) {
        this.setState(prevState => {
            return { inn: newinn };
        });
    }

    togglePhone(newphone) {
        this.setState(prevState => {
            return { phone: newphone };
        });
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
        });
    }



    async FindByInn() {
        const res = await findJooberbyInn(this.state.inn);
        if (res.data.results[0]) {
            Router.push(`/jooberinfo?id=${res.data.results[0].objectId}`)
        } else {
            this.toggleModal()
        }

    }

    async FindByPhone() {
        const res = await findJooberbyPhone(this.state.phone);
        if (res.data.results[0]) {
            Router.push(`/jooberinfo?id=${res.data.results[0].objectId}`)
        } else {
            this.toggleModal()
        }
    }




    render() {
        const { modal } = this.state;
        return (
            <Container className="findJobber">

                {/* <Row >
                    <Col sm="12" md="12" lg="12">
                        <div className="findJoobreTitle">Find Jobber</div>
                    </Col>
                </Row> */}
                <Row>
                    <Col sm="12" md="6" lg="6">
                        <InputGroup>
                            <FormInput onChange={(e) => this.toggleInn(e.target.value)} id="inn" placeholder="Поиск по инн" />
                            <InputGroupAddon type="append">
                                <Button onClick={(e) => this.FindByInn()} className="mainColorText">Найти</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col sm="12" md="6" lg="6">
                        <InputGroup>
                            <FormInput onChange={(e) => this.togglePhone(e.target.value)} id="phone" placeholder="Поиск по телефону" />
                            <InputGroupAddon type="append">
                                <Button onClick={(e) => this.FindByPhone()} theme="secondary">Найти</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>




                <Modal open={modal} toggle={this.toggleModal}>
                    <ModalHeader>Не найден</ModalHeader>
                    <ModalBody>
                        <div>По Вашему запросу работников не обнаружено</div>

                        <div> Хотие добавить ? </div>
                        <Link href={`/addjoober`}>
                            <a>Добавить</a>
                        </Link>
                    </ModalBody>
                </Modal>




            </Container>
        )
    }
}

export default withRedux(findJobber)