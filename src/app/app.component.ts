import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'api-fetching';
  private url = 'https://jsonplaceholder.typicode.com/posts'

  data: any;
  ngOnInit():void{
    fetch(this.url).then((res)=> res.json()).then((response)=> {
      this.data= response;
      console.log(this.data)
    })
  }
}
