import React from 'react';
import { withRedux } from '../lib/redux';
import { useRouter } from 'next/router';
import withLayout from '../components/layout'
import { getJooberData } from '../reducers/api'
import { getComments } from '../reducers/commentsApi'
import { Container, Row, Button, FormInput } from "shards-react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Header from '../components/header'
import AddComment from '../components/addcomment'
class jobberPage extends React.Component {

    constructor(props) {
        super(props);
    }

    static async getInitialProps(query) {

        //console.log("Asdy", query.query.id)
        let res = await getJooberData(query.query.id)
        let comments = await getComments(query.query.id);
        console.log(res.data)
        return {
            data: {
                inn: res.data.inn,
                name: res.data.name,
                last_name: res.data.last_name,
                patronymics: res.data.patronymics,
                birthday: res.data.birthday,
                photo: res.data.photo,
                phone: res.data.phone,
                comments: (comments.data) ? comments.data.results : null
            }

        };

    };


    componentDidMount() {


    }

    router = () => {
        const router = useRouter();
        return router
    }


    render() {
        const { data } = this.props
        return (
            <>
                <Header />
                <Container>

                    <Row>
                        <h1>Отзывы: {data.name} {data.last_name}</h1>
                    </Row>
                    <Row>
                        <Table>
                            <Tbody>
                                <Tr>
                                    <Td ><img style={{ width: '100px' }} src={(data.photo) ? data.photo.url : "../static/male-user-icon-vector-8865469.jpg"} /></Td>
                                </Tr>
                                <Tr>
                                    <Td >ИНН</Td>
                                    <Td >{data.inn}</Td>
                                </Tr>
                                <Tr>
                                    <Td >Имя</Td>
                                    <Td>{data.name}</Td>
                                </Tr>
                                <Tr>
                                    <Td >Фамилия</Td>
                                    <Td >{data.last_name}</Td>
                                </Tr>
                                <Tr>
                                    <Td >Отчество</Td>
                                    <Td >{data.patronymics}</Td>
                                </Tr>
                                <Tr>
                                    <Td >Дата Рождения</Td>
                                    <Td >{data.birthday}</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </Row>

                    <Row>
                        <Table>
                            <Thead>
                                <Tr>
                                    <Th>Дата</Th>
                                    <Th>Коммментарий</Th>
                                    <Th>Рейтинг</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {
                                    (data.comments) ? data.comments.map((item, i) => (

                                        <Tr key={i}>
                                            <Td >{item.createdAt}</Td>
                                            <Td >{item.comment}</Td>
                                            <Td >{item.ratting}</Td>
                                        </Tr>

                                    )) : null
                                }
                            </Tbody>
                        </Table>
                    </Row>
                    <Row>

                        <AddComment/>
                    </Row>
                </Container>
            </>
        )
    }
}

export default withRedux(jobberPage)