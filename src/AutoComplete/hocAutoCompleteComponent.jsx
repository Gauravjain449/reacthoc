import React, { Component } from 'react';
import cloneDeep from 'clone-deep';
import './autoComplete.css'

const HOCAuto = (com, data) => {
    class AutoCompleteComponent extends Component {
        constructor(props) {
            super(props);
            this.onSearchHandler = this.onSearchHandler.bind(this);
            this.OnSelectedValue = this.OnSelectedValue.bind(this);
            this.input = React.createRef();
            this.state = ({
                filterData: []
            })
        }
        onSearchHandler() {
            let { filterData } = this.state;
            filterData = [];
            let _records = cloneDeep(data);

            filterData = _records.booksData.filter((data) => {
                return data.BookName.toLowerCase().startsWith(this.input.current.value.toLowerCase());
            }).slice(0, 10);

            this.setState({
                filterData
            });
        }

        OnSelectedValue(e) {

            this.input.current.value = e.target.textContent;
            this.setState({
                filterData: []
            });
        }

        render() {
            return (
                <div>
                    <input type="text" ref={this.input} onChange={this.onSearchHandler} />
                    {this.state.filterData.length > 0 && <div><ul className="ul-without-bullet">
                        {this.state.filterData.map((item) => {
                            return <li key={item.BookID} onClick={(e) => this.OnSelectedValue(e)} >{item.BookName}</li>
                        })}
                    </ul></div>}
                </div>
            )
        }

    }
    return AutoCompleteComponent;
}

export default HOCAuto;