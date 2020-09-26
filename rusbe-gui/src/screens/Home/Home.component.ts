import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';

import { MenuService } from '../../_services/menu.service';

@Component({
    selector: 'app-home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.scss']
})
export class Home implements OnInit{
    @ViewChild(RouterOutlet) outlet: RouterOutlet;

    dailyMenu: any;
    initialOption = 0;
    constructor(private router: Router, private menuService: MenuService) { }

    ngOnInit(): void {
        this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
                this.outlet.deactivate();
        });
        this.menuService.getDailyMenu().subscribe(
            (data) => {
                this.dailyMenu = JSON.parse(data).msg;
                console.log(this.dailyMenu);
            },
            (err) => {
                console.log(err.error);
            }
        );
    }

    nextOption(): void{
        this.initialOption = (this.initialOption+1)%3;
    }
}