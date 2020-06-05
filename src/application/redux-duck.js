// API
import Hero from "../api/resources";

// Actions
const SET_HERO = "SET_HERO";
const SET_SEARCHED_HERO_BY_NAME = "SET_SEARCHED_HERO_BY_NAME";
const SET_LAST_HERO_VIEWED = "SET_LAST_HERO_VIEWED";

// initial state to reducer
const initialState = {
  heroes: [],
  hero: null,
  lastViewedHeroes: [],
  lastTermsSearched: [],
};

// Reducer
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SEARCHED_HERO_BY_NAME:
      return {
        ...state,
        heroes: action.heroes,
      };
    case SET_HERO:
      return {
        ...state,
        hero: action.hero,
      };
    case SET_LAST_HERO_VIEWED:
      return {
        ...state,
        lastViewedHeroes: [...state.lastViewedHeroes, action.hero],
      };
    default:
      return state;
  }
};

// Action Creators
export function setHero(hero) {
  return { type: SET_HERO, hero };
}

export function setHeroes(heroes) {
  return { type: SET_SEARCHED_HERO_BY_NAME, heroes };
}

export function setViewedHero(hero) {
  return { type: SET_LAST_HERO_VIEWED, hero };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export const getHero = (heroId) => async (dispatch, state) => {
  try {
    const res = await Hero.getHero(heroId);
    dispatch(setHero(res.data.results));
  } catch (err) {
    return err;
  }
};

export const searchHeroByName = (queryName = "A") => async (
  dispatch,
  state
) => {
  try {
    const res = await Hero.getHeroByName(queryName);
    if (res.data.results) {
      dispatch(setHeroes(res.data.results));
    }
  } catch (err) {
    return err;
  }
};
