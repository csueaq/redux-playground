import React from 'react'
import { Provider } from 'react-redux'
import Counter from './view/counter'


//class App extends React.Component {
export default React.createClass({
    render () {
        return (
            <Provider store={this.props.store}>
                { () => <Counter /> }
            </Provider>
        )
    }
});

