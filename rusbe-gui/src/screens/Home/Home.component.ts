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

    constructor(private router: Router, private menuService: MenuService) { }

    ngOnInit(): void {
        this.router.events.subscribe(e => {
            if (e instanceof ActivationStart && e.snapshot.outlet === "administration")
                this.outlet.deactivate();
        });
        this.menuService.getDailyMenu().subscribe(
            (data) => {
                this.dailyMenu = data;
            },
            (err) => {
                console.log(err.error);
            }
        );
    }
}