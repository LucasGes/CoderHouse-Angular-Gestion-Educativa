import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockProvider } from 'ng-mocks';
import { AlumnosService } from './alumnos.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import { Alumno } from '../../pages/dashboard/alumnos/models';

describe('AlumnosService', () => {
    let service: AlumnosService;
    let router: Router;
    let httpController: HttpTestingController;


    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockProvider(Router),
            ],
            imports: [
                HttpClientTestingModule
            ]

        });
        httpController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(AlumnosService);
        router = TestBed.inject(Router);
    });

    it('Al llamar getAlumnos se debe ejecutar una peticion HTTP a /stduents', () => {

        const mockedResponse: Alumno[] = [
            {
                id: 'asd123',
                nombre: 'Lucas',
                apellido: 'Garcia',
                fechaInscripcion: new Date('2020-03-02'),
                cursos: []
            }
        ]
        service.getAlumnos().subscribe({
            next: (res) => {
                expect(res).toEqual(mockedResponse)
            }
        });

        httpController.expectOne({
            url: environment.apiUrl + '/stduents',
            method: 'GET'
        }).flush(mockedResponse)




    })

});

