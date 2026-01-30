import {
	default as coffee_stain
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../common/coffee-stain.ts';
import {
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
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
