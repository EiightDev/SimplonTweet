import React from "react";
import {Link} from "react-router-dom"

const BadgeProfil = () => {
  let id=10;
  return id !== null && id !== undefined ? (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      <h6 className="border-bottom border-gray pb-2 mb-0">Ton profil</h6>
      <div className="media text-muted pt-3 badge">
        <img className="mr-2" src="img/avatar-placeholder.png" alt="" />
        <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
          <div className="d-flex justify-content-between align-items-center w-100">
            <strong className="text-gray-dark">Mustapha Eiight</strong>
            <Link to={`/update/${id}`}><i className="material-icons">edit</i></Link>
          </div>
          <span className="d-block">@EiightDev</span>
        </div>
      </div>
    </div>
  ) : (
    <div className="my-3 p-3 bg-white rounded shadow-sm">
      <h6 className="border-bottom border-gray pb-2 mb-0">Ton profil</h6>
      <div className="media text-muted pt-3 badge"></div>
    </div>
  );
};

export default BadgeProfil;
