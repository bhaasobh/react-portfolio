import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid white' }}
            date="2023 - 2024"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Debugger</h3>
            <h4 className="vertical-timeline-element-subtitle">SolarEdge, Israel</h4>
            <p>
              Diagnosed hardware/software failures in embedded systems and collaborated with R&D to resolve bugs in production-level platforms.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Validation Lab Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Intel, Israel</h4>
            <p>
              Validated PCI-E and USB Type-C chip interfaces, automated test flows using Python, and collaborated with architects to verify chip functionality.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2021"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Manufacturing Lab Technician</h3>
            <h4 className="vertical-timeline-element-subtitle">Intel, Israel</h4>
            <p>
              Conducted high-temp CPU validation, built internal lab tools in Python and C#, and integrated third-party GPUs for stress testing.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: '#5000ca', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">B.Sc. Software Engineering Student</h3>
            <h4 className="vertical-timeline-element-subtitle">Shenkar College, Israel</h4>
            <p>
              Focused on embedded systems, computer architecture, and system-level development using C/C++, Python, and Linux-based tools.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
