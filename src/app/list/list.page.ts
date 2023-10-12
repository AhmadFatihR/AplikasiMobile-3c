import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  friendList = [
    { nama: 'Freya', status: 'Unfriend', img: '/assets/img/freya.jpg' },
    { nama: 'Adel', status: 'Add friend', img: '/assets/img/adel.jpg' },
    { nama: 'Zee', status: 'Accept', img: '/assets/img/zee.jpg' },
    { nama: 'Gita', status: 'Accept', img: 'assets/img/gita.jpg' },
    { nama: 'Marsha', status: 'Accept', img: 'assets/img/Marsha.jpg' },
    { nama: 'Ashel', status: 'Accept', img: 'assets/img/ashel.jpg' },
  ];
}
