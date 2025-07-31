import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import { Icon } from '@iconify/react';

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <Fade key={i} bottom duration={2000} delay={i * 50}>
                <li
                  className={
                    isDark ? "dark-mode software-skill-inline" : "software-skill-inline"
                  }
                  name={skills.skillName}
                >
                  <Icon 
                    icon={skills.iconifyClassname} 
                    style={{fontSize: '5rem'}}
                    className={isDark ? "dark-mode" : ""}
                  />
                  <p>{skills.skillName}</p>
                </li>
              </Fade>
            );
          })}
        </ul>
      </div>
    </div>
  );
}