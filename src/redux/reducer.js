import { INCREMENT_COUNTER, DECREMENT_COUNTER, TOOGLE_THEME } from './actions';

// Başlangıç durumu (initial state) tanımlayın
const initialState = {
    counter: 0,
    theme: 'dark'
};

// Reducer fonksiyonunu oluşturun
const counter = (state = initialState.counter, action) => {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
};

const theme = (state = initialState.theme, action) => {
    switch (action.type) {
        case TOOGLE_THEME:
            return state === 'dark' ? 'light' : 'dark';
        default:
            return state;
    }
}

export {
    counter,
    theme
}
