import React, { useEffect, useState } from "react";
import ApiPostService from "../../services/post-service";
import Article from "./Article";

// const axios = require("axios");

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    ApiPostService.getAllPost().then(post => setPostList(post))
    // fetch("http://localhost:4000/post")
    //   .then((response) => response.json())
    //   .catch((error) => console.error(error))
      
  }, []);

  console.info(postList)
  return (
    <div>
      {postList !== null && postList !== undefined ? (
        postList.map((post) => (
          <Article
            id={post.id_posts}
            key={post.id_posts}
            content={post.content_posts}
            pseudo={post.id_users}
            date={post.updatedAt}
            like={post.like_posts}
          />
        ))
      ) : (
        <Article placeholder={true} />
      )}
    </div>
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
