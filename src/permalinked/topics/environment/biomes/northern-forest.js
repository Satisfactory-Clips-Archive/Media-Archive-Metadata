import {
	SatisfactoryWikiImage,
	WebPage,
} from '../../../../utils.js';
import {
	yt_2_dash_JM_JP8RNc,
} from '../../../../common/youtube.js';

export default [
	WebPage('Northern_Forest', {
		description: 'Satisfactory Livestream clips about the Northern Forest biome in the playable area of MASSAGE-2(A-B)b',
		relatedLink: [
			'https://satisfactory.wiki.gg/wiki/Northern_Forest',
		],
		subjectOf: [
			yt_2_dash_JM_JP8RNc,
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Northern_Forest_Area.png',
					encodingFormat: 'image/png',
					width: 808,
					height: 858,
					contentUrl: 'https://satisfactory.wiki.gg/images/7/75/Northern_Forest_Area.png',
				},
				{
					name: 'Northern Forest Area from the starting location screen',
				}
			),
		]
	}),
];
