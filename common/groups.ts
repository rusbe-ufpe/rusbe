import Message from './message'
import User from './user'

export default class Group{
    id: string;
    name: string;
    messages: Message[];
    users: User[];
    meals_times: any;
}