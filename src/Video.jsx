import { useEffect, useRef } from "react";
import VideoSrc from "./assets/fun.mp4";
export default function Video({ isPlaying }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
      console.log("Is playing..");
    } else {
      videoRef.current.pause();
      console.log("Pausing...");
    }
  }, [isPlaying]);
  return (
    <>
      <video
        className="border-4 rounded-3xl border-green-800"
        src={VideoSrc}
        ref={videoRef}
      />
    </>
  );
}
