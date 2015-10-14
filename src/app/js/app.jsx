import React from 'react'
import { Provider } from 'react-redux'
import Index from './view/index'


//class App extends React.Component {
export default React.createClass({
    render () {
        return (
            <Provider store={this.props.store}>
                { () => <Index /> }
            </Provider>
        )
    }
});

