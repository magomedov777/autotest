import React from 'react'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные

export type FriendMessage = {
    id: number

}


const FriendMessage = (props: FriendMessage) => {
    return (
        <div
            id={'hw1-friend-message-' + props.id}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.id}
                    // создаёт студент

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.id}
                        className={s.friendName}
                    >
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.id}
                        className={s.friendMessageText}
                    >
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.id}
                className={s.friendTime}
            >
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
