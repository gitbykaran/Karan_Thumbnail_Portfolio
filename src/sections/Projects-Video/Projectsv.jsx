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
          src={ww3}
          link="https://drive.google.com/file/d/1EhhQ-Wdj0kss9MDRsKxy3WKRTbTwHwbo/view?usp=sharing"
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
          src={stampede}
          link="https://drive.google.com/file/d/1-3FXhQcpevfFgQO-MAqpL5RfuQ86F5Mm/view?usp=sharing"
          h3="Delhi Stampede"
          p="Journalism"
        />
        <ProjectCard 
          src={nature}
          link="https://drive.google.com/file/d/14b6PYL4fU922z3gTElHLVysNNU-cX9Td/view?usp=drive_link"
          h3="Nature's Lesson"
          p="Storytelling"
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
        <ProjectCard
          src={maruti}
          link="https://www.youtube.com/watch?v=YuBCAzj-GL0"
          h3="Dad's Whip"
          p="Documenting"
        />
        <ProjectCard
          src={sidhutribute}
          link="https://drive.google.com/file/d/1wQahLErlVLVifvFs0oEW7-96cRBmkZkU/view"
          h3="Sidhu Tribute"
          p="Documentary"
        />
        <ProjectCard
          src={chamkilasong}
          link="https://www.youtube.com/watch?v=eROo-WfEeio"
          h3="90s Panjab"
          p="Documenting"
        />
        <ProjectCard
          src={panchiwin}
          link="https://www.youtube.com/shorts/EkfjqgJCvJ4"
          h3="Dad's Victory"
          p="Politics"
        />
        
       
      </div>
    </section>
  );
}

export default Projects;
