import mostradorVert from "../../assets/bg-video/mostrador-vertical.mp4"
import mostradorHori from "../../assets/bg-video/mostrador-horizontal.mp4"
import "./BgVideo.scss";
import { useEffect, useState } from "react";


function BgVideo() {

    const [screenRes, setScreenRes] = useState(window.innerWidth < 592);

    useEffect(() => {
        const handleResize = () => {
            setScreenRes(window.innerWidth < 592);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };

    }, []);

  

    return (
        <>

        <div className="bg-video">
            <video className={`${screenRes ? 'bg-video--mob' : 'bg-video--des'}`} autoPlay loop muted playsinline="true" disablePictureInPicture="true">
                <source src={screenRes ? mostradorVert : mostradorHori} type="video/mp4" />
            </video>
        </div>

        </>
    )

}


export default BgVideo;
