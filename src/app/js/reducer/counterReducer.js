/**
 * Created by Izzy on 08/10/15.
 */
import { Map } from 'immutable'

let initialTimeState = Map(
    {
        count:0
    }
);

export default function (state = initialTimeState, action={}) {
    console.log("state is " + state.toJS().count + " action is " + action.type);
    switch (action.type) {
        case 'INCREMENT':
            return state.set("count",state.get("count")+1);
        default:
            return state
    }
}