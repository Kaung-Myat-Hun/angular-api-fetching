import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class JokeApiService {

  constructor() { }
  getRandomJoke(url:string){
    return axios.get(url,{
      headers:{
        accept: "application/json"
      }
    })
  }
  getUserData(url:string){
    return axios.get(url,{
      headers:{
        accept: 'application/json'
      }
    })
  }
  postAnything(url:string, data:any){
    return axios.post(url,data,{
      headers:{
        accept: 'application/json'
      }
    })
  }
  updateService(url:string, data:any){
    return axios.patch(url,data,{
      headers:{
        accept: 'application/json'
      }
    })
  }
  imageUpload(url:string, data:any){
    return axios.post(url,data,{
      headers:{
        "Content-Type" : "multipart/form-data"
      }
    })
  }
  deleteService(url:string, data:any){
    return axios.delete(url,{
      headers:{
        accept: 'application/json'
      }
    })
  }
}
