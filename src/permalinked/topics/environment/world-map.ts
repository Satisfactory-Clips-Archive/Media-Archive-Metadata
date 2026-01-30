import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'World Map',
		'Satisfactory clips about the Satisfactory World Map',
		['Map']
	)),
];
