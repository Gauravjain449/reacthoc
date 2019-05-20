import React, { Component } from 'react';
import HOCAuto from './hocAutoCompleteComponent';
import data from '../data/datasource.json';
class File2Auto extends Component {

    render() {
        return (
            <div>
                Gaurav Jain
            </div>
        );
    }
}
export default HOCAuto(File2Auto, data);