import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


export default class LoginPage extends Component {
    state = {}
  
    render() {
  
      return (
        <div className='login-form'>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.login-form {
            height: 100%;
        }
        `}
        </style>
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
        <Grid.Column style={{ minWidth: 388, Width: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
            Log In to your account
            </Header>
            <Form size='large'>
            <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                />

                <Button color='blue' fluid size='large'>
                Login
                </Button>
            </Segment>
            </Form>
            <Message>
            New to us? <a href='#'>Sign Up</a>
            </Message>
        </Grid.Column>
        </Grid>
    </div>
      )
    }
  }