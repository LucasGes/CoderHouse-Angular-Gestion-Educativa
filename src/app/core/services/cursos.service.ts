import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Curso } from "../../pages/dashboard/cursos/models";


@Injectable({ providedIn: 'root' })

export class CursosService {



  constructor(private httpClient: HttpClient) { }


  getCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(environment.apiUrl + '/courses')
  }

  addCurso(curso: Curso): Observable<Curso[]> {
    return this.httpClient.post<Curso[]>(environment.apiUrl + '/courses', curso);
  }

  deleteCurso(id: string) {
    return this.httpClient.delete(environment.apiUrl + '/courses/' + id);
  }

  editCurso(id: string, curso: Curso) {
    return this.httpClient.put(environment.apiUrl + '/courses/' + id, curso);
    ;
  }

}
