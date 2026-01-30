import {
	SchemaProperties,
	SchemaGenerators,
} from '../SchemaTypes.ts';

declare type FICSIT = SchemaProperties.Organization & {
	url: string,
};

export const FICSIT:FICSIT = {
	'name': 'FICSIT Incorporated',
	'url': 'https://satisfactory.wiki.gg/wiki/FICSIT_Inc.',
};

export default SchemaGenerators.Organization(Object.assign({}, FICSIT));
