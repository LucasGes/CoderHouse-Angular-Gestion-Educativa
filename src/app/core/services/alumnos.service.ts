import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Alumno } from "../../pages/dashboard/alumnos/models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable({ providedIn: 'root' })

export class AlumnosService {
  
 
  constructor(private httpClient: HttpClient) { }


  getAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(environment.apiUrl + '/stduents')
  }

  addAlumno(alumno: Alumno): Observable<Alumno[]> {
    return this.httpClient.post<Alumno[]>(environment.apiUrl + '/stduents', alumno);
  }

  deleteAlumno(id: string) {
    return this.httpClient.delete(environment.apiUrl + '/stduents/' + id);
  }

  editAlumno(id: string, alumno: Alumno) {
    return this.httpClient.put(environment.apiUrl + '/stduents/' + id, alumno);
    ;
  }



};




