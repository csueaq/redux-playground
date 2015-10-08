/**
 * Created by Izzy on 08/10/15.
 */
import { Map } from 'immutable'

let initialTimeState =
    {
        count:0
    }
;

export default function (state = initialTimeState, action={}) {
    console.log("state is " + state.count + " action is " + action.type);
    switch (action.type) {
        case 'INCREMENT':
            state.count+=1;
            return state;
        default:
            return state
    }
}