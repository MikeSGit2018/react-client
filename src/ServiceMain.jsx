import React from 'react';
import {getWeather} from "./Utilities.jsx";
import "./ServiceMain.scss";

class ServiceMain extends React.Component {
    render () {

        const blah = getWeather();
        console.log(blah);

        return (
            <div className="service-main">Hello World</div>
        )
    }

}

export default ServiceMain;