import { Component } from '@angular/core';

@Component({
    selector: 'app-Suggestions',
    templateUrl: './Suggestions.component.html',
    styleUrls: ['./Suggestions.component.scss']
})
export class Suggestions{
    userInfo: any;
    renderPage: Boolean;
    ngOnInit():void{
        var data = localStorage.getItem("user");
        this.userInfo = (data!=null&&data!=="") ? JSON.parse(data) : {};
        this.renderPage = this.userInfo.name!==undefined;
    }
}