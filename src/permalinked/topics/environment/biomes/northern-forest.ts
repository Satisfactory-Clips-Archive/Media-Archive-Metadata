import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	yt_2_dash_JM_JP8RNc,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../common/youtube.ts';

import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Northern_Forest = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Northern_Forest',
		// eslint-disable-next-line @stylistic/max-len
		'Satisfactory Livestream clips about the Northern Forest biome in the playable area of MASSAGE-2(A-B)b',
		[
			'Northern_Forest',
		],
		{
		subjectOf: [
			yt_2_dash_JM_JP8RNc,
		],
		image: [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/7/75/Northern_Forest_Area.png',
				808,
				858,
				'image/png',
				'Northern_Forest_Area.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Northern Forest Area from the starting location screen',
				}
			),
		]
		}
	)),
];

export default Northern_Forest;
