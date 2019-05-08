import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedBook } from '../actions/index'
import { bindActionCreators } from 'redux';

class BookList extends Component {
    returnList() {
        return this.props.Books.map((item) => {
            return (
                <li
                    key={item.title}
                    onClick={() => this.props.selectedBook(item)}>
                    {item.title}</li>
            )
        })
    }


    render() {
        return (
            <div>
                <ul>
                    {this.returnList()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        Books: state.Books
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectedBook: selectedBook }, dispatch)


}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);