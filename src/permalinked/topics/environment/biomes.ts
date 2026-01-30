import {
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Biomes = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Biomes',
		// eslint-disable-next-line @stylistic/max-len
		'Satisfactory Livestream clips about the Biomes in the playable area of MASSAGE-2(A-B)b',
		[
			'Biomes',
		],
	)),
];

export default Biomes;
