import React from "react";
import PostButton from "./PostButton";

class Article extends React.Component {
  user = 1;
  id_auteur = 1;
  onligne = true;
  constructor(props) {
    super(props);
  }

  render() {
    if (this.user === this.id_auteur)
      return (
        <article key= {this.props.key} idpost={this.props.id} className="my-3 p-3 bg-white rounded shadow-sm">
          <div className="media text-muted pt-3">
            <img
              className=" ml-2 mr-2 avatar"
              src="img/avatar-placeholder.png"
              alt=""
            />
            <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
              <div className="d-flex justify-content-between align-items-center w-100">
                <strong className="">@{this.props.pseudo}</strong>
                <span className="text-gray-dark mr-3">{this.props.date}</span>
              </div>
              {this.props.content}
            </div>
          </div>
          <PostButton like={this.props.like}></PostButton>
        </article>
      );
    else return <div> Ce post n'est pas le tien</div>;
  }
}

export default Article;
