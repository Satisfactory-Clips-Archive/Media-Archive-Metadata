import type {
	SchemaProperties,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../SchemaTypes.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../SchemaTypes.ts';

declare type FICSIT = SchemaProperties.Organization & {
	url: string,
};

export const FICSIT: FICSIT = {
	'name': 'FICSIT Incorporated',
	'url': 'https://satisfactory.wiki.gg/wiki/FICSIT_Inc.',
};

export default SchemaGenerators.Organization(Object.assign({}, FICSIT));
