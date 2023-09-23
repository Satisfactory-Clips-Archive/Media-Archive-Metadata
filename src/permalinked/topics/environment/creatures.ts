import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Creatures',
		'Satisfactory Livestream clips about Creatures',
		[
			'Category:Fauna',
		],
	)),
];
