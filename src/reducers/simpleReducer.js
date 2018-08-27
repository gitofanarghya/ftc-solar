const initialState = {
  isloggedin: false,
  currentStatus: "site",
  currentZone: null,
  currentRow: null,
  statics: null,
  cordssite: [[452,21,22,600],[1094,22,671,596]],
  cordszone: {'0': [[115,90,1050,200],[120,235,1050,350],[120,430,1050,580]],
              '1': [[300,130,944,288],[299,353,945,517]]}
};

const simpleReducer = (state = initialState, action) => {
    switch (action.type) {
     case 'login':
      return { ...state, isloggedin: true, email: action.payload }

     case 'logout':
      return { ...state, isloggedin:false }

     case 'setstatic':
      return { ...state, statics: action.payload }

     case 'sitetozone':
      return { ...state, currentStatus: "zone", currentZone: action.payload}

      case 'zonetorow':
      return { ...state, currentStatus: "row", currentRow: action.payload}

      case 'rowtorow':
      return { ...state, currentRow: action.payload}

      case 'zonetosite':
      return { ...state, currentStatus: "site"}

      case 'rowtozone':
      return { ...state, currentStatus: "zone"}
     
    default:
      return state
    }
   }

export default simpleReducer;