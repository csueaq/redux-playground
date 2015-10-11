import React from 'react'
import { connect } from 'react-redux'
import addAction from '../actionCreator/counterActionCreator'
const RaisedButton = require('material-ui/lib/raised-button');
const Avatar = require('material-ui/lib/avatar');
const AppBar = require('material-ui/lib/app-bar');
const IconMenu = require('material-ui/lib/menus/icon-menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
const IconButton = require('material-ui/lib/icon-button');
const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

const counter = React.createClass({

    //the key passed through context must be called "muiTheme"

    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext() {
        return {
            muiTheme: ThemeManager.getMuiTheme(LightRawTheme)
        };
    },
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
                <AppBar
                    title="Title"
                    iconElementRight={
                            <IconMenu iconButtonElement={
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                }>
                                  <MenuItem primaryText="Refresh" />
                                  <MenuItem primaryText="Help" />
                                  <MenuItem primaryText="Sign out" />
                            </IconMenu>
                        }
                    />
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