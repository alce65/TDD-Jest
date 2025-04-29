import { URL } from "../config";
import { HttpError } from "../types/http.error";
import { User, UserDTO } from "../types/user";
import axios from "axios";

const url = URL;

export class RepoUsers {
    private reThrow(error: Error) {
        let finalError = error;
        if (!(error instanceof HttpError)) {
            finalError = new HttpError(
                "Network response was not ok " + error.message,
                0,
                error.message
            );
        }
        throw finalError;
    }
    getUsers() {
        return fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new HttpError(
                        "Network response was not ok " + response.statusText,
                        response.status,
                        response.statusText
                    );
                }

                return response.json();
            })
            .then((data) => {
                return data as User[];
            })
            .catch((error) => {
                this.reThrow(error);
            });
    }

    getWithAxios() {
        return axios.get(url).then((response) => {
            const users = response.data as User[];
            return users;
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    createUser(userData: UserDTO) {
        return fetch(url, {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new HttpError(
                        "Network response was not ok " + response.statusText,
                        response.status,
                        response.statusText
                    );
                }

                return response.json();
            })
            .then((data) => {
                return data as User[];
            })
            .catch((error) => {
                this.reThrow(error);
            });
    }
}
