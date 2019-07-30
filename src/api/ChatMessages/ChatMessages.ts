
export type FindAllChatMessagesResponse = {
    id: number;
    author: string;
    message: string;
}[];

export class ChatMessages {

    constructor(private baseUrl: string) {}

    findAll(): Promise<FindAllChatMessagesResponse> {
        return fetch(this.baseUrl + '/messages')
                .then(data => data.json())
    }
}