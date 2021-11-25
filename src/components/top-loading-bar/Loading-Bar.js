import React, { Component } from 'react'
import './Loading-Bar.css'
export default class LoadingBar extends Component {
    render() {
        return (
            <div style={{width:this.props.width}} id='loadingBar'>
            </div>
        )
    }
}
