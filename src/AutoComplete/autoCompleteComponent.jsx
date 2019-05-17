import React, { Component } from 'react';
import data from '../data/datasource.json';


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
        let _filterData = [];
        searchtext = e.target.value;
        const _data = (search) => {
            return data.booksData.filter((i, index) => {
                retrun(i.BookName.indexOf(search) > -1);


            })
        }
        console.log(_data);
        this.setState({ searchtext }, () => {
            _data(searchtext);
        });

    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.searchtext} onChange={this.onSearchHandler} />
                {/* {this.state.filterData.map((item) => {
                    return <div key={item}>{item}</div>
                })} */}
            </div>
        )
    }

}

export default AutoCompleteComponent;