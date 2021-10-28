import GitHub32 from "../images/GitHub32.png";
import LIBug from "../images/LIBug.png";

const Footer = () => {
  return (
    <div className='footer'>
      <a href='https://github.com/LWalk2678'><img src={GitHub32} className="githubIcon" alt='GitHub'/></a>
      <a href='https://www.linkedin.com/in/lancewalkerco/'><img src={LIBug} className="linkedInIcon" alt='LinkedIn'/></a>
    </div>
  )
}

export default Footer
