/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const ruRu: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Русский',
    META__LANGUAGE: 'Язык',
    UI__EMPTY_STRING: '',

    SEARCH__TYPE_TO_FILTER: 'Введите для поиска...',
    MOVIE_INFO__AVERAGE_RATING: 'Средний рейтинг:',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Выберите фильм из списка.',
    MOVIE_INFO__NO_DESCRIPTION: 'Нет описания.',
    SHOW_LIST__NOTING_TO_SHOW__TYPE_TO_SEARCH: 'Здесь ничего, введите для поиска.',
    MESSAGE__LOADING: 'Загрузка...',
    MESSAGE__LOADING_ERROR: 'Ошибка загрузки!',
} as const;
