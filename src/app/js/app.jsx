import React from 'react'
import { Provider } from 'react-redux'
import Counter from './view/counter'

import ThemeManager from 'material-ui/lib/styles/theme-manager'
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme'
//class App extends React.Component {
export default React.createClass({
    //the key passed through context must be called "muiTheme"
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },
    render () {
        return (
            <Provider store={this.props.store}>
                { () => <Counter /> }
            </Provider>
        )
    }
});

