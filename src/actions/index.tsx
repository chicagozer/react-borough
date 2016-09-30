import { RtdbService } from '../rtdb/rtdb.service';
import { Borough } from '../components/borough';

export const RECEIVE_BOROUGHS = 'RECEIVE_BOROUGHS';


export interface Action {
    type: string,
    boroughs: Borough[]
}


function receiveBoroughs(boroughs: Borough[]): Action {
    return {
        type: RECEIVE_BOROUGHS,
        boroughs
    };
}


export function fetchBoroughs(rtdb : RtdbService): Function {

    return (dispatch: Function) => {
        rtdb.getBoroughs().subscribe( (boroughs:Borough[]) => dispatch(receiveBoroughs(boroughs) ));
    }
}


