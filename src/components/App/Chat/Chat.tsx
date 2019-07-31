import React, { useState, useEffect } from 'react';
import ChatOutput from './ChatOutput/ChatOutput';
import { ChatMessageEntity } from '../../../domain/chat/ChatMessageEntity';
import chatMessageService, { Subscription, OnChatMessagesUpdated } from '../../../domain/chat/ChatMessageService';
import ChatInput, { OnChatMessageSendTriggered } from './ChatInput/ChatInput';


export const Chat: React.FC = () => {



    const [ chatMessages, setChatMessages ] = useState<ChatMessageEntity[]>([]);
    const [ subscription, setSubscription] = useState<Subscription | undefined>(undefined);

    const onChatMessagesUpdated: OnChatMessagesUpdated = (chatMessages: ChatMessageEntity[]) => {
        setChatMessages(chatMessages);
    };

    useEffect(() => {
        const newSubscription = chatMessageService.subscribe(onChatMessagesUpdated);
        setSubscription(newSubscription);
        return () => { // cleanup
            chatMessageService.unsubscribe(subscription!);
        };
        // eslint-disable-next-line
    }, []);

    const onChatMessageSendTriggered: OnChatMessageSendTriggered = (message: string) => {
        chatMessageService.sendChatMessage({
            message,
            author: 'Mike'
        }).then((data) => {
            console.log('Message sent successfully, got: ', data);
        });
    };

    return (<div className="chat container"> 
            <h2>Chat</h2>
            <div className="d-flex flex-column p-2">
                <ChatOutput chatMessages={chatMessages} />
                <ChatInput onChatMessageSendTriggered={onChatMessageSendTriggered} />                
            </div>
        </div>);
}

