import React from "react";
import classes from "./SideBar.module.css";
import { FaHome, FaClipboardCheck, FaFolder, FaDonate } from "react-icons/fa";

const SideBar = (props) => {
  return (
    <nav className={classes.sidebar}>
      <ul className={classes.side_nav}>
        <li className={`${classes.side_nav_item}`} >
          <a href="#" className={classes.side_nav_link}>
            <svg className={classes.side_nav_icon}>
              <FaHome size="2rem" color="#333" />
            </svg>
            <span>HOME</span>
          </a>
        </li>
        <li className={classes.side_nav_item}>
          <a href="#" className={classes.side_nav_link}>
            <svg className={classes.side_nav_icon}>
              <FaClipboardCheck size="2rem" color="#333" />
            </svg>
            <span>DASHBOARD</span>
          </a>
        </li>
        <li className={classes.side_nav_item}>
          <a href="#" className={classes.side_nav_link}>
            <svg className={classes.side_nav_icon}>
              <FaFolder size="2rem" color="#333" />
            </svg>
            <span>MY PROFILE</span>
          </a>
        </li>
        <li className={classes.side_nav_item}>
          <a href="#" className={classes.side_nav_link}>
            <svg className={classes.side_nav_icon}>
              <FaDonate size="2rem" color="#333" />
            </svg>
            <span>DONATION</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
