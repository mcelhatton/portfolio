/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import MDDLocate from "../../assets/recentprojects/mdd-locate.png";
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import DateNight from '../../assets/recentprojects/dateNight.png';
import AdminDashboard from "../../assets/recentprojects/admindashboard.png";
import BudgetTracker from "../../assets/recentprojects/budget-tracker.png";
import Workday from "../../assets/recentprojects/work-day.png";

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "MDD Locate - RTLS",
      description: `Industry first real-time location tracking system from Mobile Dealer Data.  Invented, built and deployed an industry first
      asset tracking system utilizing wireless beacon technology.`,
      alter: "Date Night",
      image: `${MDDLocate}`,
      link: "http://app.mdd.io",
    },
    {
      id: 2,
      title: "Admin Dashboard",
      description: `Collaborative project at Columbia University.  Our team built a platform to help developers communicate
      better and more efficiently.`,
      alter: "Admin Dashboard",
      image: `${AdminDashboard}`,
      link: "https://enigmatic-forest-45827.herokuapp.com",
    },
    {
      id: 3,
      title: "Date Night",
      description: `Collaborative project at Columbia University.  Our team built a web application to help to help
      couples plan a date night.`,
      alter: "Date Night",
      image: `${DateNight}`,
      link: "https://mcelhatton.github.io/happyHour/",
    },
    {
      id: 4,
      title: "Budget Tracker Progressive Web App",
      description: `Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. 
      Having offline functionality is paramount to the success of an application that handles users’ financial information`,
      alter: "Date Night",
      image: `${BudgetTracker}`,
      link: "https://young-crag-95669.herokuapp.com",
    },
    {
      id: 5,
      title: "React Portfolio",
      description: `Designed and developed a ReactJS portfolio 
      with fancy 3D animations using Three.js for 
      the background element.`,
      alter: "React Portfolio",
      image: `${Portfolio}`,
      link: "https://mcelhatton.github.io/portfolio/",
    },
    {
      id: 6,
      title: "Work Day Scheduler",
      description: `This program is designed ot help get users organized! The program will list normal business hours 
      and users can store the schedules listed by hour. The program will gray out hours in the past, highlight red the 
      current hour and highlight green the hours in the future.`,
      alter: "React Portfolio",
      image: `${Workday}`,
      link: "https://mcelhatton.github.io/workDayScheduler/",
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <a className="__img_wrapper" href= { project.link }>
              <img src={ project.image } alt={ project.alter }/>
              </a>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
