import React from "react";
import Icon from "./icons";
import moment from "moment";

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDescriptionOpen: false
    };
  }
  handleReadMore = () => {
    this.setState({
      isDescriptionOpen: !this.state.isDescriptionOpen
    });
  };
  render() {
    const {
      data: { title, location, currency }
    } = this.props;
    const { isDescriptionOpen } = this.state;
    return (
      <div className="project-item-container">
        <div className="project-thumb">
          <img src="https://loremflickr.com/250/140/dog" alt={title} />
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-location">
          <Icon name="location" size={14} /> {location}
        </p>
        <p className="project-amount-pledged">
          <Icon name="tag" size={14} />
          {` ${data["amt.pledged"]} ${currency.toUpperCase()}`}
        </p>
        <p className="project-duration">
          <Icon name="calendar" size={14} />{" "}
          {moment(data["end.time"]).format("Do MMM, YYYY")}
        </p>
        <button
          onClick={this.handleReadMore}
          className="project-description-button"
        >
          {isDescriptionOpen ? "Show Less" : "Show More"}
        </button>
        {isDescriptionOpen && (
          <div className="project-description">
            <p className="project-blurb">{data.blurb}</p>
            <p className="project-by">
              By <strong>{data.by}</strong>
            </p>
            <p className="project-backers">
              <strong>{data["num.backers"]}</strong> backers pledged{" "}
              <strong>{`${
                data["amt.pledged"]
              } ${data.currency.toUpperCase()}`}</strong>{" "}
              to help bring this project to life.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default ProjectItem;
