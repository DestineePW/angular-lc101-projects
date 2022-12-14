import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie Promo Posters';
  image1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0hS4CSKWq4L0GxVDkv0-6gRoSiXEwwEMQ9_NNGHAc&s';
  image2 = 'https://ih1.redbubble.net/image.505815630.9008/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg';
  image3 = 'https://m.media-amazon.com/images/M/MV5BZGRkOGMxYTUtZTBhYS00NzI3LWEzMDQtOWRhMmNjNjJjMzM4XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}