import React, { useEffect, useState } from 'react'
import classes from './SearchPage.module.css';
import { useParams } from 'react-router';
import { fetchFromURL } from '../../utils/axios';
import Card from '../Card/Card';
const SearchPage = (props) => {
    const {searchQuery} = useParams();
    const [video,setVideoData] = useState([]);
    useEffect(()=>{
        const data = fetchFromURL(`search?part=snippet&q=${searchQuery}`).then(
            (data1) => setVideoData(data1.items)
          );
    },[searchQuery])
  return (
    <div className={classes.searchPage__container}>
        {
            video.map(data=>{
                return  <div className={classes.card__container}><Card
                key={data.id.videoId}
                videoID = {data.id.videoId?data.id.videoId:data.id.playlistId}
                src={data.snippet.thumbnails.high.url}
                description={data.snippet.description}
                channelName={data.snippet.channelTitle}
            /></div>
            })

        }


    </div>
  )
}

export default SearchPage
