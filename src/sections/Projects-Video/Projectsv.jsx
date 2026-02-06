import styles from './ProjectsStyles.module.css';
import warismind from '../../assets/warismind.png';
import fatehburj from '../../assets/chaparchiri.png';
import IIT from '../../assets/Samridhi.png';
import PRESTATE from '../../assets/PRESTATE.png';
import dollarwargi from '../../assets/Pind_1.png';
import maruti from '../../assets/car.png';
import teradurni from '../../assets/Durni.png';
import mundepindde from '../../assets/mundepindde.png';
import chamkilasong from '../../assets/chamkilasong.png';
import panchiwin from '../../assets/panchiwin.png';
import sidhutribute from '../../assets/sidhutribute.png';
import ww3 from '../../assets/ww3.png';
import jalianwala from '../../assets/jalianwala.png';
import aevytv from '../../assets/aevytv.png';
import stampede from '../../assets/stampede.png';
import nature from '../../assets/nature.png';
import dled from '../../assets/DLED.png';
import sastra from '../../assets/SASTRA.png';
import gurufeed from '../../assets/feedback.png';






import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Videos</h1>
      <div className={styles.projectsContainer}>
       <ProjectCard
          src={aevytv}
          link="https://drive.google.com/file/d/1Nxk5tmWfVggHr0TmYKkPUA8l2ZqELTnP/view?usp=sharing"
          h3="Aevy TV (YT)"
          p="Explainer"
        />
        <ProjectCard
          src={gurufeed}
          link="https://drive.google.com/file/d/1CCZI7FucPWEj__zR3hONfVJCcPss6YQy/view?usp=sharing"
          h3="GuruSetu Pilot"
          p="Feedback"
        />
        <ProjectCard
          src={ww3}
          link="https://drive.google.com/file/d/1KE6nyV_wgpg0EiPOR3y6qQc4eizD_fce/view?usp=sharing"
          h3="Approaching WW3"
          p="Explainer"
        />
       <ProjectCard
          src={jalianwala}
          link="https://drive.google.com/file/d/1psh9WuAv7swJ4tSJnAjwwQgh4e8SMPdB/view?usp=sharing"
          h3="Jallianwala Incident"
          p="Explainer"
        />
        <ProjectCard
          src={dled}
          link="https://drive.google.com/file/d/16Za__fNwNMrA5jrp7A5pcvDMGo5hN8rp/view?usp=sharing"
          h3="Making Education Fun"
          p="VLED - IIT Ropar"
        />
        <ProjectCard
          src={stampede}
          link="https://drive.google.com/file/d/1bkyBjMxdwsWyUr8C48LQVs_o4sWLO_P_/view"
          h3="Delhi Stampede"
          p="Journalism"
        />
        <ProjectCard
          src={sastra}
          link="https://drive.google.com/file/d/10zqGv2orMWDW3PfKjHoHW8oVbMdV1uhH/view?usp=sharing"
          h3="Working with SASTRA"
          p="Feedback"
        />

        <ProjectCard 
          src={fatehburj}
          link="https://www.youtube.com/watch?v=Fin6sRi09aE"
          h3="Fateh Burj"
          p="Trip"
        />
        <ProjectCard
          src={IIT}
          link="https://www.youtube.com/watch?v=sSea2zvMHsg"
          h3="IIT Ropar Event"
          p="Samridhi 2.0"
        />
        <ProjectCard
          src={PRESTATE}
          link="https://www.youtube.com/shorts/ETAOXHChBng"
          h3="Promotional Reel"
          p="Pr Estate"
        />
      

        
       
      </div>
    </section>
  );
}

export default Projects;
