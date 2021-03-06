import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>Google News is a news aggregator app developed by Google. It presents a continuous, customizable flow of articles organized from thousands of publishers and magazines. Google News is available as an app on Android, iOS, and the Web.</p>
            <p onClick={props.click}>Google released a beta version in September 2002 and the official app in January 2006.[1] The initial idea was developed by UserName: {props.username}.</p>
        </div>
    );
}

export default userOutput;