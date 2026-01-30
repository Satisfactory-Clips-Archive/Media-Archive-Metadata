import {
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Plants = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Plants',
		'Satisfactory Livestream clips about Plants',
		['Category:Flora'],
	)),
];

export default Plants;
