import React from 'react'
import { connect } from 'react-redux'
import addAction from '../actionCreator/counterActionCreator'
import Header from './nav/header'



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
                <p>{count}</p>
                <div>
                    <button onClick={this.add}> plus </button>
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