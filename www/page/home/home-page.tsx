import {useSearchParams} from 'react-router-dom';

import {Search} from '../../layout/search/search';
import {useSearchApi} from '../../hook/use-search-api/use-search-api';
import {SwitchLanguage} from '../../layout/switch-language/switch-language';
import {ShowTable} from '../../layout/show-table/show-table';
import {ShowInfo} from '../../layout/show-info/show-info';
import {ShowType} from '../../hook/use-search-api/use-search-api-type';
import {activeShowIdName, searchQueryName} from '../../layout/search/search-const';
import {Locale} from '../../provider/locale/locale-context';

import homePageStyle from './home-page.scss';

// eslint-disable-next-line complexity
export function HomePage(): JSX.Element {
    const [searchParameters] = useSearchParams();
    const searchValue = searchParameters.get(searchQueryName) || '';
    const {error, isInProgress, showList} = useSearchApi(searchValue);
    const activeShowId = Number.parseInt(searchParameters.get(activeShowIdName) || '', 10);
    const activeShow: ShowType | void = showList.find((show: ShowType): boolean => show.id === activeShowId);

    const searchNode: JSX.Element = (
        <div className={homePageStyle.home_page__top_panel}>
            <Search className={homePageStyle.home_page__search} />
            <SwitchLanguage />
        </div>
    );

    if (!searchValue) {
        return (
            <div className={homePageStyle.home_page}>
                {searchNode}
                <p className={homePageStyle.home_page__message}>
                    <Locale stringKey="SEARCH__TYPE_TO_FILTER" />
                </p>
            </div>
        );
    }

    if (isInProgress) {
        return (
            <div className={homePageStyle.home_page}>
                {searchNode}
                <p className={homePageStyle.home_page__message}>
                    <Locale stringKey="MESSAGE__LOADING" />
                </p>
            </div>
        );
    }

    if (error) {
        return (
            <div className={homePageStyle.home_page}>
                {searchNode}
                <p className={homePageStyle.home_page__message}>
                    <Locale stringKey="MESSAGE__LOADING_ERROR" />
                </p>
            </div>
        );
    }

    if (showList.length === 0) {
        return (
            <div className={homePageStyle.home_page}>
                {searchNode}
                <p className={homePageStyle.home_page__message}>
                    <Locale stringKey="SHOW_LIST__NOTING_TO_SHOW__TYPE_TO_SEARCH" />
                </p>
            </div>
        );
    }

    return (
        <div className={homePageStyle.home_page}>
            {searchNode}
            <main className={homePageStyle.home_page__main}>
                <div className={homePageStyle.home_page__table}>
                    <ShowTable showList={showList} />
                </div>
                <ShowInfo show={activeShow} />
            </main>
        </div>
    );
}
