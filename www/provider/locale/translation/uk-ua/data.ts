/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const ukUa: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Українська',
    META__LANGUAGE: 'Мова',
    UI__EMPTY_STRING: '',

    SEARCH__TYPE_TO_FILTER: 'Введіть для пошуку...',
    MOVIE_INFO__AVERAGE_RATING: 'Середня оцінка:',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Виберіть фільм зі списку.',
    MOVIE_INFO__NO_DESCRIPTION: 'Без опису.',
    SHOW_LIST__NOTING_TO_SHOW__TYPE_TO_SEARCH: 'Немає показань, введіть для пошуку.',
    MESSAGE__LOADING: 'Завантаження...',
    MESSAGE__LOADING_ERROR: 'Помилка завантаження!',
} as const;
