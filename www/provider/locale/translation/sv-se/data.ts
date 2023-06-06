/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const svSe: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Svenska',
    META__LANGUAGE: 'Språket',
    UI__EMPTY_STRING: '',

    SEARCH__TYPE_TO_FILTER: 'Skriv för att söka...',
    MOVIE_INFO__AVERAGE_RATING: 'Genomsnittligt betyg:',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Välj film från listan.',
    MOVIE_INFO__NO_DESCRIPTION: 'Ingen beskrivning.',
    SHOW_LIST__NOTING_TO_SHOW__TYPE_TO_SEARCH: 'Inget att visa, skriv för att söka.',
    MESSAGE__LOADING: 'Läser in...',
    MESSAGE__LOADING_ERROR: 'Inläsningsfel!',
} as const;
