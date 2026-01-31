import type {
	Schema,
	SchemaProperties,
} from '../SchemaTypes.ts';

const CSS: Schema.Organization<SchemaProperties.Organization> = {
	'@type': 'Organization',
	name: 'Coffee Stain Studios AB',
	url: 'https://www.coffeestainstudios.com/',
};

export default CSS;
