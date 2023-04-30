// Action tiplerini tanımlayın
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const TOOGLE_THEME = 'TOOGLE_THEME';

// Action oluşturucularını (action creators) tanımlayın
export const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

export const changeTheme = () => ({
  type: TOOGLE_THEME,
})
