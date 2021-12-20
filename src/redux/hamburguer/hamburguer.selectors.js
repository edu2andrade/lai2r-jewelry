import { createSelector } from "reselect";

const selectHamburguer = state => state.hamburguer;

export const selectHamburguerVisible = createSelector(
  [selectHamburguer],
  (hamburguer) => hamburguer.visible
);