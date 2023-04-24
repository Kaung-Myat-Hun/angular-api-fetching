import { Component, OnInit } from '@angular/core';
import { JokeApiService } from './joke-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
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

  data: any
  userData : any
  constructor(private JokeApiService: JokeApiService) { }

  private url = 'https://jsonplaceholder.typicode.com/users'
  private userUrl = (id:number)=> `https://jsonplaceholder.typicode.com/users/${id}`

  ngOnInit(){
    this.JokeApiService.getRandomJoke(this.url).then((res)=>{
      this.data = res.data
    }).catch((err)=> console.log("error is occured", err))
  }

  getUser(id:number){
    this.JokeApiService.getUserData(this.userUrl(id)).then((res)=>{
      this.userData= res.data
    }).catch((err)=>console.log(err))
  }
}
