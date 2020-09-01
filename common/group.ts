import {User} from './user'
import {Message} from './message'

export class Group{
    name: string
    id: string
    members: Array<User>
    msgs: Array<Message>

    constructor(name:string){
        this.name = name
        this.id = this.generateID()
        this.members=[]
    }
    generateID(): string{
        return 'metodoGerarId()'
    }
    deleteGroup():void{

    }
    addNewMember(newMember: User):void{

    }
    deleteMember(memberId: string):void{

    }
    newMessage(msg: Message):void{

    }
        
}