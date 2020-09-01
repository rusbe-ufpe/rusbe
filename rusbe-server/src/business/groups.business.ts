import {GroupsApi} from './groups.api'
import { Group } from '../../../common/group'

export class BusinessGroups{
    api: GroupsApi = new GroupsApi()

    getUserGroups(userId: string):string{
        return this.api.getUserGroups(userId)
    }
}