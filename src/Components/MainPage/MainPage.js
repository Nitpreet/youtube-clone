import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import classes from "./MainPage.module.css";
import { fetchFromURL } from "../../utils/axios";
const MainPage = (props) => {
  const [videoData, setVideoData] = useState([]);
  const [channelDescription,setChannelDescription]=useState([]);

  useEffect(() => {
    const data = fetchFromURL(`search?part=snippet&q=${props.params}`).then(
      (data1) => {
        setVideoData(data1.items)
        // console.log(data1);
      }
    );
    // console.log(videoData);
    // console.log(props.params);
  }, [props.params]);
  useEffect(()=>{
    videoData.map(video=>{
      fetchFromURL(`channel?part=snippet&id=${video.snippet.channelId}`).then(
        (temp)=>{
          setChannelDescription(state=>[...state,temp]);
        }
      )
    })
  },[videoData])

  return (
    <div className={classes.mainPage__container}>
      {console.log(videoData)}
      {videoData.map((data) => {
        return (
          <Card
            key={data.id.videoId}
            videoID = {data.id.videoId?data.id.videoId:data.id.playlistId}
            src={data.snippet.thumbnails.high.url}
            description={data.snippet.description}
            channelName={data.snippet.channelTitle}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
