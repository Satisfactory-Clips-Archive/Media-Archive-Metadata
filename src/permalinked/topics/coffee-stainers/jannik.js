import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	Person,
} from '../../../utils.js';

export default [
	Person('Jannik Reuterberg', {
		'alternateName': [
			'Sleeper\'s Delight',
			'Dream Thing',
		],
		'jobTitle': 'Composer',
		"image": [
			SatisfactoryWikiImage(
				{
					wikiname: 'Sleeper\'s Delight Soundcloud.jpg',
					encodingFormat: 'image/jpeg',
					width: 500,
					height: 500,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/c/c6/Sleeper%27s_Delight_Soundcloud.jpg/revision/latest?cb=20180819085921&format=original',
				},
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
	}),
];
