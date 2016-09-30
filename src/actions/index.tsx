import { RtdbService } from '../rtdb/rtdb.service';
import {RootState} from '../reducers/index';
import { Borough } from '../components/borough';

export const RECEIVE_BOROUGHS = 'RECEIVE_BOROUGHS';
export const REQUEST_BOROUGHS = 'REQUEST_BOROUGHS';


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

function requestBoroughs(): Action {
    return {
        type: REQUEST_BOROUGHS,
        boroughs: []
    };
}

export function fetchBoroughs(): Function {

    var rtdb  = new RtdbService();

    return (dispatch: Function) => {
        dispatch(requestBoroughs())
        rtdb.getBoroughs().subscribe( (boroughs:Borough[]) => dispatch(receiveBoroughs(boroughs) ));
    }
}


