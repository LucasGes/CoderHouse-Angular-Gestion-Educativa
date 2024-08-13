import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Alumno} from "../../pages/dashboard/alumnos/models";


@Injectable ({providedIn: 'root'})

export class AlumnosService{

  private MY_DATABASE = [
    {id: 'a3f5',
      nombre: 'Fernando',
      apellido: 'Sosa',
      fechaInscripcion: new Date(), 
         },
 
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

getAlumnos(): Observable<Alumno[]> {

    return new Observable((observer) => {

setTimeout(()=> {
    observer.next(this.MY_DATABASE);
    observer.complete();
}, 1000)
    })
}

addAlumno(alumno: Alumno): Observable <Alumno[]>{
  this.MY_DATABASE.push(alumno);
  return this.getAlumnos();
}

deleteAlumno (id:string):  Observable<Alumno[]>{

  this.MY_DATABASE = this.MY_DATABASE.filter((el) => el.id != id);
  return this.getAlumnos();
}

editAlumno (id: string, update: Alumno): Observable<Alumno[]> {

  this.MY_DATABASE = this.MY_DATABASE.map( (el) => 
    el.id === id ? {...update, id} : el);

  return this.getAlumnos();


  }



}





