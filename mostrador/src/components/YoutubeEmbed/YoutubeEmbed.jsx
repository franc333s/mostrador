import PropTypes from "prop-types";
import "./YoutubeEmbed.scss";


const YoutubeEmbed = ({ embedId }) => (
    <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1&mute=1&loop=1&playlist=${embedId}&controls=0&showinfo=0&modestbranding=1&autohide=1`}
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
  );
  
  YoutubeEmbed.propTypes = {
    embedId: PropTypes.string.isRequired
  };
  
export default YoutubeEmbed;
