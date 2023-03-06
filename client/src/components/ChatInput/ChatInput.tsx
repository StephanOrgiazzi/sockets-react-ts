import { useState } from 'react'
import styles from './ChatInput.module.scss'

type ChatInputProps = {
    onSendMessage: (message: string) => void
}

export default function ChatInput({ onSendMessage }: ChatInputProps) {
    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (!message.trim()) {
            return
        }

        onSendMessage(message)
        setMessage('')
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault()
            sendMessage()
        }
    }

    return (
        <div className={styles.inputContainer}>
            <input
                type="text"
                placeholder="Message"
                className={styles.input}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className={styles.button} onClick={sendMessage} disabled={!message.trim()}>
                Send
            </button>
        </div>
    )
}
