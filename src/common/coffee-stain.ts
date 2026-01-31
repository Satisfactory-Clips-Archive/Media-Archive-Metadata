import type {
	Schema,
	SchemaProperties,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../SchemaTypes.ts';

const CSS: Schema.Organization<SchemaProperties.Organization> = {
	'@type': 'Organization',
	name: 'Coffee Stain Studios AB',
	url: 'https://www.coffeestainstudios.com/',
};

export default CSS;
