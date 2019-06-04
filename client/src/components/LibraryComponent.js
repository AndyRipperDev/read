import React from "react";
import PageBookReader from "./PageBookReader";
import { connect } from "react-redux";
import { Grid, Card, Image, Icon } from "semantic-ui-react";

const mapStateToProps = state => {
  return {
    bookPreviews: state.bookPreviews
  };
};

class BookReaderWrapperComponent extends React.Component {
  render() {
    const columns = this.props.bookPreviews.map(bookPreview => {
      return (
        <Grid.Column key={bookPreview.id}>
          <Card>
            <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
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
