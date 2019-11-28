import React from 'react';
import { withRedux } from '../lib/redux';
import { useRouter } from 'next/router';
import withLayout from '../components/layout';
import { Container,Row, Button, FormInput, FormCheckbox, FormTextarea } from "shards-react";
import { addComment } from '../reducers/commentsApi';
import Rating from 'react-rating';


class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleField = this.handleField.bind(this);
        this.ApiAddComment = this.ApiAddComment.bind(this);

        this.handleChangeInSearch = this.handleChangeInSearch.bind(this);
        this.state = {
            id: this.props.id,
            ratting: 3,
            comment: "",
            jobber_id: "",
            inSearch: false,

        };
    }

    static async getInitialProps({ req }) {

    }

    handleChangeInSearch(e, inSearch) {
        const newState = {};
        newState[inSearch] = !this.state[inSearch];
        this.setState({ ...this.state, ...newState });
    }



    async ApiAddComment() {
        let data = {
            ratting: this.state.ratting,
            comment: this.state.comment,
            jobber_id: this.state.id,
            inSearch: this.state.inSearch,
        }
        const res = await addComment(data);
        console.log(res.data)
    }

    handleField(field, data) {
        switch (field) {
            case 'ratting':
                this.setState(prevState => {
                    return { ratting: data };
                });
                break;
            case 'comment':
                this.setState(prevState => {
                    return { comment: data };
                });
                break;
            case 'jobber_id':
                this.setState(prevState => {
                    return { jobber_id: data };
                });
                break;
        }
    }


    render() {

        return (
            <Container>
                <>
                    <Row className="userAddCommentTitle">Оставить комментарий:</Row>
                    <Row className="userAddCommentRaiting"><Rating {...this.props} initialRating={this.state.ratting} onClick={(value) => this.handleField('ratting', value)} /></Row>
                    <Row><FormTextarea onChange={(e) => this.handleField('comment', e.target.value)} className="addJoberInput" placeholder="Ваш комментарий" /></Row>
                    <Row className="commentInSearch">
                        <FormCheckbox
                            checked={this.state.orange}
                            onClick={e => this.handleChangeInSearch(e, "inSearch")}
                        > В розыске ?
                    </FormCheckbox>
                    </Row>
                    <Row className="addCommentButton"> <Button theme="success" onClick={this.ApiAddComment}>Отправить</Button></Row>
                </>
            </Container >
        )
    }
}

export default withRedux(AddComment)