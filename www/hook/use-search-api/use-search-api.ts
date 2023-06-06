import {useEffect, useState} from 'react';

import {SearchApiResponseType, ShowType, UseSearchApiType} from './use-search-api-type';
import {fetchShowList} from './use-search-api-helper';

export function useSearchApi(searchValue: string): UseSearchApiType {
    const [error, setError] = useState<Error | null>(null);
    const [isInProgress, setIsInProgress] = useState<boolean>(false);
    const [showList, setShowList] = useState<Array<ShowType>>([]);

    useEffect(() => {
        if (!searchValue.trim()) {
            setIsInProgress(false);
            setError(null);
            setShowList([]);
            return;
        }

        (async () => {
            setIsInProgress(true);
            setError(null);
            try {
                const fetchResult: Array<SearchApiResponseType> = await fetchShowList(searchValue);

                setShowList(fetchResult.map<ShowType>(({show}: SearchApiResponseType): ShowType => show));
            } catch {
                setShowList([]);
                setError(new Error('Can not fetch data'));
            } finally {
                setIsInProgress(false);
            }
        })();
    }, [searchValue]);

    return {error, isInProgress, showList};
}
