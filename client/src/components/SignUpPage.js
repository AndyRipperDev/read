import React, {Component} from 'react'
import {Grid, Header} from 'semantic-ui-react'
import {ErrorMessage, Field, Formik} from 'formik';
import * as Yup from 'yup';
import {connect} from "react-redux";


class SignUpPage extends Component {
    state = {};

    render() {
        return <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{minWidth: 388, Width: 450}}>
                <Header as='h2' color='blue' textAlign='center'>
                    Sign Up to Readify
                </Header>
                <Formik
                    initialValues={{email: '', password: '',username:''}}
                    onSubmit={(values, {setSubmitting}) => {
                        let bcrypt = require('bcryptjs');
                        let salt = bcrypt.genSaltSync(10)
                        let hash = bcrypt.hashSync("B4c0/\/", salt)
                        values['password'] = hash
                        console.log('tramvaj')

                        //this.props.postUser(values)
                        this.props.onSignUp()
                    }}
                >
                    {props => {
                        const {
                            isSubmitting,
                            handleSubmit,
                        } = props;
                        return (
                            <form className={'ui form'} onSubmit={handleSubmit}>
                                <div className="field">
                                    <Field type="text" name="username" placeholder={'Username'}/>
                                    <ErrorMessage name="email" component="div"/>
                                </div>
                                <div className="field">
                                    <Field type="password" name="password" placeholder={'Password'}/>
                                    <ErrorMessage name="password" component="div"/>
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </form>
                        );
                    }}
                </Formik>
            </Grid.Column>
        </Grid>
    }
}

export default SignUpPage