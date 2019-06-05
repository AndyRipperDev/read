import React from "react";
import PageBookReader from "./PageBookReader";
import { connect } from "react-redux";
import {
  Grid,
  Card,
  Image,
  Dimmer,
  Header,
  Button,
  Icon
} from "semantic-ui-react";

const mapStateToProps = state => {
  return {
    bookPreviews: state.bookPreviews
  };
};

class BookReaderWrapperComponent extends React.Component {
  state = {};

  handleShow = () => this.setState({ active: true });
  handleHide = () => this.setState({ active: false });

  render() {
    const columns = this.props.bookPreviews.map(bookPreview => {
      const { active } = this.state;
      const content = (
        <div>
          <Button inverted animated size="huge">
            <Button.Content visible>Read</Button.Content>
            <Button.Content hidden>
              <Icon name="align left" />
            </Button.Content>
          </Button>
          <Button inverted animated size="huge">
            <Button.Content visible>Info</Button.Content>
            <Button.Content hidden>
              <Icon name="info circle" />
            </Button.Content>
          </Button>
        </div>
      );
      return (
        <Grid.Column key={bookPreview.id}>
          <Card>
            <Dimmer.Dimmable
              as={Image}
              blurring
              dimmed={active}
              dimmer={{ active, content }}
              onMouseEnter={this.handleShow}
              onMouseLeave={this.handleHide}
              // size="medium"
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
            >
              {/*</Dimmer.Dimmable>/<Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />*/}
            </Dimmer.Dimmable>
            <Card.Content>
              <Card.Header>{bookPreview.name}</Card.Header>
              <Card.Meta>
                <span>{bookPreview.author}</span>
              </Card.Meta>
            </Card.Content>
          </Card>
        </Grid.Column>
      );
    });

    return (
      <Grid doubling columns={6}>
        {columns}
      </Grid>
    );
  }
}

export default connect(mapStateToProps)(BookReaderWrapperComponent);
