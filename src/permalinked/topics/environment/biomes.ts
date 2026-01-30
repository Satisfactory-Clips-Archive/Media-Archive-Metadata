import {
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Biomes',
		// eslint-disable-next-line @stylistic/max-len
		'Satisfactory Livestream clips about the Biomes in the playable area of MASSAGE-2(A-B)b',
		[
			'Biomes',
		],
	)),
];
