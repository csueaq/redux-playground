import React from 'react'
import { connect } from 'react-redux'
import addAction from '../actionCreator/counterActionCreator'
import Header from './nav/header'
import RaisedButton from 'material-ui/lib/raised-button'
import Avatar from 'material-ui/lib/avatar'



const counter = React.createClass({
    add() {
        this.props.dispatch(addAction());
    },
    componentDidMount(){
        //console.log(this.props);
    },
    componentDidUpdate() {
        //console.log(this.props);
    },
    render () {
        var {count}  = this.props;

        return (
            <div>
                <Header />
                <Avatar>{count}</Avatar>
                <div>
                    <RaisedButton onClick={this.add} label='plus' />
                </div>

            </div>
        )
    }

});
function mapStateToProps(state) {
    return {
        count: state.toJS().count
    };
}
export default connect(mapStateToProps)(counter)