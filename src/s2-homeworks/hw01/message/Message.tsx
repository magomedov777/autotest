import React from 'react'
import s from './Message.module.css'
import { MessageUserType } from '../HW1'

// нужно создать правильный тип вместо any
export type MessagePropsType = {
    id: number
    message: MessageUserType
}

// нужно отобразить приходящие данные
const Message = (props: MessagePropsType) => {
    return (
        <div id={'hw1-message-' + props.id} className={s.message}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.id}
                    // создаёт студент

                    //
                />
                <div className={s.text}>
                    <div id={'hw1-name-' + props.id} className={s.name}>
                        {/*создаёт студент*/}

                        {/**/}
                    </div>
                    <pre id={'hw1-text-' + props.id} className={s.messageText}>
                        {/*создаёт студент*/}

                        {/**/}
                    </pre>
                </div>
            </div>
            <div id={'hw1-time-' + props.id} className={s.time}>
                {/*создаёт студент*/}

                {/**/}
            </div>
        </div>
    )
}

export default Message;