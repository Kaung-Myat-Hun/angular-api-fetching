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
  postAnything(url:string, data:object){
    return axios.post(url,data,{
      headers:{
        accept: 'application/json'
      }
    })
  }
  updateService(url:string, data:object){
    return axios.patch(url,data,{
      headers:{
        accept: 'application/json'
      }
    })
  }
  imageUpload(url:string, data:object){
    return axios.post(url,data,{
      headers:{
        "Content-Type" : "multipart/form-data"
      }
    })
  }
  deleteService(url:string, data:object){
    return axios.delete(url,{
      headers:{
        accept: 'application/json'
      }
    })
  }
}
