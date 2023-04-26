import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable , throwError} from 'rxjs'
import {catchError, retry} from 'rxjs/operators'

configUrl ="https://jsonplaceholder.typicode.com/posts"

@Injectable()

getConfig(){
  return this.http.get<Config>(this.configUrl)
}

export class ConfigService{
  constructor(private http: HttpClient){ }
}
