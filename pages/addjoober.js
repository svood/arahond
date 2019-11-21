import React from 'react'
import { withRedux } from '../lib/redux'
import { useRouter } from 'next/router';
import { Container, Button, FormInput } from "shards-react";
import { addJoober } from '../reducers/api'
import Router from 'next/router'
import Header from '../components/header'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

class jobberPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleField = this.handleField.bind(this);
        this.ApiAddJoober = this.ApiAddJoober.bind(this);
        this.state = {
            inn: "",
            name: "",
            last_name: "",
            patronymics: "",
            birthday: "",
            photo: "",
            phone: "",
        };
    }

    static async getInitialProps({ req }) {

    }


    async ApiAddJoober() {
        let data = {
            'inn': this.state.inn,
            'name': this.state.name,
            'last_name': this.state.last_name,
            'patronymics': this.state.patronymics,
            'birthday': this.state.birthday,
            'photo': this.state.photo,
            'phone': this.state.phone,
        }

        const res = await addJoober(data);

        if (res.data.objectId) {
            Router.push(`/jooberinfo?id=${res.data.objectId}`)
        }
        console.log(res.data.objectId)


    }

    handleField(field, data) {

        switch (field) {
            case 'inn':
                this.setState(prevState => {
                    return { inn: data };
                });
                break;
            case 'name':
                this.setState(prevState => {
                    return { name: data };
                });
                break;
            case 'last_name':
                this.setState(prevState => {
                    return { last_name: data };
                });
                break;
            case 'patronymics':
                this.setState(prevState => {
                    return { patronymics: data };
                });
                break;
            case 'birthday':
                this.setState(prevState => {
                    return { birthday: data };
                });
                break;
            case 'photo':
                this.setState(prevState => {
                    return { photo: data };
                });
                break;
            case 'phone':
                this.setState(prevState => {
                    return { phone: data };
                });
                break;
        }


        this.setState(prevState => {
            return { field: data };
        });
    }


    render() {
        const { modal } = this.state;
        return (

            <>

                <Container>
                    <Header />
                    <h1>Add jobber Page</h1>
                    <FormInput onChange={(e) => this.handleField('inn', e.target.value)} className="addJoberInput" placeholder="Инн" />
                    <FormInput onChange={(e) => this.handleField('phone', e.target.value)} className="addJoberInput" placeholder="телефон" />
                    <FormInput onChange={(e) => this.handleField('name', e.target.value)} className="addJoberInput" placeholder="Имя" />
                    <FormInput onChange={(e) => this.handleField('last_name', e.target.value)} className="addJoberInput" placeholder="Фамилия" />
                    <FormInput onChange={(e) => this.handleField('patronymics', e.target.value)} className="addJoberInput" placeholder="Отчество" />
                    <FormInput onChange={(e) => this.handleField('birthday', e.target.value)} className="addJoberInput" placeholder="Дата рождения" />
                    <Button theme="success" onClick={this.ApiAddJoober}>Success</Button>
                </Container>
            </>

        )
    }
}

export default withRedux(jobberPage)