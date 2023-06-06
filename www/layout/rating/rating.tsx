import {CSSProperties} from 'react';

import ratingStyle from './rating.scss';
import {ratingFilledStarLine, ratingStarLine} from './rating-const';

type RatingPropsType = {
    className?: string;
    ratingPercent: number;
    starSize: number;
};

export function Rating(props: RatingPropsType): JSX.Element {
    const {ratingPercent, starSize, className = ''} = props;
    const fullClassName: string = `${ratingStyle.rating} ${className}`.trim();
    const fullStyle: CSSProperties = {fontSize: `${starSize}px`};

    if (ratingPercent <= 0) {
        return (
            <div className={fullClassName} style={fullStyle}>
                <div className={ratingStyle.rating__stars__no_rating}>{ratingStarLine}</div>
            </div>
        );
    }

    return (
        <div className={fullClassName} style={fullStyle}>
            <div className={ratingStyle.rating__stars} title={`${Math.round(ratingPercent)}%`}>
                {ratingStarLine}
                <div className={ratingStyle.rating__stars_filled} style={{width: `${ratingPercent}%`}}>
                    {ratingFilledStarLine}
                </div>
            </div>
        </div>
    );
}
