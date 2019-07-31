
export type FindAllChatMessagesResponse = {
    id: number;
    author: string;
    message: string;
}[];

export interface SendMessageRequest {
    author: string;
    message: string;
}

export class ChatMessages {

    constructor(private baseUrl: string) {}

    findAll(): Promise<FindAllChatMessagesResponse> {
        return fetch(this.baseUrl + '/messages')
                .then(data => data.json())
    }

    sendMessage(sendMessageRequest: SendMessageRequest): Promise<any> {
        return fetch(this.baseUrl + '/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(sendMessageRequest)
        }).then(data => data.json());
    }
}