import React from 'react';
import { ChatMessageEntity } from '../../../../../domain/chat/ChatMessageEntity';

export interface ChatMessageProps {
    chatMessage: ChatMessageEntity;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chatMessage: { author, message }}: ChatMessageProps) => {

    return (<div className="chatMessage container">
        <div className="row">
            <b>{author}</b>
        </div>
        <div className="row">
            {message}
        </div>
    </div>);
};

ChatMessage.defaultProps = {

};

export default ChatMessage;

