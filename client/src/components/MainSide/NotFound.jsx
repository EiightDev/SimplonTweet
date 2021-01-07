import React from "react";

const NotFound = () => {
  return (
    <div className="cover-container d-flex w-100 h-100 align-items-center p-3 mx-auto flex-column mt-5">
      <h1>404</h1>
      <p>Page Indisponible ou non-trouvée</p>
      <a href="/" className="btn btn-danger">
        Retourner à l'acceuil
      </a>
    </div>
  );
};

export default NotFound;
