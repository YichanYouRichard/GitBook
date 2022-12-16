/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./ProfileItem.module.css";

const ProfileItem = ({username, picture}) => {
  return (
    <NavLink
      className={(navData) => (navData.isActive ? classes.active : "")}
      to="/myprofile"
    >
      <a className={classes.side_nav_link}>
        <img src={picture} alt="User" className={classes.nav__profile} />
        <span className={classes.username}>{username}</span>
      </a>
    </NavLink>
  );
};

export default ProfileItem;
