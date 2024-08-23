import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { Alumno} from "../../pages/dashboard/alumnos/models";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";


@Injectable ({providedIn: 'root'})

export class AlumnosService{

  private MY_DATABASE = [
    
     {id: 'j3t5',
       nombre: 'Juan',
       apellido: 'Perez',
       fechaInscripcion: new Date(), 
         },
 
      {id: 'q12e',
       nombre: 'Felipe',
       apellido: 'Gonzalez',
       fechaInscripcion: new Date(), 
         },
      {id: 'y3r4',
       nombre: 'Gustavo',
       apellido: 'Lopez',
       fechaInscripcion: new Date(), 
         }
   


  ]

  constructor (private httpClient: HttpClient){}


getAlumnos(): Observable<Alumno[]> {

    return this.httpClient.get<Alumno[]>( environment.apiUrl + '/stduents')
    
}

addAlumno(alumno: Alumno): Observable <Alumno[]>{
  
  return this.httpClient.post<Alumno[]>( environment.apiUrl + '/stduents', alumno);
}

deleteAlumno (id:string):  Observable<Alumno[]>{

  this.MY_DATABASE = this.MY_DATABASE.filter((el) => el.id != id);
  return this.getAlumnos();
}

editAlumno (id: string, update: Alumno) {

    return this.httpClient.put( environment.apiUrl + '/stduents' + id, update)
  ;


  }



}





