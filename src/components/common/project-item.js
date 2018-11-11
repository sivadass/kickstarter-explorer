import React from "react";

const ProjectItem = props => {
  return (
    <div className="project-item-container">
      <div>{props.data.title}</div>
    </div>
  );
};

export default ProjectItem;
