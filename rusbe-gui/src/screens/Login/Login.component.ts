import { Component } from '@angular/core';
import { LoginService } from '../../service/Login.service';
import { AlertController } from '@ionic/angular';


@Component({
    selector: 'app-login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.scss']
})
export class Login{
    form: any = {};
    constructor(private loginService: LoginService,private alertController: AlertController) { }

    ngOnInit():void{
        localStorage.setItem("user", "");
    }

    onSubmit() :void{
        this.loginService.login(this.form).subscribe(
            data => {
                localStorage.setItem("user", JSON.stringify(data));
                window.location.href="/screens/home";
            },
            async err => {
                await this.presentAlert(err.error.message);
            }
        );
    }
    async presentAlert(msg:string) {
        const alert = await this.alertController.create({
          //cssClass: 'my-custom-class',
          header: 'Erro',
          message: msg,
        });
    
        await alert.present();
      }
}