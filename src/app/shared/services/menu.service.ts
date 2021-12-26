import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse , HttpHeaders} from '@angular/common/http'; 
import { Observable , throwError } from 'rxjs';
import { catchError , retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  headers = new HttpHeaders()
            .set('Content-type' , 'aplication/json; charset=utf-8')
            .set('Accept','aplication/json')

  constructor( private http : HttpClient ) { }

  getMenu() : Observable<any>
  {
    return this.http.get<any>('assets/json/menu.json' , {
      headers : this.headers,
      responseType : 'json'
    }).pipe(catchError(this.handleError.bind(this)))
  }

  private handleError(err : HttpErrorResponse ){
    // if(err.)
    console.log('come from err => ',err)
    return throwError(err.message || 'data not found')
  }
}
