import { Component } from '@angular/core';

@Component({
    selector: 'app-groups',
    templateUrl: './Groups.component.html',
    styleUrls: ['./Groups.component.scss']
})
export class Groups{
    userInfo: any;
    renderPage: Boolean;
    ngOnInit():void{
        var data = localStorage.getItem("user");
        this.userInfo = (data!=null&&data!=="") ? JSON.parse(data) : {};
        this.renderPage = this.userInfo.name!==undefined;
    }
}