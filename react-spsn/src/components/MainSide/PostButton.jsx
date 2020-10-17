import React from "react";

class PostButton extends React.Component {
  onligne = false;
  render() {
    if (this.onligne)
      return (
        <small className="d-block text-right mt-3">
          <a
            className=" ml-2 mr-2"
            href="#"
            onClick={() => console.log("modifier")}
          >
            modifier
          </a>
          <a
            className=" ml-2 mr-2"
            href="#"
            onClick={() => console.log("supprimer")}
          >
            supprimer
          </a>
        </small>
      );
    else
      return (
        <small className="d-block text-right mt-3">
          <a
            className=" ml-2 mr-2"
            href="#"
            onClick={() => console.log("like")}
          >
            like
          </a>
          
        </small>
      );
  }
}

export default PostButton;
