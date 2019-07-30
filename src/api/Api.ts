import { ChatMessages } from "./ChatMessages/ChatMessages";
import { Users } from "./Users/Users";

const baseUrl = 'http://localhost:3000';

class Api {

    readonly chatMessages = new ChatMessages(baseUrl);
    readonly users = new Users(baseUrl);
}

export const api = new Api();

