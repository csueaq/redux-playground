import React from 'react'
import { connect } from 'react-redux'
import addAction from '../actionCreator/counterActionCreator'

class counter extends React.Component {
    add() {
        this.props.dispatch(addAction());
    }
    componentDidMount(){
        //console.log(this.props);
    }
    componentDidUpdate() {
        //console.log(this.props);
    }
    render () {
        var {count}  = this.props;

        return (
            <div>
                <p>{count}</p>
                <button title="aa" onClick={this.add.bind(this)}>plus</button>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        count: state.toJS().count
    };
}
export default connect(mapStateToProps)(counter)