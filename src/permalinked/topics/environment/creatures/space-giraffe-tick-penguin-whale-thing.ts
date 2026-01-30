import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Bean = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Space Giraffe-Tick-Penguin-Whale Thing',
		// eslint-disable-next-line @stylistic/max-len
		'Satisfactory Livestream clips about the Space Giraffe-Tick-Penguin-Whale Thing',
		['Space_Giraffe-Tick-Penguin-Whale_Thing'],
		{
		alternateName: [
			'Land Whale',
			'Chonky Boy',
			'Chonky Boi',
			'Mr. Bean',
			'Space Tick',
		],
		image: [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/7/73/Space_Giraffe-Tick-Penguin-Whale_Thing.png',
				608,
				709,
				'image/png',
				'File:Space Giraffe-Tick-Penguin-Whale Thing.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					"name": "The Space Giraffe-Tick-Penguin-Whale Thing (sometimes referred to as Land Whale, chonky boy, mr. Bean, etc.) is a passive land creature found throughout the world.",
				}
			),
		]
		}
	)),
];

export default Bean;
