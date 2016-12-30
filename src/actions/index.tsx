import {Borough} from "../components/borough";
import {RtdbService} from "../rtdb/rtdb.service";

export const RECEIVE_BOROUGHS = "RECEIVE_BOROUGHS";

export interface IAction {
    type: string;
    boroughs: Borough[];
}

function receiveBoroughs(boroughs: Borough[]): IAction {
    return {
        type: RECEIVE_BOROUGHS,
        boroughs,
    };
}

export function fetchBoroughs(rtdb: RtdbService): Function {

    return (dispatch: Function) => {
        rtdb.getBoroughs().subscribe((boroughs: Borough[]) => dispatch(receiveBoroughs(boroughs)));
    };
}
