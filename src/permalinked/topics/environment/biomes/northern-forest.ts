import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../../utils.ts';
import {
	yt_2_dash_JM_JP8RNc,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../../common/youtube.ts';
import {SchemaGenerators} from '../../../../SchemaTypes.ts';

export const Northern_Forest = [
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
