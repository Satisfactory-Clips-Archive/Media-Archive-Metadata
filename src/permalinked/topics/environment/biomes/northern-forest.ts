import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../../utils.ts';
import {
	yt_2_dash_JM_JP8RNc,
} from '../../../../common/youtube.ts';
import {SchemaGenerators} from '../../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Northern_Forest',
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
				'https://satisfactory.wiki.gg/images/7/75/Northern_Forest_Area.png',
				808,
				858,
				'image/png',
				'Northern_Forest_Area.png',
				{
					name: 'Northern Forest Area from the starting location screen',
				}
			),
		]
		}
	)),
];
