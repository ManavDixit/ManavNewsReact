import React, { Component } from 'react'
import './Spinner.css';
import loading from './loading.gif'
export default class Spinner extends Component {
    render() {
        return (
            <div id='spinnerBox'>
                <img src={loading} alt="spinner" />
            </div>
        )
    }
}
