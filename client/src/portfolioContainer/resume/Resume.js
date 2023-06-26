import React, {useState, useEffect} from 'react';
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './resume.css';
import interests from '../../assets/Resume/interests.svg';
import workHistory from '../../assets/Resume/work-history.svg';
import programmingSkills from '../../assets/Resume/programming-skills.svg';
import projects from '../../assets/Resume/projects.svg';
import education from '../../assets/Resume/education.svg'

export default function Resume(props) {
    /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: education },
    { label: "Work History", logoSrc: workHistory },
    { label: "Programming Skills", logoSrc: programmingSkills },
    { label: "Projects", logoSrc: projects },
    { label: "Interests", logoSrc: interests }
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 60 },
    { skill: "React JS", ratingPercentage: 50 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "Jan 2023", toDate: "June 2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Ecommerce Website ",
      duration: { fromDate: "June 2023", toDate: "on going" },
      description:
        "Online ecommerce website for showcasing and selling products onlne with payment system integration, sign in and sign up features, Firebase, Stripe API ",
      subHeading:
        "Technologies Used: React Js, Redux, GraphQL, Firebase and more"
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Applied Science(UI), Germany (on Campus)"}
        subHeading={"BACHELOR OF SOFTWARE DEVELOPMENT"}
        fromDate={"2022"}
        toDate={"2025"}
      />

      <ResumeHeading
        heading={"Arak Medical Science University, Iran"}
        subHeading={"BACHELOR OF OCCUPATIONAL HEALTH"}
        fromDate={"2012"}
        toDate={"2015"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Ehizeex Technoloy"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"2021"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Self study and personal projects on GitHub: 
          </span>
          <a>HTTPS://GITHUB.COM/TIAKAVOUSI</a>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website with sign in , sign up, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
          HSE  supervisor, leading a team and gaining worthful experiences in leadership and teamwork.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Coursera"
        description="Interactivity with JavaScript"
      />
      <ResumeHeading
        heading="Coursera"
        description="Introduction to HTML5,CSS"
      />
      <ResumeHeading
        heading="Coursera"
        description="Advanced Styling with Responsive Design"
      />
        <ResumeHeading
        heading="Solo Learn"
        description="HTML, CSS and jQuery Fundamentals"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={`${bullet.logoSrc}`}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  )
}
