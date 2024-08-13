import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { Inscripcion } from '../../pages/dashboard/inscripciones/models/index';

@Injectable ({providedIn: 'root' })
export class InscripcionesService{

    private MY_DATABASE = [

        {   id: 'asd123',
            alumno: 'aaaa.',
            curso: 'bbbb',
            fechaInscripcion: new Date(),
           },
           { id: 'asd123',
            alumno: 'qqq.',
            curso: 'www',
            fechaInscripcion: new Date(),
           },
           { id: 'asd123',
            alumno: 'rrrr.',
            curso: 'tttt',
            fechaInscripcion: new Date(),
           }

    ]

getInscripciones(): Observable<Inscripcion[]>{

    return of <Inscripcion[]>(this.MY_DATABASE).pipe(delay(400));
}

addAlumno(Inscripcion: Inscripcion): Observable <Inscripcion[]>{
    this.MY_DATABASE.push(Inscripcion);
    return this.getInscripciones();
  }


}