import { TestBed } from "@angular/core/testing";

import { RepoUserService } from "./repo.user.service";
import { provideHttpClient } from "@angular/common/http";
import {
    HttpTestingController,
    provideHttpClientTesting,
} from "@angular/common/http/testing";
import { environment } from "../../environments/environment";

// jest.mock("../../environments/environment", () => ({
//     environment: {
//         api_users_url: "https://jsonplaceholder.typicode.com/users",
//     },
// }));


/*
Preparación del entorno de pruebas para un servicio que depende de HttpClient.

1. TestBed.configureTestingModule({
  imports: [],
  providers: [provideHttpClient(), provideHttpClientTesting()],
});

2. controller = TestBed.inject(HttpTestingController);

3.  afterEach(() => {controller.verify();})

*/

const URL = environment.api_users_url;

describe("RepoUserService", () => {
    let service: RepoUserService;
    let controller: HttpTestingController; // Controlador para simular las peticiones HTTP


    console.log("URL", URL);

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                provideHttpClient(), // Proporciona el cliente HTTP para las pruebas
                provideHttpClientTesting(), // Proporciona el cliente HTTP de pruebas
            ],
        });
        service = TestBed.inject(RepoUserService);
        controller = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        controller.verify();
    }); // Verifica que no haya peticiones pendientes después de cada prueba

    it("should be created", () => {
        expect(service).toBeTruthy();
    });

    /* Ejemplo de prueba de un método que depende de HTTPClient.

            1.  Act (ASYNC)
            service.getUsers().subscribe((data) => {})

           
            4.  Arrange Final (ASYNC)
            testRequest.flush('Según lo que haga el back realmente')

            5. Assert dentro del subscribe  (SYNC)
            subscribe((data) => {
                // Assert (ASYNC)
                expect(data).toEqual(mockUser);
                });

  */

    it("should return user data", (done) => {
        const userId = 15; // Cambia esto al ID de usuario que quieras probar
        // Act (ASYNC)
        service.getUserById(userId).subscribe({
            next: (user) => {
                expect(user).toBeTruthy();
                expect(user).toEqual({
                    id: 15,
                    name: "PEPE",
                });
                done();
            },
        });

        // 2.  Arrange (ASYNC)
        // Definimos el caso concreto para el controler

        // Registramos la ruta que queremos interceptar
        // y la respuesta que queremos devolver.

        const testRequest = controller.expectOne(URL + "/" + userId);

        // 3 . Assert (ASYNC)
        // Comprobamos que el método HTTP es el correcto.
        expect(testRequest.request.method).toEqual("GET");

        // 4.  Arrange Final (ASYNC)
        testRequest.flush({
            id: 15,
            name: "Pepe",
        });
    });

    // it("should return error if NOT valid user ", (done) => {
    //     const userId = 11; // Cambia esto al ID de usuario que quieras probar
    //     service.getUserById(userId).subscribe({
    //         error: (error: HttpErrorResponse) => {
    //             expect(error).toBeInstanceOf(HttpErrorResponse);
    //             done();
    //         },
    //     });
    // });
});
