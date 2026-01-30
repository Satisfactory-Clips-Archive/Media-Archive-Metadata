import {
	default as coffee_stain
// eslint-disable-next-line imports/no-internal-modules
} from '../../common/coffee-stain.ts';
import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../utils.ts';
import {
	SchemaGenerators,
} from '../../SchemaTypes.ts';

const Page = [
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

export default Page;
