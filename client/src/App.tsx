import { useRef } from 'react'
import MessagesList from './components/MessagesList/MessagesList'
import ChatInput from './components/ChatInput/ChatInput'
import { useChat } from './hooks/useChat'
import styles from './App.module.scss'

export default function App() {
    const { messages, sendMessage } = useChat()
    const inputRef = useRef<HTMLInputElement>(null)

    const handleSendMessage = (message: string) => {
        sendMessage(message)
    }

    return (
        <div className={styles.app}>
            <MessagesList messages={messages} />
            <ChatInput onSendMessage={handleSendMessage} />
        </div>
    )
}
