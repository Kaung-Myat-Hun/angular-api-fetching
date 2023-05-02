import { Component, OnInit } from '@angular/core';
import { JokeApiService } from './joke-api.service';
import {
  FetchUsersAPI,
  GetUserDetailAPI,
  GetPostsAPI,
  GetSinglePostAPI,
  FakeStoreAPI,
} from './apis/Constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'api-fetching';
  // private url = 'https://jsonplaceholder.typicode.com/posts'
  // private url1 = 'https://jsonplaceholder.typicode.com/photos'

  // data: any;
  // ngOnInit():void{
  //   fetch(this.url).then((res)=> res.json()).then((response)=> {
  //     this.data= response;
  //     console.log(this.data)
  //   })
  //   // fetch(this.url1).then((res)=> res.json()).then((response)=>{
  //   //   this.data = response;
  //   //   console.log(this.data)
  //   // })
  // }

  data: any;
  userData: any;
  posts: any;
  sPosts: any;
  show: boolean = false;
  loading: boolean = false;
  bShow: boolean = false;
  loading1: boolean = false;
  constructor(private JokeApiService: JokeApiService) {}

  // private url = 'https://jsonplaceholder.typicode.com/users'
  // private userUrl = (id:number)=> `https://jsonplaceholder.typicode.com/users/${id}`

  ngOnInit() {
    this.JokeApiService.getRandomJoke(FetchUsersAPI)
      .then((res) => {
        this.data = res.data;
      })
      .catch((err) => console.log('error is occured', err));
    this.JokeApiService.getRandomJoke(FakeStoreAPI)
      .then((res) => {
        console.log(res.data, 'Fake Store Api Fetched!');
      })
      .catch((err) => console.log('error is occured', err));
  }

  getUser(id: number) {
    this.show = false;
    this.loading = true;
    this.JokeApiService.getUserData(GetUserDetailAPI(id))
      .then((res) => {
        this.show = true;
        this.loading = false;
        this.userData = res.data;
      })
      .catch((err) => console.log('error is occured', err));
  }

  removeUserDetail() {
    this.show = false;
    this.userData = {};
  }

  GetPosts() {
    this.JokeApiService.getUserData(GetPostsAPI)
      .then((res) => {
        this.posts = res.data;
        console.log('posts', this.posts);
      })
      .catch((err) => console.log('error is occured ', err));
  }

  GetPostDetail(id: number) {
    this.bShow = false;
    this.loading1 = true;
    this.JokeApiService.getUserData(GetSinglePostAPI(id))
      .then((res) => {
        this.bShow = true;
        this.loading1 = false;
        this.sPosts = res.data;
        console.log('single', this.sPosts);
      })
      .catch((err) => console.log(err));
  }
}
