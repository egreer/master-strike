import * as JsSearch from 'js-search'

import { getAllHeroes, getAllMasterminds, processGroupCardText } from "./cardUtils"

import { cardTypes } from "../constants/cardTypes";

const SEARCH_CACHE = {};

export const groupSearchSetup = groups => {
  groups.forEach(group => {
    group.filteredCards = (group.cards || []).map(card => {
      card.disabled = false;
      return card;
    });
  });
}

export const filterById = (items, ids) => {
  if(!ids || !ids.length) return items;
  return items.filter(item => ids.includes(item.id));
}

export const filterBySet = (items, sets) => {
  if(!sets || !sets.length) return items;

  const fromSet = a => sets.includes(a);
  const setCheck = item => {
    return Array.isArray(item.set) ? item.set.some(fromSet) : fromSet(item.set);
  }
  return items.filter(setCheck);
}

export const filterGroupByKeyword = (groups, keywords) => {
  if(!keywords || !keywords.length) return groups;
  return groups.filter(group => {
    let match = false;
    const cards = group.filteredCards || group.cards;
    cards.forEach(card => {
      if(card.disabled || !card.abilities) return;
      const abs = card.abilities;
      const hasKey = ab => keywords.includes(ab.keyword);
      const matchKey = abs.some(ab => Array.isArray(ab) ? ab.some(hasKey) : hasKey(ab));
      if(matchKey) match = true;
      card.disabled = !matchKey;
    });
    return match;
  });
}

export const filterGroupByRule = (groups, rules) => {
  if(!rules || !rules.length) return groups;
  return groups.filter(group => {
    let match = false;
    const cards = group.filteredCards || group.cards;
    cards.filteredCards.forEach(card => {
      if(card.disabled || !card.abilities) return;

      // checks for multiclass
      if(card.hc2 && rules.includes(2)) {
        match = true;
        return;
      }

      // checks for divided
      if(card.divided && rules.includes(4)) {
        match = true;
        return;
      }

      // check for asterisk
      if((card.costAsterisk || card.attackAsterisk) && rules.includes(10)) {
        match = true;
        return;
      }

      // checks other rules
      const abs = card.abilities;
      const hasRule = ab => rules.includes(ab.rule);
      const matchRule = abs.some(ab => Array.isArray(ab) ? ab.some(hasRule) : hasRule(ab));
      if(matchRule) match = true;
      card.disabled = !matchRule;
    });
    return match;
  });
}

export const filterGroupByMinMax = (groups, cardProp, minMaxArray) => {
  return groups.filter(group => {
    let match = false;
    const cards = group.filteredCards || group.cards;
    cards.forEach(card => {
      if(card.disabled) return;
      const valueMatch = card[cardProp] >= minMaxArray[0] && card[cardProp] <= minMaxArray[1];
      if(valueMatch) match = true;
      card.disabled = !valueMatch;
    });
    return match;
  });
}

export const filterGroupByTeam = (groups, teams) => {
  if(!teams || !teams.length) return groups;
  return groups.filter(group => {
    let match = teams.includes(group.team);
    const cards = group.filteredCards || group.cards;
    cards.forEach(card => {
      if(card.team === undefined) card.team = group.team;
      if(card.disabled) return;
      const matchTeam = teams.includes(card.team);
      if(matchTeam) match = true;
      card.disabled = !matchTeam;
    });
    return match;
  });
}

export const filterGroupByHeroClass = (groups, hcs) => {
  if(!hcs || !hcs.length) return groups;
  return groups.filter(group => {
    let match = false;
    const cards = group.filteredCards || group.cards;
    cards.forEach(card => {
      if(card.disabled) return;
      const matchHC = hcs.includes(card.hc) || hcs.includes(card.hc2);
      if(matchHC) match = true;
      card.disabled = !matchHC;
    });
    return match;
  });
}

const buildGroupSearch = (groups, indexes) => {
  const search = new JsSearch.Search("name");
  indexes.forEach(index => search.addIndex(index));
  let cards = [];
  groups.forEach(group => {
    processGroupCardText(group);
    cards = cards.concat(group.cards);
  });
  search.addDocuments(cards);
  return search;
}

const buildHeroesSearch = () => {
  return buildGroupSearch(getAllHeroes(), ["name", "groupName", "abilitiesText"]);
}

const buildMastermindsSearch = () => {
  return buildGroupSearch(getAllMasterminds(), ["name", "groupName", "abilitiesText"]);
}

const buildCardSearch = cardType => {
  if(cardTypes.HERO.id === cardType) return buildHeroesSearch();
  if(cardTypes.MASTERMIND.id === cardType) return buildMastermindsSearch();
  return null;
}

const getCardSearch = cardType => {
  if(!SEARCH_CACHE[cardType]) {
    SEARCH_CACHE[cardType] = buildCardSearch(cardType);
  }
  return SEARCH_CACHE[cardType];
}

export const filterGruopBySearch = (groups, cardType, search) => {
  if(!search) return groups;

  const cardsFound = getCardSearch(cardType).search(search);
  return groups.filter(group => {
    const groupCardsFound = cardsFound.filter(card => card.groupId === group.id);
    let match = false;
    const cards = group.filteredCards || group.cards;
    cards.forEach(card => {
      if(card.disabled) return;
      const found = groupCardsFound.some(cardFound => cardFound.name === card.name);
      if(found) match = true;
      card.disabled = !found;
    });
    return match;
  });
}