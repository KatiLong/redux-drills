import {SET_LANGUAGE} from '../actions';
const initialState = {
    language: 'en'
}

// Add your code for the languageReducer
export const languageReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SET_LANGUAGE':
            return Object.assign({}, state, {
                language: action.language
            });
        default:
            return state
    }
};
