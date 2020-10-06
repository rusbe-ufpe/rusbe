import { Component } from '@angular/core';

@Component({
    selector: 'app-threads',
    templateUrl: './Threads.component.html',
    styleUrls: ['./Threads.component.scss']
})
export class Threads{
    userInfo: any;
    renderPage: Boolean;
    ngOnInit():void{
        var data = localStorage.getItem("user");
        this.userInfo = (data!=null&&data!=="") ? JSON.parse(data) : {};
        this.renderPage = this.userInfo.name!==undefined;
    }
}