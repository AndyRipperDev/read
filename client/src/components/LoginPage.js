import React, {Component} from 'react'
import {Grid, Header} from 'semantic-ui-react'
import {ErrorMessage, Field, Formik} from 'formik';
import {connect} from "react-redux";
import {loginUser} from "../redux/actionCreators";

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user))
});

const mapStateToProps = state => {
    return {
        isAuthenticated: state.authReducer.isAuthenticated,
        isLoading: state.authReducer.isLoading,
        errMess: state.authReducer.errMess
    };
};


class LoginPage extends Component {
    state = {};

    render() {
        console.log(this.props)
        if(this.props.isAuthenticated)
        {
            this.props.onLogin()
            return (null);
        }
        else
        {
            return <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{minWidth: 388, Width: 450}}>
                    <Header as='h2' color='blue' textAlign='center'>
                        Sign Up to Readify
                    </Header>
                    <Formik
                        initialValues={{password: '',username:''}}
                        onSubmit={(values, {setSubmitting}) => {
                            var hash = require('hash.js')
                            hash = hash.sha256().update(values['password']).digest('hex')
                            let user = {"username":values['username'], "password":hash}
                            this.props.loginUser(user)
                            //this.props.postUser(values)
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
                                    <button type="submit" className={this.props.isLoading ? 'ui loading button' : 'ui button'}>
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
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);