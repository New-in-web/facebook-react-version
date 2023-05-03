import React from 'react'
import DefaultButton from '../buttons/DefaultButton'
import './login.css'

function Login() {
    return (
        <div className='container'>
            <div className="left">
                <img alt='facebook-logo' src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" />
                <h2>Avec Youtub, partagez et restez en contact avec votre entourage.</h2>
            </div>

            <div className="right">
                <input placeholder="Adresse e-mail ou numéro de tél." id="mail" name="mail" />
                <input placeholder="Mot de passe" id="password" name="password" />
                <DefaultButton
                    text="Se connecter"
                    bgColor="#1877f2"
                    width={332}
                />
                <button className='a-tag'>Mot de passe oublié ?</button>
                <div className="line"></div>
                <DefaultButton
                    text="Créer nouveau compte"
                    bgColor="#42b72a"
                    width={240}
                />

            </div>
        </div>
    )
}

export default Login