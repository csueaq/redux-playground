var React = require('react');

const AppBar = require('material-ui/lib/app-bar');
const IconMenu = require('material-ui/lib/menus/icon-menu');
const MenuItem = require('material-ui/lib/menus/menu-item');
const IconButton = require('material-ui/lib/icon-button');
const MoreVertIcon = require('material-ui/lib/svg-icons/navigation/more-vert');

export default React.createClass({


    render: function() {
        return (
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

        );
    }
});