import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faCopy} from '@fortawesome/free-solid-svg-icons'
import './ShareProfile.css'

export const ShareProfileForm = () =>{

    return(
        <div className="Container-father">
            <div className="Form-container">
                <div className="logo-container">
                    <h3>EHR</h3>
                    <p>Easy House Rent</p>
                </div>
                
                <h1 className="Share-title">Comparte tu perfil</h1>
                <h4>Quieres compartir tu perfil?</h4>
                <br/><br/>
                <div className="Link-container">
                    <p href="" >easyhouserent/profile/carme0210</p>
                    <button className="Icon-Share">
                        <FontAwesomeIcon icon={faCopy} />
                    </button>
                </div>
                <br/><br/>
                <div className="Button-share-container">
                    <input type="button" className="Button-share" value="Aceptar"/>
                    <input type="button" className="Button-share" value="Cancelar"/>
                </div>
            </div>
        </div>
    )
}