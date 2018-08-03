import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'


@Component({
    selector: 'page-projetos',
    templateUrl: 'projetos.html'
})
export class Projetos {
    
    information: any[];

    constructor(public navCtrl: NavController, private Http: Http) {
        let localData = Http.get('assets/information.json').map(res => res.json().items);
        localData.subscribe(data => {
            this.information = data;
        })
    }

    toggleSection(i) {
        this.information[i].open = !this.information[i].open;
    }

    toggleItem(i, j) {
        this.information[i].children[j].open = !this.information[i].children[j].open;
    }



}