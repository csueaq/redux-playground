import App from './app.jsx'
import React from 'react'
let injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import counterStore from './store/store'



const store = counterStore();
document.addEventListener("DOMContentLoaded", function(event) {
    React.render(
        <App store={store} />,
        document.getElementById("content")
    );
});
