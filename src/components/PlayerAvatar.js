import React from 'react';
import Avatar from '@material-ui/core/Avatar';

const Player = (props) => {
    return (
        <div className="player">
            <Avatar className="avatar">H</Avatar>
            <div className="player-details">
                <div>{props.name} </div>
                <div>
                    <span>Sips </span>
                    <span>
                        {props.sips} / {props.total}{' '}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Player;
