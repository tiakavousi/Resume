import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./resume.css";
import interests from "../../assets/Resume/interests.svg";
import workHistory from "../../assets/Resume/work-history.svg";
import programmingSkills from "../../assets/Resume/programming-skills.svg";
import projects from "../../assets/Resume/projects.svg";
import education from "../../assets/Resume/education.svg";
import books from "../../assets/Resume/books.svg";
import certificate from "../../assets/Resume/certificate.svg";

export default function Resume(props) {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

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
    { label: "Programming Skills", logoSrc: programmingSkills },
    { label: "Certificates", logoSrc: certificate },
    { label: "Projects", logoSrc: projects },
    { label: "Work History", logoSrc: workHistory },
    { label: "Studies", logoSrc: books },
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
        "Technologies Used: React Js, Redux, GraphQL, Firebase and more",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Applied Science(UI), Germany (Online)"}
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
    /* Certificates */
    <div className="resume-screen-container" key="certificates">
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
    /* WORK HISTORY */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Damandeh Company"}
          subHeading={"HSE  supervisor"}
          fromDate={"2017"}
          toDate={"2019"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Leading a team and gaining worthful experiences in leadership and
            teamwork.
          </span>
        </div>
        <ResumeHeading
          heading={"ARPC Company"}
          subHeading={"HSE  Officer"}
          fromDate={"2011"}
          toDate={"2017"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Conducting Risk assessment and medical examinations for over 2500
            people.
          </span>
        </div>
      </div>
    </div>,

    /* Studies */
    <div className="resume-screen-container" key="studies">
      <ResumeHeading
        heading="You don’t know JS"
        description="Author: Kyle Simpson (series 1. Up and Going 2. Scope & Closures 3. This & Object Prototype 4. Types & Grammar 5. Async & Performance)"
      />
      <ResumeHeading
        heading="The modern JavaScript tutorials"
        description="Author: Iliakan (series 1. The JavaScript Language 2. Browser: Document, Events, Interfaces 3. Additional Articles)"
      />
      <ResumeHeading
        heading="Headfirst HTML and CSS"
        description="Author: Elisabeth Robson & Eric Freeman"
      />
      <ResumeHeading
        heading="Headfirst JavaScript Programming "
        description="Author: Elisabeth Robson & Eric Freeman •	Linux with operating system concepts by Richard Fox"
      />
      <ResumeHeading
        heading="Linux with operating system concepts"
        description="Author: Richard Fox"
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
        <img className="bullet-logo" src={`${bullet.logoSrc}`} alt="B" />
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
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Curriculum vitae"} />
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
  );
}
