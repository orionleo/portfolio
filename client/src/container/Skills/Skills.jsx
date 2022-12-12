import React, { useState, useEffect } from 'react'
import "./Skills.scss";
import { animate, motion } from "framer-motion";
import { AppWrap,MotionWrap} from "../../Wrapper"
import { urlFor, client } from "../../client.js"
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Skills = () => {

  const [anchorId, setAnchorId] = useState('');
  const [isOpen, setIsOpen] = useState(false)
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });
  }, []);

  return (
    <>
      <h2 className='head-text'> Skills & Experience</h2>

      <div className="app__skills-container">
        <motion.div className='app__skills-catergory-list'>
          {skills.sort((field1,field2)=>(field1.category>field2.category)?1:(field1.category<field2.category)?-1:0).map((field) => (
            <motion.div className='app__skills-list'>
            <h4 className="bold-text">{(field.category.slice(3))}</h4>
            <motion.div className='app__skills-lists'>
           {field.skill.map((skill)=>(
            <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__skills-item app__flex"
                  key={field.name}>
                  <div
                    className="app__flex"
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    <img src={urlFor(skill.icon)} alt={skill.name} id={skill.name} />
                  </div>
                  <p className="p-text">{skill.name}</p>
                </motion.div>
           ))}
           </motion.div>
            </motion.div>
            ))}
        
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences.sort((field1,field2)=>(field1.year<field2.year)?1:(field1.year>field2.year)?-1:0).map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience._id}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div
                className='app__skills-exp-works'
              >
                {experience.works.map((work, index) => (

                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      id={`a${work._key}`}
                      onMouseEnter={() => { setAnchorId(work.name) }}
                      data-tooltip-content={work.desc}
                    >
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    <ReactTooltip anchorId={`a${work._key}`} place="bottom" className='skills-tooltip' />
                  </>
                ))}

              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>


    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 'skills', "app__whitebg");