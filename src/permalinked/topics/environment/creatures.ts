import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Creatures = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Creatures',
		'Satisfactory Livestream clips about Creatures',
		[
			'Category:Fauna',
		],
	)),
];
