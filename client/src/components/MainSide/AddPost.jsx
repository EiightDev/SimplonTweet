import React from "react";

class NotFound extends React.Component {
  render() {
    return (<div className="cover-container d-flex w-100 h-100 justify-content-center align-items-center p-3 mx-auto flex-column">
      <h1>404</h1>
      <p>Page Indisponible ou non-trouvé</p>      
      <a href="/" className="btn btn-danger">Retourner à l'acceuil</a>   
  </div>)
  }}

  export default NotFound