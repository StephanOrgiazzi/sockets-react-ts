import { Message } from '../../hooks/useChat'
import styles from './MessagesList.module.scss'

type MessagesType = {
    messages: Message[]
}

export default function MessagesList({ messages }: MessagesType) {
    return (
        <div className={styles.messages}>
            {messages.map((msg, index) => (
                <div key={index} className={`${styles.message} ${msg.sender === 'me' ? styles.sent : styles.received}`}>
                    <p className={styles.text}>{msg.message}</p>
                </div>
            ))}
        </div>
    )
}
