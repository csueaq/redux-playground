import React from 'react'
import { connect } from 'react-redux'
import addAction from '../../actionCreator/counterActionCreator'



const Counter = React.createClass({
    add() {
        this.props.dispatch(addAction());
    },
    render () {
        var {count} = this.props;

        return (
            <div>
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
export default connect(mapStateToProps)(Counter)