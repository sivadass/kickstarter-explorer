import React from "react";
import Icon from "./icons";

const ProjectItem = props => {
  return (
    <a
      href={`http://kickstarter.com${props.data.url}`}
      target="_blank"
      className="project-item-container"
    >
      <div className="project-thumb">
        <img src="https://loremflickr.com/250/200/dog" alt="" />
      </div>
      <div>{props.data.title}</div>
      <p>
        <Icon name="location" size={16} /> {props.data.location}
      </p>
      <p>
        <Icon name="tag" size={16} />
        {` ${props.data["amt.pledged"]} ${props.data.currency.toUpperCase()}`}
      </p>
    </a>
  );
};

export default ProjectItem;
