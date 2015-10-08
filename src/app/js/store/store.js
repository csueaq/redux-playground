/**
 * Created by Izzy on 08/10/15.
 */

import { createStore, combineReducers } from 'redux'
import  counter  from '../reducer/counterReducer'

export default function () {
    return createStore(counter);
}

