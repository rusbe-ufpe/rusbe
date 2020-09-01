import { Component } from '@angular/core';
import { Group } from '../../../../common/group'
import { getUserGroups } from 'src/constants/groups.requests';

@Component({
    selector: 'app-groups',
    templateUrl: './Groups.component.html',
    styleUrls: ['./Groups.component.scss']
})
export class Groups{
    groups: Group[]
    constructor(){
        this.loadInfo()
    }
    async loadInfo(): Promise<void> {
        const resp =  await getUserGroups('96d68e20-3e7f-43a8-a1f9-8b4fee5e3771')
        this.groups = JSON.parse(resp['msg'])
        console.log(this.groups)
    }
}