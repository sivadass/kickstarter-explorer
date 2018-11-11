import React from "react";
import loader from "../../images/loading.svg";
import whiteLoader from "../../images/loading-white.svg";

const Loader = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px",
        width: "100%"
      }}
    >
      <img
        src={props.inverted ? whiteLoader : loader}
        alt="Loading"
        height={props.size}
        width={props.size}
      />
    </div>
  );
};

export default Loader;
