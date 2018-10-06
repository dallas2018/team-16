/* eslint-disable */
import React from "react";
import ReactDOM from "react-dom";
import PageRouter from "Pages/PageRouter";
import registerServiceWorker from "registerServiceWorker";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "./index.css";

ReactDOM.render(<PageRouter />, document.getElementById("root"));
(function () {
    var div = document.createElement("div");
    document.getElementsByTagName('body')[0].appendChild(div);
    div.outerHTML = "<div id='botDiv' style='height: 38px; position: fixed; bottom: 0; z-index: 1000; background-color: #fff'><div id='botTitleBar' style='height: 38px; width: 400px; position:fixed; cursor: pointer;'></div><iframe width='400px' height='600px' src='https://webchat.botframework.com/embed/SERFAQ?s=zTD-63LmXVs.cwA.Z5o.BtSCn0eBkHPYrMSjo7lFTMhVfIgKT_yYSVtGPCFMYpI'></iframe></div>"; 

    document.querySelector('body').addEventListener('click', function (e) {
        e.target.matches = e.target.matches || e.target.msMatchesSelector;
        if (e.target.matches('#botTitleBar')) { 
            var botDiv = document.querySelector('#botDiv'); 
            botDiv.style.height = botDiv.style.height == '600px' ? '38px' : '600px';
        };
    });
}());
registerServiceWorker();
