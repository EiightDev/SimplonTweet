import React from 'react'

class ListeFollow extends React.Component {
    render () {
        let listeFollow = [{id_utilisateur: 1, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Georges' }, {id_utilisateur: 2, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Mathieu'}, {id_utilisateur: 3, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Franck'}, {id_utilisateur: 4, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Francis'}]

        return (<div>
            { listeFollow.map((users,i) =>{
                return(<div key={i} className='badge'>
                    <picture id={users.id_utilisateur}>
                    <img src={users.avatar_utilisateur} alt=""/>
                    </picture>
                            <p>{users.pseudo_utilisateur}</p>
                            </div>)
            })}          
            </div>)
    }
}   

export default ListeFollow