import {
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Page = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'World Map',
		'Satisfactory clips about the Satisfactory World Map',
		['Map']
	)),
];

export default Page;
