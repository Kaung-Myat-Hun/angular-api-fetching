import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  constructor() { }
  getRandomJoke(){
    return axios.get('https://jsonplaceholder.typicode.com/users',{
      headers:{
        accept: "application/json"
      }
    })
  }
}
