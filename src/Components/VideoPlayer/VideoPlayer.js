import React, { useEffect, useState } from "react";
import classes from "./VideoPlayer.module.css";
import { fetchFromURL } from "../../utils/axios";
import { useParams } from "react-router";
import ReactPlayer from "react-player";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
const VideoPlayer = () => {
  const [video, setVideo] = useState(null);
  const { videoID } = useParams();
  useEffect(() => {
    fetchFromURL(`videos?part=snippet,statistics&id=${videoID}`).then((data) =>
      setVideo(data.items[0])
    );
  }, [videoID,video]);
  return (
    <div className={classes.videoPlayer__container}>
      {/* {console.log(video)} */}
      <div className={classes.videoPlayer__left}>
        <ReactPlayer
          controls
          playing={true}
          width='750px'
          height='400px'
          url={`https://www.youtube.com/watch?v=${videoID}`}
        />
        <div className={classes.videoPlayer__description}>
          <div className={classes.videoPlayer__title}>
            <h3>{video!=null&&video.snippet.title}</h3>
          </div>
          <div className={classes.videoPlayer__author}>
            <div className={classes.author}>{video!=null&&video.snippet.channelTitle}</div>
            <div className={classes.verifiedAccount}><CheckCircleIcon/></div>
          </div>
          <div className={classes.videoPlayer__desc}>
            {video!=null&&video.snippet.description}
          </div>
        </div>
      </div>
      <div className={classes.videoPlayer__right}>

      </div>
    </div>
  );
};

export default VideoPlayer;
