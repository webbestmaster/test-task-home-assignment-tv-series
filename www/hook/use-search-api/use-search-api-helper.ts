/* global Response, URL, fetch */

import {SearchApiResponseType} from './use-search-api-type';
import {searchApiQueryName, searchShowApiHref} from './use-search-api-const';

export async function fetchShowList(searchValue: string): Promise<Array<SearchApiResponseType>> {
    const url = new URL(searchShowApiHref);

    url.searchParams.append(searchApiQueryName, searchValue.trim());

    const response: Response = await fetch(url);

    return response.json();
}
