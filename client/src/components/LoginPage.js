import React, {Component} from 'react'
import {Grid, Header} from 'semantic-ui-react'
import {ErrorMessage, Field, Formik} from 'formik';
import * as Yup from 'yup';
import {postLogin} from "../redux/actionCreators";
import {connect} from "react-redux";

const mapDispatchToProps = dispatch => ({
    postLogin: (user) => dispatch(postLogin(user))
});

class LoginPage extends Component {
    state = {};

    render() {
        return <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
            <Grid.Column style={{minWidth: 388, Width: 450}}>
                <Header as='h2' color='blue' textAlign='center'>
                    Login
                </Header>
                <Formik
                    initialValues={{password: '',username:''}}
                    onSubmit={(values, {setSubmitting}) => {
                        let bcrypt = require('bcryptjs');
                        let salt = bcrypt.genSaltSync(10)
                        let hash = bcrypt.hashSync("B4c0/\/", salt)
                        values['password'] = hash
                        this.props.postLogin(values)
                        this.props.onLogin()
                    }}
                    validationSchema={Yup.object().shape({
                        email: Yup.string()
                            .email()
                            .required('Required'),
                    })}
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
                                    <ErrorMessage name="username" component="div"/>
                                </div>
                                <div className="field">
                                    <Field type="password" placeholder='Password' name="password"/>
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

export default connect(null, mapDispatchToProps)(LoginPage)