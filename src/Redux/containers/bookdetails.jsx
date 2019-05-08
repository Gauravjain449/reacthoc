import React, { Component } from 'react';
import { connect } from 'react-redux';



class Bookdetails extends Component {
    render() {
        if (!this.props.Book) {
            return <div>Seleact the book!</div>
        }

        return (
            <div>
                {this.props.Book.title}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        Book: state.ActiveBook
    };
}
export default connect(
    mapStateToProps
)(Bookdetails);