import React, {Component} from 'react'
import {Grid, Header} from 'semantic-ui-react'
import {ErrorMessage, Field, Formik} from 'formik';
import {connect} from "react-redux";
import {loginUser} from "../redux/authActionCreators";

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
                        Login to Readify
                    </Header>
                    <Formik
                        initialValues={{password: '',username:''}}
                        onSubmit={(values, {setSubmitting}) => {
                            let user = {"username":values['username'], "password":values['password']}
                            this.props.loginUser(user)
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
                                    <button type="submit" className={"ui button " + (this.props.isLoading ? 'loading ' : ' ' + (this.props.errMess ? 'red ' : ' '))}>
                                        {!this.props.errMess?'Submit':this.props.errMess}
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