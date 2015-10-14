import React from 'react'
import { connect } from 'react-redux'
import addAction from '../actionCreator/counterActionCreator'
import Header from './nav/header'
import Counter from './partial/counter'



export default React.createClass({
    render () {
        var {count}  = this.props;

        return (
            <div>
                <Header />
                <Counter store={this.props.store}/>
            </div>
        )
    }

});