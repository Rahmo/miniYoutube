import React from 'react';
import VideoListItem from './videoListItem'
const VideoList = props => {
        
    const videoItems = props.videos.map((video)=> {
        return <VideoListItem key={video.etag} video={video}/> 
    });
    return (
        <ul className='col-md-4 list-group'>
         <p>{props.videos.length ? props.videos.length : "No value."}</p>
         {videoItems}
        </ul>
    )
}

export default VideoList;