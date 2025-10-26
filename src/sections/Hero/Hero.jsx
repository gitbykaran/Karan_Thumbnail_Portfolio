import styles from './HeroStyles.module.css';
import heroImg from '../../assets/karandeepphoto.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/instagram_icon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import youtubeLight from '../../assets/youtube_light.svg';

import CV from '../../assets/pardeepresume.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const instagramIcon = theme === 'light' ? instagramLight : instagramLight;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  const youtubeIcon = theme === 'light' ? youtubeLight : youtubeLight;


  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Pardeep Singh"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Karandeep
          <br />
          Singh
        </h1>
        <h2>Video Creative Specialist</h2>
        <span>
      
          <a href="https://www.instagram.com/rayatkarne_/" target="_blank">
            <img src={instagramIcon} alt="Instagram icon" />
          </a>
          <a href="https://www.linkedin.com/in/karandeep-singh-06052b35a/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>Producing educational films under the 
          MMTTP GuruSetu Programme at IIT Ropar for 15 lakh+ educators across India. </p>
        <a href="https://wa.me/919872077144?text=Hello%20I%20am%20interested%20in%20your%20services" target="_blank">
          <button className="hover">Let's Connect</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
