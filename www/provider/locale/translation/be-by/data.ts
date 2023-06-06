/* eslint-disable id-match, id-length, max-len, sonarjs/no-duplicate-string, sort-keys, babel/quotes */

import {LocaleDictionaryType} from '../type';

export const beBy: LocaleDictionaryType = {
    META__LANGUAGE_NAME: 'Беларуская',
    META__LANGUAGE: 'Мова',
    UI__EMPTY_STRING: '',

    SEARCH__TYPE_TO_FILTER: 'Увядзіце для пошуку...',
    MOVIE_INFO__AVERAGE_RATING: 'Сярэдні рэйтынг:',
    MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST: 'Выберыце фільм са спісу.',
    MOVIE_INFO__NO_DESCRIPTION: 'Без апісання.',
    SHOW_LIST__NOTING_TO_SHOW__TYPE_TO_SEARCH: 'Няма чаго паказваць, увядзіце для пошуку.',
    MESSAGE__LOADING: 'Загрузка...',
    MESSAGE__LOADING_ERROR: 'Памылка загрузкі!',
} as const;
