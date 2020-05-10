import { combineReducers } from 'redux'
import { authentication }  from './user.reducers'
import  courses   from './coursesReducer'
import  event   from './event.reducers'
import  workShop   from './workShop.reducers'
import  meeting   from './meeting.reducers'
const rootReducer = combineReducers({
    authentication,
    courses,
    event,
    workShop,
    meeting
})

export default rootReducer