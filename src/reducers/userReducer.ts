
export interface STATE {
    email: string;
    password: string;
    user: any
}

type ACTIONS = {}

const INITIAL_STATE: STATE = {
    email: '',
    password: '',
    user: null,
}



export default (state = INITIAL_STATE, action: ACTIONS) => {
    switch (action.type) {
        default:
            return state;
    }
}