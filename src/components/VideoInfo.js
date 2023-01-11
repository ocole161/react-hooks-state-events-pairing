import {useState} from "react"
import CommentsCard from "./CommentsCard"

function VideoInfo({ videoData }) {
    const [videoInfo, setVideoInfo] = useState(videoData)
    const [isVisible, setIsVisible] = useState(true)

    function handleLikes() {
        let video = {...videoInfo}
        video.upvotes += 1
        setVideoInfo(video)
    }
    function handlelDislikes() {
        let video = {...videoInfo}
        video.downvotes += 1
        setVideoInfo(video)
    }

    function handleVis(){
        setIsVisible(!isVisible)
    }

    return (
        <div className="App">
            <iframe
            width="919"
            height="525"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{videoInfo.title}</h1>
            <span>{videoInfo.views} Views | Uploaded {videoInfo.createdAt}</span>
            <br></br>
            <button onClick={handleLikes}>{videoInfo.upvotes}👍</button>
            <button onClick={handlelDislikes}>{videoInfo.downvotes}👎</button>
            <br></br>
            <button onClick={handleVis}>{isVisible ? "Hide Comments" : "Show Comments"}</button>
            {isVisible ? <CommentsCard comments = {videoInfo.comments}/> : ""}
        </div>
    );
}

export default VideoInfo