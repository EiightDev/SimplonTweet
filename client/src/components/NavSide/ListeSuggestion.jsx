import React from "react";

const ListeFollow = () => {
  const listeFollow = [
    {
      id_utilisateur: 1,
      avatar_utilisateur: "img/avatar-placeholder.png",
      pseudo_utilisateur: "Georges",
    },
    {
      id_utilisateur: 2,
      avatar_utilisateur: "img/avatar-placeholder.png",
      pseudo_utilisateur: "Mathieu",
    },
    {
      id_utilisateur: 3,
      avatar_utilisateur: "img/avatar-placeholder.png",
      pseudo_utilisateur: "Franck",
    },
    {
      id_utilisateur: 4,
      avatar_utilisateur: "img/avatar-placeholder.png",
      pseudo_utilisateur: "Francis",
    },
  ];

  return (
    <div>
      <div className="my-3 p-3 bg-white rounded shadow-sm">
        <h6 className="border-bottom border-gray pb-2 mb-0">Suggestion</h6>
        {listeFollow.map((users, i) => {
          return (
            <div key={i} className="media text-muted pt-3 badge">
              <img className="mr-2" src={users.avatar_utilisateur} alt=" " />
              <div className="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                <div className="d-flex justify-content-between align-items-center w-100">
                  <strong className="text-gray-dark">Full Name</strong>
                  <a id={users.id_utilisateur} href="/">
                    <i className="material-icons">add_circle</i>
                  </a>
                </div>
                <span className="d-block">@{users.pseudo_utilisateur}</span>
              </div>
            </div>
          );
        })}
        <small className="d-block text-right mt-3">
          <a href="/">Rechercher...</a>
        </small>
      </div>
    </div>
  );
};

export default ListeFollow;
