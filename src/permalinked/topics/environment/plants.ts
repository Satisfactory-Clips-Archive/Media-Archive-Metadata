import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Plants = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Plants',
		'Satisfactory Livestream clips about Plants',
		['Category:Flora'],
	)),
];
