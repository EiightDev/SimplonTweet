import React from "react";
import PostButton from './PostButton'

class Article extends React.Component {
  user = 1
  id_auteur = 1
  onligne = true
  render() {
    if (this.user === this.id_auteur)
    return (
      <article className="my-3 p-3 bg-white rounded shadow-sm">
        <div className="media text-muted pt-3">
        <img className=" ml-2 mr-2 avatar" src="img/avatar-placeholder.png" alt="" />
          <p className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
            <div className='d-flex justify-content-between align-items-center w-100'> <strong className="">@username</strong> <span className="text-gray-dark mr-3">15 Juin 19</span> </div>
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus,
            tellus ac cursus commodo, tortor mauris condimentum nibh, ut
            fermentum massa justo sit amet risus ozkfocfne zd.
            Donec id elit non mi porta gravida at eget metus. Fusce dapibus.
        
        
          </p>
        </div>
        <PostButton></PostButton>
      </article>
    );
    else 
    return <div> Ce post n'est pas le tien</div>
  }
}

export default Article;
