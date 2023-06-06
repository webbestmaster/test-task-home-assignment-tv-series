import assert from 'node:assert/strict';

import Ajv from 'ajv';
import {describe, test} from '@jest/globals';

import {SearchApiResponseType} from './use-search-api-type';
import {fetchShowList} from './use-search-api-helper';
import {searchApiResponseSchemaList} from './use-search-api-schema';

describe('useSearchApi', () => {
    test('Fetch shows data', async () => {
        // world "girls" has been get from example - https://www.tvmaze.com/api
        const searchApiResponseList: Array<SearchApiResponseType> = await fetchShowList('girls');
        const ajv = new Ajv();
        const modelJsonSchemaValidate = ajv.compile<Array<SearchApiResponseType>>(searchApiResponseSchemaList);
        const isValidSchema = modelJsonSchemaValidate(searchApiResponseList);

        assert.equal(isValidSchema, true, 'wrong response for show data');
    });
});
