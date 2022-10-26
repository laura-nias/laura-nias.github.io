import React from 'react';

export const Card = (props) => {
    return(
        <div className={`${props.name}-container`}>
            <div className='card-body'>
                <div className='card-title'>{props.title}</div>
                <div className='card-text'>{props.text}</div>
                <div className='card-language'>{props.language}</div>
                <a href={props.url}>Link</a>
            </div>
        </div>
    )
}