import React from "react";
import {Button, Card, Dimmer, Grid, Icon, Image} from "semantic-ui-react";
import {fetchMyBookPreviews} from "../redux/bookActionCreators";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {
        bookPreviews: state.bookReducer.bookPreviews
    };
};


const mapDispatchToProps = dispatch => ({
    fetchMyBookPreviews: (user) => dispatch(fetchMyBookPreviews(user))
});

class BookCard extends React.Component {

    state = {};

    handleShow = () => this.setState({active: true});

    handleHide = () => this.setState({active: false});

    render() {
        const bookPreview = this.props.bookPreview
        console.log(this.props)
        const {active} = this.state;
        const content = (
            <div>
                <Button inverted animated size="huge">
                    <Button.Content visible>Read</Button.Content>
                    <Button.Content hidden>
                        <Icon name="align left"/>
                    </Button.Content>
                </Button>
                <Button inverted animated size="huge">
                    <Button.Content visible>Info</Button.Content>
                    <Button.Content hidden>
                        <Icon name="info circle"/>
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
                        dimmer={{active, content}}
                        onMouseEnter={this.handleShow}
                        onMouseLeave={this.handleHide}
                        // size="medium"
                        src={"data:image/" + bookPreview.coverExtension + ";base64," + bookPreview.coverData}
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
    }
}

class LibraryComponent extends React.Component {

    componentDidMount() {
        this.props.fetchMyBookPreviews()
    }

    render() {
        const columns = this.props.bookPreviews.map((bookPreview) => <BookCard
    bookPreview={bookPreview}/>)
        return <Grid doubling columns={6}>
            {columns}
        </Grid>

    }
}


 export default connect(mapStateToProps, mapDispatchToProps)(LibraryComponent)

