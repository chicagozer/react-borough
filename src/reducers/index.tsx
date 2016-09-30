import {
    RECEIVE_BOROUGHS, Action
} from '../actions'
import { Borough } from '../components/borough';


export interface RootState {
    boroughs: Borough[];

}


function reduceBoroughs(state: RootState = { boroughs: []}, action: Action) {
    switch (action.type) {
        case RECEIVE_BOROUGHS:
            return Object.assign({}, state, {
                boroughs: action.boroughs
            })
        default:
            return state
    }
}


export default reduceBoroughs