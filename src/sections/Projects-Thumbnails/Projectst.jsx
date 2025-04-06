import styles from './ProjectsStyles.module.css';
import t1 from '../../assets/t1.png';
import t2 from '../../assets/t2.png';
import t3 from '../../assets/t3.png';
import t4 from '../../assets/t4.png';
import t5 from '../../assets/t5.png';
import t6 from '../../assets/t6.png';
import t7 from '../../assets/t7.png';






import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Thumbnails</h1>
      <div className={styles.projectsContainer}>
      <ProjectCard
          src={t6}
          link="https://drive.google.com/file/d/1nErXGWhBnRPm4h2G16wdJW0ko2Rw1k0S/view?usp=sharing"
          p="Roast"
        />        
       <ProjectCard
          src={t1}
          link="https://drive.google.com/file/d/1gfZuufi1eNOsn5emUD5OSIdP_e0qpmCx/view?usp=sharing"
          p="Gaming"
        />
        <ProjectCard
          src={t2}
          link="https://drive.google.com/file/d/1ZFOADhPnyQ8yDWH6ZT_zueG9CQAqf96V/view?usp=sharing"
          p="Gaming"
        />
        <ProjectCard
          src={t7}
          link="https://drive.google.com/file/d/1-_7KFv8ntcu0eGQT7hQz93FXn21VL03z/view?usp=sharing"
          p="Roast"ing
        />        
        <ProjectCard
          src={t3}
          link="https://drive.google.com/file/d/1-_7KFv8ntcu0eGQT7hQz93FXn21VL03z/view?usp=sharing"
          p="Gaming"
        />         
        <ProjectCard
          src={t4}
          link="https://drive.google.com/file/d/1VSBzTiKXpsao0p1F7-AFE7ZsyrIhy7Mf/view?usp=sharing"
          p="Gaming"
        />
        <ProjectCard
          src={t5}
          link="https://drive.google.com/file/d/1BiVBrDxp6SY-DsNHuaUXIRO16TYvfjSk/view?usp=sharing"
          p="Gaming"
        />                                              
      </div>
    </section>
  );
}

export default Projects;
