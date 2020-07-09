import { createSelector } from 'reselect';
import { BOOKS_FETCHED, BOOK_CREATED } from '../types';

export default function books(state = {}, actions = {}) {
  switch (actions.type) {
    case BOOKS_FETCHED:
    case BOOK_CREATED:
      return { ...state, ...actions.data.entities.books };
    default:
      return state;
  }
}

// SELECTORS
export const booksSelector = (state) => state.books;

export const allBooksSelector = createSelector(booksSelector, (booksHash) =>
  Object.values(booksHash)
);
