import React from 'react';
import { withRedux } from '../lib/redux';
import { useRouter } from 'next/router';
import withLayout from '../components/layout'
import { getJooberData } from '../reducers/api'
import { getComments } from '../reducers/commentsApi'
import { Container, Row, Button, FormInput, Col } from "shards-react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import Header from '../components/header'
import AddComment from '../components/addcomment'
import Rating from 'react-rating'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "../style.css"

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
                id: query.query.id,
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
        const count_ratting = () => {
            let count = 0;
            let total = 0;

            data.comments.map((item, i) => (
                count += item.ratting,
                total += 1
            ))
            return <Rating
                initialRating={count / total}
                readonly
            />;
        }
        return (
            <Container>
                <Header />
                <Container>

                    <Row>
                        <div className="userInfoTitle">Отзывы: {data.name} {data.last_name}</div>
                    </Row>
                    <Row className="userInfoMain">

                        <Col className="userinfoPhoto"><img style={{ width: '100%' }} src={(data.photo) ? data.photo.url : "../static/male-user-icon-vector-8865469.jpg"} /></Col>
                        <Col>
                           <Row center>{data.last_name} {data.name} {data.patronymics}</Row> 
                           <Row>Дата рождения: {new Date(data.birthday).toLocaleDateString("ru-RU") }</Row>
                           <Row>Всего комментариев: { (data.comments) ? data.comments.length:null}</Row>
                           <Row>Рейтинг: {count_ratting()}</Row>
                        </Col>
                    </Row>

                    <Row className="addNewComment">
                        <AddComment id={data.id} />
                    </Row>

                

                        {
                            (data.comments) ? data.comments.map((item, i) => (
                                <Container className="commentsBlock">
                                    <Row className="commentUserInfo">
                                        <Col>{new Date(item.createdAt).toLocaleDateString("ru-RU")}</Col>
                                        <Col className="userCommentRaiting">
                                            <Rating
                                                initialRating={item.ratting}
                                                readonly
                                            />
                                        </Col>
                                    </Row>
                                    <Row className="commentInfo">
                                        {item.comment}
                                    </Row>
                                </Container>
                            )) : null
                        }
                   


                </Container>
            </Container>
        )
    }
}

export default withRedux(jobberPage)