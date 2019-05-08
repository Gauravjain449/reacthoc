import React, { Component } from 'react';
import HOCFile1 from './HOCFile1';

class File1 extends Component {
   
    render() {
        return (
            <div>
                Gaurav Jain {this.props.city} {this.props.hoccount}
                <button onMouseOver={this.props.hochandleClick}>Click</button>
            </div>
        );
    }
}

export default HOCFile1(File1,5);