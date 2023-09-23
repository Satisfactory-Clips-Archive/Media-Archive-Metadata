import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Plants',
		'Satisfactory Livestream clips about Plants',
		['Category:Flora'],
	)),
];
