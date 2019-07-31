import React from 'react';
import ChatOutput from './ChatOutput/ChatOutput';
import { ChatMessageEntity } from '../../../domain/chat/ChatMessageEntity';
import chatMessageService, { Subscription, OnChatMessagesUpdated } from '../../../domain/chat/ChatMessageService';
import ChatInput, { OnChatMessageSendTriggered } from './ChatInput/ChatInput';

export interface ChatProps {

}

interface ChatState {
    chatMessages: ChatMessageEntity[];
    subscription: Subscription | undefined;
}

export class Chat extends React.Component<ChatProps, ChatState> {

    constructor(props: ChatProps) {
        super(props);
        this.state = {
            chatMessages: [],
            subscription: undefined
        }
    }

    onChatMessagesUpdated: OnChatMessagesUpdated = (chatMessages: ChatMessageEntity[]) => {
        this.setState({
            chatMessages
        });
    };

    componentDidMount = () => {
        const subscription = chatMessageService.subscribe(this.onChatMessagesUpdated);
        this.setState({
            subscription
        });
    };

    componentWillUnmount = () => {
        chatMessageService.unsubscribe(this.state.subscription!);
    };

    onChatMessageSendTriggered: OnChatMessageSendTriggered = (message: string) => {
        chatMessageService.sendChatMessage({
            message,
            author: 'Mike'
        }).then((data) => {
            console.log('Message sent successfully, got: ', data);
        });
    };

    render() {
        return (<div className="chat container">
            <h2>Chat</h2>
            <div className="row">
                <ChatOutput chatMessages={this.state.chatMessages} />
            </div>
            <div className="row">
                <ChatInput onChatMessageSendTriggered={this.onChatMessageSendTriggered} />
            </div>
        </div>);
    }
}
