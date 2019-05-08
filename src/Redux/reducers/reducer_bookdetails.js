export default function (state = null, actions) {
  
    switch (actions.type) {
        case 'ACTIVE_BOOK':
            return actions.payload;           
        default:
            return state;
    }

}