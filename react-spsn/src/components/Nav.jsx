import React from 'react'

import BadgeProfil from './NavSide/BadgeProfil'
import ListeFollow from './NavSide/ListeFollow'

class NavSide extends React.Component {
    constructor () {
        super()
        this.output = <div onClick={() => this.affichage('mouss')}>Salut Mouss</div>
    }

    componentDidMount () {
        let listeFollow = [{id_utilisateur: 1, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Georges' }, {id_utilisateur: 2, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Mathieu'}, {id_utilisateur: 3, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Franck'}, {id_utilisateur: 4, avatar_utilisateur: 'img/avatar-placeholder.png', pseudo_utilisateur: 'Francis'}]
        for (let i = 0; i<listeFollow.lenght; i++) {
            let a = listeFollow[i]
            this.BadgeProfiloutput += <div onClick={() => this.affichage('mouss')}>{a.id_utilisateur} {a.pseudo_utilisateur}</div>
        }

    }
    affichage = (str) =>{
        console.log('Salut ' + str);
    }


    render () {
        
        return <nav className="col-md-4 order-md-1 mb-4">
            {this.output}
            {/* <button className="btn btn-primary btn-lg btn-block" onClick ={this.affichage('Mouss')}>Continue</button>
            <BadgeProfil />
            <h6>Utilisateurs Suivi</h6>
            <ListeFollow />
            <h6>Utilisateurs à suivre</h6>
            <ListeFollow />                 */}
            </nav>
    }
}

export default NavSide