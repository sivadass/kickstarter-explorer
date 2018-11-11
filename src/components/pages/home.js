import React from "react";
import axios from "axios";
import lodashFind from "lodash.filter";
import ProjectItem from "../common/project-item";
import Loading from "../common/loader";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      projects: [],
      titleKeyword: ""
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    this.setState({ isLoading: true });
    axios
      .get("http://starlord.hackerearth.com/kickstarter")
      .then(response => {
        this.setState({
          projects: response.data,
          isLoading: false
        });
      })
      .catch(function(error) {
        console.log(error);
        this.setState({ isLoading: false });
      });
  };

  handleTitleKeyword = e => {
    this.setState(
      {
        titleKeyword: e.target.value
      },
      () => {
        let keyword = this.state.titleKeyword;
        let data = Object.assign({}, this.state.projects);
        if (keyword.length > 2) {
          let result = data.filter(project =>
            project.title
              .toLowerCase()
              .startsWith(this.state.titleKeyword.toLowerCase())
          );
          this.setState({
            projects: result
          });
        } else {
          this.setState({
            projects: this.state.projects
          });
        }
      }
    );
  };

  render() {
    const { isLoading, projects } = this.state;

    if (isLoading) {
      return <Loading />;
    }
    if (projects.length === 0) {
      return "No products matched your search!";
    }
    return (
      <div className="container home">
        <div className="search-container">
          <input
            className="search-box"
            type="search"
            name="kickStarterSearch"
            placeholder="Search for projects"
            onChange={this.handleTitleKeyword}
          />
        </div>
        <div className="projects-container">
          {projects.map(project => (
            <ProjectItem data={project} key={project["s.no"]} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
