import photo from '../../images/img.jpg'

import './Post.css'



export default function PostEvent(props) {

    return (
        <div>
            <div className="post-event">
                <div className="post-event-header">
                    <div className="post-event-header-detail">
                        <div className="post-event-header-title">
                            {props.title}
                        </div>
                        <div className="post-event-header-time">
                            {props.date}
                        </div>
                        <div className="post-event-header-location">
                            {props.place}
                        </div>
                        <div className="post-event-header-interested-count">
                            0 intéressé
                        </div>
                    </div>
                </div>
                <div>
                    <img className="post-event-image" src={photo} alt="" />
                </div>
                <div className="post-event-description">
                    {props.description}
                </div>
                <div className="post-event-buttons">
                    <div>
                        <button className="post-event-delete">Supprimer l'évenement</button>
                    </div>
                    <button className="interested">Interessé</button>
                </div>
            </div>
        </div>

    )
}