/* global HTMLInputElement, URLSearchParams */

import {SyntheticEvent, useMemo} from 'react';
import {useSearchParams} from 'react-router-dom';

import {useLocale} from '../../provider/locale/locale-context';
import {debounce} from '../../util/function';

import {searchDebounceTimeout, searchQueryName} from './search-const';
import searchStyle from './search.scss';

type SearchPropsType = {
    className?: string;
};

export function Search(props: SearchPropsType): JSX.Element {
    const [searchParameters, setSearchParameters] = useSearchParams();
    const defaultSearchValue = searchParameters.get(searchQueryName) || '';
    const {className = ''} = props;
    const {getLocalizedString} = useLocale();

    // I use useMemo instead of useCallback, because here I use debounce
    const setSearchValue = useMemo(() => {
        return debounce<[string]>((newSearchValue: string) => {
            setSearchParameters((currentURLSearchParameters: URLSearchParams): URLSearchParams => {
                if (newSearchValue) {
                    currentURLSearchParameters.set(searchQueryName, newSearchValue);
                } else {
                    currentURLSearchParameters.delete(searchQueryName);
                }

                return currentURLSearchParameters;
            });
        }, searchDebounceTimeout);
    }, [setSearchParameters]);

    return (
        <div className={`${searchStyle.search} ${className}`.trim()}>
            <input
                className={searchStyle.search__input}
                defaultValue={defaultSearchValue}
                onInput={(evt: SyntheticEvent<HTMLInputElement>) => {
                    setSearchValue(evt.currentTarget.value.trim());
                }}
                placeholder={getLocalizedString('SEARCH__TYPE_TO_FILTER')}
                type="text"
            />
            <div className={searchStyle.search__icon} />
        </div>
    );
}
