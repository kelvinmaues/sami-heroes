export const REQ_BEGIN = "REQ_BEGIN";
export const REQ_ENDED = "REQ_ENDED";
export const REQ_ERROR = "REQ_ERROR";

const initialState = {
  isLoading: false,
  requestCount: 0,
  errMsg: "",
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REQ_BEGIN:
      return {
        ...state,
        isLoading: true,
        requestCount: state.requestCount + 1,
        errMsg: "",
      };
    case REQ_ENDED:
      return {
        ...state,
        isLoading: false,
        requestCount: Math.max(state.requestCount - 1, 0),
      };

    case REQ_ERROR:
      return {
        ...state,
        isLoading: false,
        requestCount: Math.max(state.requestCount - 1, 0),
        errMsg: action.error,
      };

    default:
      return state;
  }
};
