import React from "react";

const PostButton = (props) => {
  let onligne = 0;

  return onligne ? (
    <small className="d-block text-right mt-3">
      <a
        className=" ml-2 mr-2"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          console.log("modifier");
        }}
      >
        <i className="material-icons">edit</i>
      </a>
      <a
        className=" ml-2 mr-2"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          console.log("supprimer");
        }}
      >
        <i className="material-icons">delete</i>
      </a>
    </small>
  ) : (
    <small className="d-block text-right mt-3">
      <a
        className=" ml-2 mr-2"
        href="/"
        onClick={(e) => {
          e.preventDefault();
          console.log("like + 1");
        }}
      >
        <i className="material-icons">thumb_up </i>{props.like}
      </a>
    </small>
  );
};

export default PostButton;
