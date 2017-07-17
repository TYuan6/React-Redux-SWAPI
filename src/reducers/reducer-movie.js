export default function(state = {}, action){
    switch(action.type){
        case "FETCH_FILMS":
            return action.payload;
    }
    return state;
}


