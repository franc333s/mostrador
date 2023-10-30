import mostrador from "../../assets/bg-video/mostrador.mp4"
import "./BgVideo.scss";


function BgVideo() {

    return (
        <>
          <video className="bg-video" src={mostrador} autoPlay loop muted/>
        </>
    )

}


  
export default BgVideo;
