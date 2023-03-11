import React from 'react'
import { MessageType } from '../HW1'
import s from './FriendMessage.module.css'

// создать тип вместо any и отобразить приходящие данные

export type FriendMessage = {
    message: MessageType

}


const FriendMessage = (props: FriendMessage) => {
    return (
        <div
            id={'hw1-friend-message-' + props.message.message.text}
            className={s.friendMessage}
        >
            <div className={s.friendImageAndText}>
                <img
                    id={'hw1-friend-avatar-' + props.message.message.text}
                     src={props.message.user.avatar}
                     alt={'text'}

                    //
                />
                <div className={s.friendText}>
                    <div
                        id={'hw1-friend-name-' + props.message.id}
                        className={s.friendName}
                    >
                        {props.message.id}

                        {/**/}
                    </div>
                    <pre
                        id={'hw1-friend-text-' + props.message.id}
                        className={s.friendMessageText}
                    >
                        {props.message.id}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div
                id={'hw1-friend-time-' + props.message.id}
                className={s.friendTime}
            >
                {props.message.message.time}

                {/**/}
            </div>
        </div>
    )
}

export default FriendMessage
