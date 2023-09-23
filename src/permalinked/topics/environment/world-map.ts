import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'World Map',
		'Satisfactory clips about the Satisfactory World Map',
		['Map']
	)),
];
