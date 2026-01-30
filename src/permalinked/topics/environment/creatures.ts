import {
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Creatures = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Creatures',
		'Satisfactory Livestream clips about Creatures',
		[
			'Category:Fauna',
		],
	)),
];

export default Creatures;
