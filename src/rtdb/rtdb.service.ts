import {Observable} from 'rxjs/Rx';
import * as io from 'socket.io-client';
import {Borough} from '../components/borough';

export class RtdbService {

    private socket2: SocketIOClient.Socket;

    private url2: string = 'https://rtdb.rheosoft.com';

    private  boroughs: Observable<Borough[]>;



    constructor() {


        console.log('creating socket2');
        this.socket2 = io(this.url2);



        this.socket2.on('connect', () => {
            console.log('connected to socket2 now subscribing');

            this.socket2.emit('subscribe', [{
                view: '90e40254-d57c-4ce5-88b5-20034c9511ec'
                //      ,ticket: response.json()
            }]);

        });

        console.log('fetching boroughs');
       this.boroughs = new Observable<Borough[]>((observer: any) => {

            this.socket2.on('90e40254-d57c-4ce5-88b5-20034c9511ec',
                (data:any) => {
                    console.log('new borough data');
                    observer.next(data.map((i:any) => new Borough(i[0], i[1].fvTotal, i[1].count)));
                });

            return () => {
                this.socket2.disconnect();
            };
        });

    }


    public getBoroughs(): Observable<Borough[]> {
    return this.boroughs;
    }

}
