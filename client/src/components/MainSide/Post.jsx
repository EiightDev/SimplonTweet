import React, { useEffect, useState } from "react";
// import ApiPostService from "../../services/post-service";
import AuthenticationService from "../../services/authentication-service";

import axios from "axios";
import Article from "./Article";
import { Redirect } from "react-router-dom";

// const axios = require("axios");

const PostList = () => {
  const isAuth = AuthenticationService.isAuthenticated();

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3333/post/getAll").then((response) => {
      console.log(response);
      setPostList(response.data);
    });
  }, []);

  console.info(postList);
  return isAuth ? (
    <div>
      {postList !== null && postList !== undefined ? (
        postList.map((post, key) => (
          <Article
            id={post.id_post}
            key={key}
            content={post.content}
            pseudo={post.ownerIdUser}
            date={post.updatedAt}
            like={post.like}
          />
        ))
      ) : (
        <Article placeholder={true} />
      )}
    </div>
  ) : (
    <Redirect to="/" />
  );
};

// class Post extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:3333/post/getAll")
//       .then((response) => {
//         this.setState({ data: response.data });
//         for (let i = 0; i < response.data.length; i++) {
//           let user = response.data[i];
//           console.log(user);
//         }
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   render() {
//     if (this.state.data)
//       return (
//         <div>
//           {this.state.data.map((post, i) => {
//             return (
//               <Article
//                 key={i}
//                 id={post.id_posts}
//                 content={post.content_posts}
//                 pseudo={post.id_users}
//                 date={post.updatedAt}
//                 like={post.like_posts}
//               />
//             );
//           })}
//         </div>
//       );
//     else return <Article placeholder={true} />;
//   }
// }

export default PostList;
