import React from "react";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    this.getProjects();
  }

  getProjects = () => {
    axios
      .get("http://starlord.hackerearth.com/kickstarter")
      .then(response => {
        this.setState({
          projects: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-fluid home">
        <pre>{JSON.stringify(this.state.projects, null, 2)}</pre>
      </div>
    );
  }
}

export default Home;
