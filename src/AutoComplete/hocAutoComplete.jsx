import React, { Component } from 'react';
import HOCAuto from './autoCompleteComponent';

class File2Auto extends Component {

    render() {
        return (
            <div>
                Gaurav Jain
            </div>
        );
    }
}

export default HOCAuto(File2Auto);