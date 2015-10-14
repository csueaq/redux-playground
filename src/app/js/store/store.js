/**
 * Created by Izzy on 08/10/15.
 */

import { createStore, combineReducers } from 'redux'
import  counter  from '../reducer/counterReducer'
import { Map } from 'immutable'

export default function () {
    const initialState = Map(window.__INITIAL_STATE__);
    return createStore(counter,initialState);
}

