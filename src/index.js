import React from 'react'
import ReactDOM from 'react-dom'

import App from "./App"



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);










if (process.env.NODE_ENV == "production" && navigator.serviceWorker) {
    navigator.serviceWorker.register.then(() => {
        console.debug("ServiceWorker registration complete");
    });
}