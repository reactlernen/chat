import React from 'react';
import { ChatMessageEntity } from '../../../../../domain/chat/ChatMessageEntity';

export interface ChatMessageProps {
    chatMessage: ChatMessageEntity;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ chatMessage: { author, message }}: ChatMessageProps) => {

    return (<div className="chatMessage container border rounded m-2 p-2">
        <div className="row">
            <div className="col-12">
                <b>{author}</b>
            </div>
            <div className="col-12">
                {message}
            </div>
        </div>
    </div>);
};

ChatMessage.defaultProps = {

};

export default ChatMessage;

