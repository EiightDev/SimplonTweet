import React from 'react'

class BadgeProfil extends React.Component {
    render () {
        return <div className='badge'>
                <picture><img src="img/avatar-placeholder.png" alt=""/></picture>
                <p>Utilisateur</p>           
            </div>
    }
}   

export default BadgeProfil