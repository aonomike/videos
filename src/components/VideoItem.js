import React from 'react'

const VideoItem = ({video}) =>{

    return (
        <div className="item">
            <img className="ui image" alt={video.snippet.description} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div>
                    {video.snippet.title}
                </div>
             </div>
        </div>
        )
}

export default VideoItem