/* global document */

import {useEffect} from 'react';

import {Rating} from '../rating/rating';
import {Locale} from '../../provider/locale/locale-context';
import {ShowType} from '../../hook/use-search-api/use-search-api-type';

import showInfoStyle from './show-info.scss';

type ShowInfoPropsType = {
    show: ShowType | void;
};

export function ShowInfo(props: ShowInfoPropsType): JSX.Element {
    const {show} = props;

    useEffect(() => {
        if (show && show.image?.original) {
            document.body.style.backgroundImage = `url(${show.image.original})`;
        }
    }, [show]);

    if (!show) {
        return (
            <section className={showInfoStyle.show_info}>
                <p className={showInfoStyle.show_info__message}>
                    <Locale stringKey="MOVIE_INFO__SELECT_MOVIE_FROM_THE_LIST" />
                </p>
            </section>
        );
    }

    const {name, rating, image, summary} = show;

    return (
        <section className={showInfoStyle.show_info}>
            <h1 className={showInfoStyle.show_info__header}>{name}</h1>
            <div className={showInfoStyle.show_info__preview}>
                {image?.medium ? (
                    <img alt={name} className={showInfoStyle.show_info__poster} src={image.medium} />
                ) : null}
                {summary ? (
                    <div
                        className={showInfoStyle.show_info__description}
                        // eslint-disable-next-line react/no-danger, id-match
                        dangerouslySetInnerHTML={{__html: summary}}
                    />
                ) : (
                    <div className={showInfoStyle.show_info__description}>
                        <p className={showInfoStyle.show_info__message}>
                            <Locale stringKey="MOVIE_INFO__NO_DESCRIPTION" />
                        </p>
                    </div>
                )}
            </div>
            <div className={showInfoStyle.show_info__average_rating}>
                <p className={showInfoStyle.show_info__average_rating_label}>
                    <Locale stringKey="MOVIE_INFO__AVERAGE_RATING" />
                </p>
                <Rating
                    className={showInfoStyle.show_info__average_rating_stars}
                    ratingPercent={(rating?.average || 0) * 10}
                    starSize={26}
                />
            </div>
        </section>
    );
}
