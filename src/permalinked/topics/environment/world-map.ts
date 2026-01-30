import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const World_Map = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'World Map',
		'Satisfactory clips about the Satisfactory World Map',
		['Map']
	)),
];
