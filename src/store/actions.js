export const RECEIVE_QUOTES = 'RECEIVE_QUOTES';
export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
export const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';
export const UPDATE_FAVORITE_QUOTE = 'UPDATE_FAVORITE_QUOTE';

export const receiveQuotes = quotes => ({
  type: RECEIVE_QUOTES,
  quotes
});

export const addToFavorites = quote => ({
  type: ADD_TO_FAVORITES,
  quote
});

export const removeFromFavorites = quote => ({
  type: REMOVE_FROM_FAVORITES,
  quote
});

export const updateFavoriteQuote = quote => ({
  type: UPDATE_FAVORITE_QUOTE,
  quote
});
