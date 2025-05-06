import { inject, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { User } from "../types/user";
import { map, Observable } from "rxjs";

const URL = environment.api_users_url

@Injectable({
    providedIn: "root",
})
export class RepoUserService {
    // 2.1 inyectamos httpClient
    // desde @angular/common/http

    private http = inject(HttpClient)

    // 2.2 creamos el método getUserById
    // que recibe un id de usuario y devuelve un observable
    // de tipo USER

    getUserById(id: number): Observable<User> {
        // 3 llamamos al API y devolvemos el observable       
        return this.http.get<User>(`${URL}/${id}`).pipe(
            map(user => {
                user.name = user.name.toUpperCase()
                return user
            })
        );
    }

    // 4. Después de obtener el error NullInjectorError
    // lo solucionamos importando el módulo HttpClientModule
    // en el fichero de configuración: app.config.ts
    // provideHttpClient(withFetch())
    // 5. Tenemos el mismo error en el test:
    // Replicamos la configuración en el test
    // sin utilizar withFetch()
    // Pasa el test pero dependemos de la API real
    // Probamos con un user 11
    // 6. Necesitamos añadir el control de errores a la subscripció
}
