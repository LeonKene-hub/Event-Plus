import React from 'react';
import './ImageIllustrator.css'
import tipoEventoImage from "../../assets/images/tipo-evento.svg";
import eventoImage from "../../assets/images/evento.svg";
import defaultImage from "../../assets/images/default-image.jpeg";
import loginImage from "../../assets/images/login.svg"

const ImageIllustrator = ( {altText, imageName, addicionalClass} ) => {

    let imageResource

    switch (imageName) {
        case "tipo-evento":
            imageResource = tipoEventoImage
            break;

        case "evento":
            imageResource = eventoImage
            break;

        case "login-img":
            imageResource = loginImage
            break;
            
        default:
            imageResource = defaultImage
            break;
    }
    return (
        <figure className='illustrator-box'>
            <img 
                src={imageResource} 
                alt={altText} 
                className={`illustrator-box__image ${addicionalClass}`}
            />
        </figure>
    );
};

export default ImageIllustrator;