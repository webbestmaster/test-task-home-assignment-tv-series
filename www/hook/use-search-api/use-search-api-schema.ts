import {JSONSchemaType} from 'ajv';

import {SearchApiResponseType, ShowType} from './use-search-api-type';

export const showSchema: JSONSchemaType<ShowType> = {
    additionalProperties: true,
    properties: {
        id: {type: 'number'},
        image: {
            additionalProperties: true,
            nullable: true,
            properties: {
                medium: {type: 'string'},
                original: {type: 'string'},
            },
            required: ['medium', 'original'],
            type: 'object',
        },
        name: {type: 'string'},
        premiered: {nullable: true, type: 'string'},
        rating: {
            additionalProperties: true,
            nullable: true,
            properties: {
                average: {
                    nullable: true,
                    type: 'number',
                },
            },
            required: [],
            type: 'object',
        },
        summary: {nullable: true, type: 'string'},
    },
    required: ['id', 'name'],
    type: 'object',
};
export const searchApiResponseSchema: JSONSchemaType<SearchApiResponseType> = {
    additionalProperties: false,
    properties: {
        score: {type: 'number'},
        show: showSchema,
    },
    required: ['score', 'show'],
    type: 'object',
};

export const searchApiResponseSchemaList: JSONSchemaType<Array<SearchApiResponseType>> = {
    items: searchApiResponseSchema,
    type: 'array',
};
