import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.scss']
})
export class Home{
    userInfo: any;
    renderPage: Boolean;
    ngOnInit():void{
        var data = localStorage.getItem("user");
        this.userInfo = (data!=null&&data!=="") ? JSON.parse(data) : {};
        this.renderPage = this.userInfo.name!==undefined;
    }
}