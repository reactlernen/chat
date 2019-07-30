import React from 'react';
import { ChatMessageEntity } from '../../../../domain/chat/ChatMessageEntity';
import ChatMessage from './ChatMessage/ChatMessage';

export interface ChatOutputProps {
    chatMessages: ChatMessageEntity[];
}

const ChatOutput: React.FC<ChatOutputProps> = ({ chatMessages }: ChatOutputProps) => {

    return (<div className="chatOutput container">
        {
            chatMessages.map((chatMessage, i) => (
                <div className="row" key={i}>
                    <ChatMessage chatMessage={chatMessage} />
                </div>
            ))
        }
        </div>);
}

ChatOutput.defaultProps = {
    chatMessages: []
}

export default ChatOutput;