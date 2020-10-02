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


    onSubmit() :void{
        this.loginService.login(this.form).subscribe(
            data => {
                console.log(data);
                var nome = data.name;
                alert("Logado como: " + nome);
            },
            async err => {
                //alert(err.error.message)
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