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
import jayanti from '../../assets/Jayanti2.png';
import ashima from '../../assets/Ashima1.png';
import prakash from '../../assets/Prakash1.png';
import stampede from '../../assets/stampede.png';
import nature from '../../assets/nature.png';

import Biases from '../../assets/bias.png';
import Naren from '../../assets/naren_assess.png';
import jayantilearning from '../../assets/learning_to_think.png';





import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Visual Pedagogies</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Biases}
          link="https://drive.google.com/file/d/1aQOAtASLGlKP4C001bgOXpvTtqz58QWq/view?usp=sharing"
          h3="Bias in the Classrooms"
          p="Dr. Jayanti Dutta - Director MMTTP"
        />
       <ProjectCard
          src={prakash}
          link="https://drive.google.com/file/d/1A8h-Skx8d3PcU_p9Fj7mlmqAu2b-Jc9D/view?usp=sharing"
          h3="Learning Theories"
          p="Mr Prakash Hegade - KLE Hubli"
        />
        <ProjectCard
          src={jayantilearning}
          link="https://drive.google.com/file/d/1PM0Hj2aH6u-5g0aumEWP3TIKoICobqYo/view?usp=sharing"
          h3="Learning to Think"
          p="Dr Jayanti Dutta - Director MMTTP"
        />
       <ProjectCard
          src={ashima}
          link="https://drive.google.com/file/d/1BNpo5IUSP5KsmfLyvk3UOsFj-IQjziOG/view?usp=sharing"
          h3="Psychlogical Literacy"
          p="Ms Ashima Dutta - Relationship Therapist"
        />
        <ProjectCard
          src={jayanti}
          link="https://drive.google.com/file/d/1UtNoVKhGW4UtgmQIx5RdispOXAOD0M79/view?usp=sharing"
          h3="Diversity & Inclusion"
          p="Dr Jayanti Dutta - Director MMTTP"
        />
          <ProjectCard
          src={Naren}
          link="https://drive.google.com/file/d/19aAAv5XQaUioEPxP101K6IGa4sVy_TGz/view?usp=sharing"
          h3="Assignment & Assessments"
          p="Mr Naren P.R. - SASTRA University"
        />
      </div>
    </section>
  );
}

export default Projects;
