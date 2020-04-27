import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.component.html',
  styleUrls: ['./datas.component.css']
})
export class DatasComponent implements OnInit {

  evento = [
    { name: ' Villa Mix ', date: ' 9/26/2020 ', time: ' 10am ', location: { address: ' Mineirinho ', city: ' Belo Horizonte ', country: ' Brasil ' } },
    { name: ' Rock In Rio ', date: ' 4/15/2020 ', time: ' 9am ', onlineUrl: ' https://www.rockinrio.com.br/ ' },
    { name: ' Campus Party ', date: ' 6/10/2020 ', time: ' 8am ' },
    { name: ' Loolapalooza ', date: ' 4/15/2020 ', time: ' 9am ', onlineUrl: ' http://www.loolapalooza.com ' },
    { name: ' Samba Prime ', date: ' 6/10/2020 ', time: ' 8am ', location: { address: ' Expominas ', city: ' Belo Horizonte ', country: ' Brasil ' }, onlineUrl: ' http://www.sambaprime.com.br ' }

  ]

  constructor() { }

  atualizaEndereco(upgrade) {
    for (let datas1 of this.evento) {
      if (datas1.name === upgrade.name) {
        datas1.location = upgrade.location;
      }
    }
  }

  ngOnInit(): void {
  }

}
