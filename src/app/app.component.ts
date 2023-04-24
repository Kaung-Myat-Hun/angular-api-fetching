import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-fetching';
  private url = 'https://jsonplaceholder.typicode.com/posts'
  private url1 = 'https://jsonplaceholder.typicode.com/photos'

  data: any;
  ngOnInit():void{
    fetch(this.url).then((res)=> res.json()).then((response)=> {
      this.data= response;
      console.log(this.data)
    })
    // fetch(this.url1).then((res)=> res.json()).then((response)=>{
    //   this.data = response;
    //   console.log(this.data)
    // })
  }
}
