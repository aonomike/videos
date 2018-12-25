import React from 'react'
import VideoItem from './VideoItem'

const VideoList = (props) => {
    let renderedVideos = props.videos.map((video)=>{
        return <VideoItem video={video} />
    })
        return <div className="ui relaxed divided list">{renderedVideos}</div>

};

export default VideoList