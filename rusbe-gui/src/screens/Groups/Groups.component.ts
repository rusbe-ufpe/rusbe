import { Component } from '@angular/core';
import { Group } from '../../../../common/group'

@Component({
    selector: 'app-groups',
    templateUrl: './Groups.component.html',
    styleUrls: ['./Groups.component.scss']
})
export class Groups{
    groups: Group[]
    constructor(){
        this.groups =[new Group('Amigos')]
        this.groups.push(new Group('Engenharia'))
        this.groups.push(new Group('Almocinho'))
    }
}