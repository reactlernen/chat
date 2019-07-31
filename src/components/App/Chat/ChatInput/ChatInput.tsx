import React, { FormEventHandler } from 'react';

export interface OnChatMessageSendTriggered {
    (message: string): void;
}

export interface ChatInputProps {
    onChatMessageSendTriggered: OnChatMessageSendTriggered;
}

interface ChatInputState {
    message: string;
    buttonEnabled: boolean;
}

export default class ChatInput extends React.Component<ChatInputProps, ChatInputState> {

    constructor(props: ChatInputProps) {
        super(props);
        this.state = {
            message: '',
            buttonEnabled: false
        }
    }

    onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.onChatMessageSendTriggered(this.state.message);
        this.setState({ message: '' });
    };

    onMessageChange = ({ target: { value: message, validity: { valid } } }: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ message }, () => {
            this.setState({ buttonEnabled: valid })
        });
    };

    render() {
        return (<div className="chatInput container">
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-row">
                    <input  type="text" 
                            name="message" 
                            id="message"
                            value={this.state.message} 
                            onChange={this.onMessageChange}
                            required 
                            placeholder="Input message" />
                    <button disabled={!this.state.buttonEnabled}>Post</button>
                </div>
            </form>
        </div>);
    }
}
