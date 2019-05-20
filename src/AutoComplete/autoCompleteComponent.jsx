import React, { Component } from 'react';
import data from '../data/datasource.json';
import './autoComplete.css'

class AutoCompleteComponent extends Component {
    constructor(props) {
        super(props);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.state = ({
            filterData: [],
            searchtext: ''
        })
    }
    onSearchHandler(e) {
        let { filterData, searchtext } = this.state;
        filterData = [];
        searchtext = e.target.value;
        filterData = data.booksData.filter((data) => {
            return data.BookName.toLowerCase().startsWith(searchtext);
        }).slice(0, 10);
        this.setState({
            searchtext, filterData
        });
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.searchtext} onChange={this.onSearchHandler} />
                {this.state.filterData.length > 0 && <div><ul className="ul-without-bullet">
                    {this.state.filterData.map((item) => {
                        return <li key={item.BookID}>{item.BookName}</li>
                    })}
                </ul></div>}
            </div>
        )
    }

}

export default AutoCompleteComponent;