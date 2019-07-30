import React from 'react';
import ChatOutput from './ChatOutput/ChatOutput';
import { ChatMessageEntity } from '../../../domain/chat/ChatMessageEntity';
import chatMessageService, { Subscription, OnChatMessagesUpdated } from '../../../domain/chat/ChatMessageService';

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

    render() {
        return (<div className="chat container">
            <h2>Chat</h2>
            <div className="row">
                <ChatOutput chatMessages={this.state.chatMessages} />
            </div>
            <div className="row">
                TODO
            </div>
        </div>);
    }
}
