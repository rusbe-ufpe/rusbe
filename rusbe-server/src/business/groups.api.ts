import {Group} from '../../../common/group'
import { User } from '../../../common/user'

export class GroupsApi{
    groups: Group[] =[]
    constructor(){
        const gropsNames:string[] =['Amigos','Engenharia','Jantarzinho','Turma RU','Galera do mestrado']
        const userNames:string[]=['João, Heitor, Maria, André, Amanda, Marconi, Erick, Robert, Elisson, Gilmar, Tiago, Felipe, Fernanda']
        const users: User[] = userNames.map(name=> {return new User(name)})
        gropsNames.map(name=>this.groups.push(new Group(name)))
        this.groups.map(group=>{
            users.map(user=>group.addNewMember(user.id))
        })
    }
    getUserGroups(userId): string{
        let userGroups:Group[] =[]
        for (let group of this.groups){
            if(group.membersIds.includes(userId)) userGroups.push(group)
        }
        return JSON.stringify(userGroups);
    }
}