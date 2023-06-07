/* global URLSearchParams */
import {useSearchParams} from 'react-router-dom';
import {useCallback} from 'react';

import {Rating} from '../../rating/rating';
import {ShowType} from '../../../hook/use-search-api/use-search-api-type';
import {activeShowIdName} from '../../search/search-const';
import {smoothScrollToTop} from '../../../util/dom';

import showItemStyle from './show-item.scss';

type ShowItemPropsType = {
    show: ShowType;
};

// eslint-disable-next-line complexity
export function ShowItem(props: ShowItemPropsType): JSX.Element {
    const [searchParameters, setSearchParameters] = useSearchParams();
    const activeShowId = Number.parseInt(searchParameters.get(activeShowIdName) || '', 10);

    const {show} = props;
    const {id, name, rating, premiered} = show;
    const isActive = activeShowId === id;

    const setActiveShowId = useCallback(
        (newId: number) => {
            setSearchParameters((currentURLSearchParameters: URLSearchParams): URLSearchParams => {
                if (Number.isNaN(newId)) {
                    currentURLSearchParameters.delete(activeShowIdName);
                } else {
                    smoothScrollToTop();
                    currentURLSearchParameters.set(activeShowIdName, newId.toString(10));
                }

                return currentURLSearchParameters;
            });
        },
        [setSearchParameters]
    );

    return (
        <tr
            className={`${showItemStyle.show_item} ${isActive ? showItemStyle.show_item__active : ''}`.trim()}
            onClick={() => setActiveShowId(id)}
        >
            <td className={showItemStyle.show_item__first_cell}>
                <p className={showItemStyle.show_item__text}>{name}</p>
            </td>
            <td className={showItemStyle.show_item__cell}>
                <Rating ratingPercent={(rating?.average || 0) * 10} starSize={22} />
            </td>
            <td className={showItemStyle.show_item__cell}>
                <time className={showItemStyle.show_item__date} dateTime={premiered || ''}>
                    {premiered || '????-??-??'}
                </time>
            </td>
        </tr>
    );
}
