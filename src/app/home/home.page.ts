import { Component } from '@angular/core';
import {Capacitor} from "@capacitor/core";

const { DistancePlugin } = Capacitor.Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  async getDistance() {
    let result = await DistancePlugin.authorize();

    let data = await DistancePlugin.getDistance({ startDate: "2019/07/01" });
    console.log(data);
  }

}
