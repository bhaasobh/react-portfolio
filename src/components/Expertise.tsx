import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsValidation = [
  "System Validation",
  "PCI-E",
  "USB Type-C",
  "Embedded Systems",
  "Lab Equipment",
  "Debugging",
  "Fault Isolation",
];

const labelsDev = [
  "C",
  "C++",
  "Python",
  "C#",
  "Java",
  "SQL",
  "Assembly",
  "Linux",
  "Windows",
];

const labelsTools = [
  "Git",
  "JIRA",
  "Visual Studio",
  "Eclipse",
  "Automation",
  "Python Scripts",
  "Hardware Integration",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">

          <div className="skill">
            <FontAwesomeIcon icon={faLinux} size="3x" />
            <h3>System-Level Validation</h3>
            <p>
              Hands-on experience with chip-level system testing and validation at Intel and SolarEdge.
              Skilled in debugging embedded platforms, analyzing logs, and collaborating with hardware/software engineers.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Focus Areas:</span>
              {labelsValidation.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Software Development</h3>
            <p>
              Strong foundation in C, C++, Python, and Java.
              Proficient in building internal tools, scripting test automation, and working across OS environments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Languages & Platforms:</span>
              {labelsDev.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Tools & Automation</h3>
            <p>
              Developed validation scripts and lab automation tools using Python and C#.
              Experience with Git-based workflows, issue tracking, and performance benchmarking.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Toolchain:</span>
              {labelsTools.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Expertise;
