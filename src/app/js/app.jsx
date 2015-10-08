import React from 'react'
import { Provider } from 'react-redux'
import Counter from './view/counter'

export default class App extends React.Component {

    render () {
        return (
            <Provider store={this.props.store}>
                { () => <Counter /> }
            </Provider>
        )
    }
}