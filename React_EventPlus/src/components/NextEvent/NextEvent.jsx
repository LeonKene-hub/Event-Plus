import React from 'react';
import './NextEvent.css';
import { dateFormatDbToView } from '../../Utils/stringFuntion';
import { Tooltip } from 'react-tooltip';

const NextEvent = ( {title, description, eventDate, idEvent} ) => {

    function conectar(idEvent) {
        alert(`Chamar o recurso para conectar ${idEvent}`)
    }

    return (
        <article className='event-card'>
            
            <h2 className='event-card__title'> {title.substr(0, 15)} </h2>

            <p className='event-card__description' 
                data-tooltip-id="description-tooltip"
                data-tooltip-content={description}
                data-tooltip-place="top"
            > 
                <Tooltip id="description-tooltip" className='tooltip'/>
                {description.substr(0, 15)} 
            </p>

            <p className='event-card__description'> {dateFormatDbToView(eventDate)} </p>

            <a href="/" onClick={() => {conectar(idEvent)}} className='event-card__connect-link'>Conectar</a>
        </article>
    );
};

export default NextEvent;