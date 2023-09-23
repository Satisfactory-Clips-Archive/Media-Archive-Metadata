import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	FormerCoffeeStainer
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(FormerCoffeeStainer('Jannik Reuterberg', {
		'alternateName': [
			'Sleeper\'s Delight',
			'Dream Thing',
		],
		'jobTitle': 'Composer',
		"image": [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/c/c6/Sleeper%27s_Delight_Soundcloud.jpg',
				500,
				500,
				'image/jpeg',
				'Sleeper\'s Delight Soundcloud.jpg',
				{
					'name': 'Jannik Reuterberg',
				}
			),
		],
		subjectOf: [
			YouTubeVideo('Y7G72e0LLBg', {
				'name': 'Developer Highlight - Music',
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
