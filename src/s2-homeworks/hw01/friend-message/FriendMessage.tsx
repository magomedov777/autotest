import React from 'react'
import s from './FriendMessage.module.css'



type FriendMessageTypeProps = {
    id: string
    message: string
}

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageTypeProps) => {
    return (
        <div
            id={props.id + props.message}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={props.id + props.message}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={props.id + props.message}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre
                        id={props.id + props.message}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={props.id + props.message}
                className={s.friendTime}
            >
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
