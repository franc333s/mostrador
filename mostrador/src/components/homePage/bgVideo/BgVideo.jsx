import "./BgVideo.scss";
import { useEffect, useState } from "react";

const verticalVideoUrl = " https://firebasestorage.googleapis.com/v0/b/mostrador-bae9f.appspot.com/o/video%2Fmostrador-vertical.mp4?alt=media&token=3e68381e-a682-4a67-a390-88805936058c";
const horizontalVideoUrl = "https://firebasestorage.googleapis.com/v0/b/mostrador-bae9f.appspot.com/o/video%2Fmostrador-horizontal.mp4?alt=media&token=cdfc866a-b4fd-4816-8f8c-cb2256b2bf0c";


function BgVideo() {

    const [ screenRes, setScreenRes ] = useState(window.innerWidth < 592);
    const [ videoUrl, setVideoUrl ] = useState(screenRes ? verticalVideoUrl : horizontalVideoUrl);

    useEffect(() => {
        const handleResize = () => {
            setScreenRes(window.innerWidth < 592);
            setVideoUrl(screenRes ? verticalVideoUrl : horizontalVideoUrl);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };

    }, [screenRes]);

  

    return (
        <>
            <video className={`bg-video ${screenRes ? 'bg-video--mob' : 'bg-video--des'}`} autoPlay loop muted playsInline={true} disablePictureInPicture={true}>
                <source src={videoUrl} type="video/mp4" />
            </video>
        </>
    )
}


export default BgVideo;
