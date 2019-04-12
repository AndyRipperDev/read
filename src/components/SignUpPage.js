import React, { Component } from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'


export default class SignUpPage extends Component {
    state = {}
  
    render() {
  
      return (
        <div className='signup-form'>
        <style>{`
        body > div,
        body > div > div,
        body > div > div > div.signup-form {
            height: 100%;
        }
        `}
        </style>
        <Grid textAlign='center' style={{ height: '100%'}} verticalAlign='middle'>
        <Grid.Column style={{ minWidth: 388, Width: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
            Sign Up to Readify
            </Header>
            <Form size='large'>
            <Segment stacked>
                <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Name' />
                <Form.Input fluid icon='user' iconPosition='left' placeholder='Surname' />
                <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password'
                type='password'
                />
                <Form.Input
                fluid
                icon='lock'
                iconPosition='left'
                placeholder='Password check'
                type='password'
                />

                <Button color='blue' fluid size='large'>
                Sign Up
                </Button>
            </Segment>
            </Form>
            <Message>
            Already have an account? <a href='#'>Login</a>
            </Message>
        </Grid.Column>
        </Grid>
    </div>
      )
    }
  }