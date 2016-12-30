import {IAction, RECEIVE_BOROUGHS} from "../actions";
import {Borough} from "../components/borough";

export interface IRootState {
    boroughs: Borough[];

}

function reduceBoroughs(state: IRootState = {boroughs: []}, action: IAction) {
    switch (action.type) {
        case RECEIVE_BOROUGHS:
            return Object.assign({}, state, {
                boroughs: action.boroughs,
            });
        default:
            return state;
    }
}

export default reduceBoroughs;
