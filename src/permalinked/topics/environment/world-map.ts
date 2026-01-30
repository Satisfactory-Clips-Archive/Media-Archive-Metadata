import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

const Page = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'World Map',
		'Satisfactory clips about the Satisfactory World Map',
		['Map']
	)),
];

export default Page;
