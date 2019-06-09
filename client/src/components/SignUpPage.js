import React, { Component } from "react";
import { Grid, Header, Icon } from "semantic-ui-react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { signUpUser } from "../redux/authActionCreators";

const mapDispatchToProps = dispatch => ({
  signUpUser: user => dispatch(signUpUser(user))
});

const mapStateToProps = state => {
  return {
    isAuthenticated: state.authReducer.isAuthenticated,
    isLoading: state.authReducer.isLoading,
    errMess: state.authReducer.errMess
  };
};

class SignUpPage extends Component {
  state = {};

  render() {
    if (this.props.isAuthenticated) {
      this.props.onSignUp();
      return null;
    } else {
      return (
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column width={16}>
            <Header as="h2" color="blue" textAlign="center">
              Sign up to Readify
            </Header>
            <Formik
              initialValues={{ email: "", password: "", username: "" }}
              onSubmit={(values, { setSubmitting }) => {
                let user = {
                  username: values["username"],
                  password: values["password"]
                };
                this.props.signUpUser(user);
              }}
            >
              {props => {
                const { isSubmitting, handleSubmit } = props;
                return (
                  <form className={"ui form"} onSubmit={handleSubmit}>
                    <div className={"ui segment"}>
                      <Grid>
                        <Grid.Row style={{ paddingTop: "2em" }}>
                          <Grid.Column
                            width={2}
                            style={{ paddingRight: "0em", paddingLeft: "0em" }}
                          >
                            <Icon
                              name="user"
                              color="black"
                              style={{ paddingTop: "0.7em" }}
                            />
                          </Grid.Column>
                          <Grid.Column
                            width={13}
                            style={{ paddingRight: "0em", paddingLeft: "0em" }}
                          >
                            <div className="field">
                              <Field
                                type="text"
                                name="username"
                                placeholder={"Username"}
                              />
                              <ErrorMessage name="email" component="div" />
                            </div>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column
                            width={2}
                            style={{ paddingRight: "0em", paddingLeft: "0em" }}
                          >
                            {" "}
                            <Icon
                              name="lock"
                              color="black"
                              style={{ paddingTop: "0.7em" }}
                            />
                          </Grid.Column>
                          <Grid.Column
                            width={13}
                            style={{ paddingRight: "0em", paddingLeft: "0em" }}
                          >
                            <div className="field">
                              <Field
                                type="password"
                                name="password"
                                placeholder={"Password"}
                              />
                              <ErrorMessage name="password" component="div" />
                            </div>
                          </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                          <Grid.Column
                            width={16}
                            style={{ paddingRight: "0em", paddingLeft: "0em" }}
                          >
                            <button
                              type="submit"
                              className={
                                "ui button " +
                                (this.props.isLoading
                                  ? "loading "
                                  : " " +
                                    (this.props.errMess ? "red " : " primary "))
                              }
                            >
                              {!this.props.errMess
                                ? "Sign up"
                                : this.props.errMess}
                            </button>
                          </Grid.Column>
                        </Grid.Row>
                      </Grid>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </Grid.Column>
        </Grid>
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpPage);
