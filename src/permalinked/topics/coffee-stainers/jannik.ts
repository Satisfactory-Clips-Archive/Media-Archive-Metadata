import {
	FormerCoffeeStainer,
	SatisfactoryWikiImage,
	YouTubeVideo,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Jannik = [
	SchemaGenerators.withContext(FormerCoffeeStainer('Jannik Reuterberg', {
		'alternateName': [
			'Sleeper\'s Delight',
			'Dream Thing',
		],
		'jobTitle': 'Composer',
		"image": [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/c/c6/Sleeper%27s_Delight_Soundcloud.jpg',
				500,
				500,
				'image/jpeg',
				'Sleeper\'s Delight Soundcloud.jpg',
				{
					'name': 'Jannik Reuterberg',
				},
			),
		],
		subjectOf: [
			YouTubeVideo('Y7G72e0LLBg', {
				'name': 'Developer Highlight - Music',
				// eslint-disable-next-line @stylistic/max-len
				'description': 'Jannik Reuterberg tells us about his process as the composer for Satisfactory! Don\'t forget to check him out on Soundcloud and Spotify',
				'uploadDate': '2018-09-26',
			}),
		],
		url: [
			'https://soundcloud.com/dreamthing',
			'https://open.spotify.com/artist/6qQp5Aa4nLgLNEkpA3eUDr',
		],
	})),
];

export default Jannik;
