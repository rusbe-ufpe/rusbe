import User from './user'

export default class Message{
    id: string;
    content: string;
    author: User;
    timestanp: Date;
}