import React from 'react'
import { withRedux } from '../lib/redux'
import { useRouter } from 'next/router';
import withLayout from '../components/layout'
import { Container, Button, FormInput } from "shards-react";
import { addComment } from '../reducers/commentsApi'


class AddComment extends React.Component {
    constructor(props) {
        super(props);
        this.handleField = this.handleField.bind(this);
        this.ApiAddComment = this.ApiAddComment.bind(this);
        this.state = {
            ratting: null,
            comment: "",
            jobber_id: "",
        };
    }

    static async getInitialProps({ req }) {

    }


    async ApiAddComment() {
        let data = {
            ratting: this.state.ratting,
            comment: this.state.comment,
            jobber_id: 'K9cl2TWyfp',
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
                    <h1>Add jobber Page</h1>

                    <FormInput onChange={(e) => this.handleField('ratting', e.target.value)} className="addJoberInput" placeholder="ratting" />
                    <FormInput onChange={(e) => this.handleField('comment', e.target.value)} className="addJoberInput" placeholder="comment" />
                    <Button theme="success" onClick={this.ApiAddComment}>Success</Button>
                </>
            </Container>
        )
    }
}

export default withRedux(AddComment)