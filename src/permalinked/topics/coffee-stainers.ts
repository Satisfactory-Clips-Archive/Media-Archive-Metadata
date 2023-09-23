import {
	default as coffee_stain
} from '../../common/coffee-stain.js';
import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../utils.js';
import {
	SchemaGenerators,
} from '../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Coffee Stainers',
		'Satisfactory clips about past & present employees of Coffee Stain',
		['Coffee_Stain_Studios'],
		{
		about: [
			coffee_stain,
		],
		}
	)),
];
