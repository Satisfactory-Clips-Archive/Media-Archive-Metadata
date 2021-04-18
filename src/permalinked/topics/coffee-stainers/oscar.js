import {
	SatisfactoryWikiImage,
	YouTubeVideo,
	Person,
} from '../../../utils.js';

export default [
	Person('Oscar Jilsén', {
		description: 'Co-founder of Coffee Stain Studios, former Game Director of Satisfactory.',
		url: [
			'https://twitter.com/ockeffs',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Oscar Jilsén stares at you.png',
					encodingFormat: 'image/png',
					width: 822,
					height: 778,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/2/28/Oscar_Jils%C3%A9n_stares_at_you.png/revision/latest?cb=20201212114402&format=original',
				},
				{
					name: 'Oscar Jilsén, deliberately staring into camera during the filming for a Developer Highlights episode.',
				}
			),
		],
		subjectOf: [
			YouTubeVideo('vUW3pockA5Y', {
				'name': 'Developer Highlight - Game Design',
				'description': 'Oscar Jilsén talks about his experience with Game Design on Satisfactory.',
				'uploadDate': '2018-07-04',
			}),
		],
	}),
];
