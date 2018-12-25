import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>loading...</div>
    }
    return (

        <div className="ui container">
            <h4>{ video.snippet.title }</h4>
            <p>{ video.snippet.description }</p>
        </div>
    );
}

export default VideoDetail;