import {Locale} from '../../provider/locale/locale-context';
import {ShowType} from '../../hook/use-search-api/use-search-api-type';

import {ShowItem} from './show-item/show-item';
import showTableStyle from './show-table.scss';

type ShowListPropsType = {
    showList: Array<ShowType>;
};

export function ShowTable(props: ShowListPropsType): JSX.Element {
    const {showList} = props;

    if (showList.length === 0) {
        return (
            <div className={showTableStyle.show_table}>
                <p className={showTableStyle.show_table__message}>
                    <Locale stringKey="SHOW_LIST__NOTING_TO_SHOW__TYPE_TO_SEARCH" />
                </p>
            </div>
        );
    }

    return (
        <table className={showTableStyle.show_table}>
            <tbody>
                {showList.map(
                    (show: ShowType): JSX.Element => (
                        <ShowItem key={show.id} show={show} />
                    )
                )}
            </tbody>
        </table>
    );
}
