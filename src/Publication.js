import checkIcon from './img/check-img.png';
import React from 'react';

function Publication(props) {
    return (
        <div className="postInfo">
            <div className="aligned">
                <img className="authorPhoto" src={props.author.photo} />
                <div className="groupedInfo">
                    <p className="authorInfo">{props.author.name}</p>
                    <img className='checkIcon' src={checkIcon} />
                    <p className="authorInfo" id="authorInfoId">{props.author.nickname}</p>
                    <p className="authorInfo" id="dot" >.</p>
                    <p className="authorInfo" id="authorInfoId">{props.date}</p>
                    <p className="content">{props.content}</p>
                    <img className="postImage" src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default Publication;