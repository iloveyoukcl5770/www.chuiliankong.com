import { FETCH_SKILLS } from "../actions/actions";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_SKILLS:
            return action.payload;
        default:
            return state;
    }
}