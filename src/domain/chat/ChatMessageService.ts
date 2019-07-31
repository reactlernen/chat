import { ChatMessageEntity } from "./ChatMessageEntity";
import { api } from "../../api/Api";

export interface OnChatMessagesUpdated {
    (chatMessages: ChatMessageEntity[]): void;
}

export type Subscription = NodeJS.Timeout;

class ChatMessageService {

    findAll(): Promise<ChatMessageEntity[]> {
        return api.chatMessages.findAll()
                .then(response => {
                    const chatMessages = response.map(messageResponse => ({
                        ...messageResponse
                    } as ChatMessageEntity ))

                    return chatMessages;
                });
    }

    subscribe(onChatMessagesUpdated: OnChatMessagesUpdated): Subscription {
        return setInterval(() => {
            this.findAll().then((messages) => {
                onChatMessagesUpdated(messages);
            })
        }, 1000);
    }

    unsubscribe(subscription: Subscription): void {
        clearInterval(subscription);
    }

    sendChatMessage(message: ChatMessageEntity): Promise<void> {
        return api.chatMessages.sendMessage(message);
    }

}

const chatMessageService = new ChatMessageService();

export default chatMessageService;