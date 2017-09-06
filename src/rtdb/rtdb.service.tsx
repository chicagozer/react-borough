import {Observable} from "rxjs/Rx";
import * as io from "socket.io-client";
import {Borough} from "../components/borough";

export class RtdbService {

    private socket: SocketIOClient.Socket;
    private url: string = "http://rtdb.rheosoft.com";

    private boroughs: Observable<Borough[]>;

    constructor() {

        this.socket = io(this.url);

        this.socket.on("connect", () => {
            this.socket.emit("subscribe", [{
                view: "90e40254-d57c-4ce5-88b5-20034c9511ec",
            }]);
        });

        this.boroughs = new Observable<Borough[]>((observer: any) => {

            this.socket.on("90e40254-d57c-4ce5-88b5-20034c9511ec",
                (data: any) => {
                    observer.next(data.map((i: any) => new Borough(i[0], i[1].fvTotal, i[1].count)));
                });

            return () => {
                this.socket.disconnect();
            };
        });
    }

    public getBoroughs(): Observable<Borough[]> {
        return this.boroughs;
    }

}
