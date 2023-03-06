import { useState, useEffect } from 'react'
import io from 'socket.io-client'

export type Message = {
    message: string
    sender: 'me' | 'other'
}

const socket = io('http://localhost:4000')

export const useChat = () => {
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        socket.on('receive_message', (data) => {
            setMessages([...messages, { message: data.message, sender: 'other' }])
        })

        return () => {
            socket.off('receive_message')
        }
    }, [messages])

    const sendMessage = (message: string) => {
        socket.emit('send_message', {
            message
        })

        setMessages([...messages, { message, sender: 'me' }])
    }

    return { messages, sendMessage }
}