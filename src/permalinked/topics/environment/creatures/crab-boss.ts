import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Crab Boss',
		'Satisfactory Livestream clips about the Crab Boss',
		[
			'Crab_Boss',
		],
		{
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/c/ce/Crab_Boss.png',
				1920,
				1080,
				'image/png',
				'Crab Boss.png',
				{
					name: 'The giant Crab Boss from the E3 Trailer',
					relatedLink: [
						'https://youtu.be/W_lmP8jYVLs?t=119'
					],
				}
			),
		],
		}
	)),
];
