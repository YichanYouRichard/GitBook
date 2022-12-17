import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProjectList.module.css";
import { FaGithub } from "react-icons/fa";
const ProjectList = ({
  projects,
  title,
  showUsername = true,
}) => {
  return (
    <>
      <div className={styles.header}>
        <h2>{title}'s projects</h2>
      </div>
      <div className={styles.cardFrame}>
        {projects &&
          projects.map((project) => (
            <div data-aos = "flip-up"key={project._id} className={styles.card}>
              <h3>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`/projects/${project._id}`}
                >
                  /{project.projectName}
                </Link>
              </h3>
              <a
                className={styles.git}
                target="_blank"
                rel="noreferrer"
                href={project.projectRepo}
              >
                <FaGithub />
              </a>
              <div className={styles.cutoffText}>
                {project.projectDescription}
              </div>
              <div>
                {showUsername ? (
                  <div className = {styles.owner}>
                    <Link to={`/profiles/${project.projectOwner}`}>
                      {project.projectOwner}
                    </Link>{" "}
                    <br />
                    <span style={{ fontSize: "1rem" }}>
                      {project.createdAt}
                    </span>
                  </div>
                ) : (
                  <>
                    <span style={{ fontSize: "1.em" }}>
                      You created on {project.createdAt}
                    </span>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProjectList;
