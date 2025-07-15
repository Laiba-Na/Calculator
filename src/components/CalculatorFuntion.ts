import {ACTIONS} from './ACTIONS';


interface Actions
{
    type: string;
    payload?: any;
}


function reducer(state : any, {type , payload} : Actions ) {

    switch(type) {
        case ACTIONS.ADD_DIGIT:
            return {
                ...state ,
                currentoperand: `${state.currentoperand || ""}${payload}`
            }

        
    }

    
}






export {reducer}; 