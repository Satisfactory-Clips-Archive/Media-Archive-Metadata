import {
	SatisfactoryWikiImage,
	YouTubeVideo,
	FormerCoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(FormerCoffeeStainer('Oscar Jilsén', {
		// eslint-disable-next-line @stylistic/max-len
		description: 'Co-founder of Coffee Stain Studios, former Game Director of Satisfactory.',
		url: [
			'https://twitter.com/ockeffs',
		],
		image: [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/2/28/Oscar_Jils%C3%A9n_stares_at_you.png',
				822,
				778,
				'image/png',
				'Oscar Jilsén stares at you.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Oscar Jilsén, deliberately staring into camera during the filming for a Developer Highlights episode.',
				}
			),
		],
		subjectOf: [
			YouTubeVideo('vUW3pockA5Y', {
				'name': 'Developer Highlight - Game Design',
				// eslint-disable-next-line @stylistic/max-len
				'description': 'Oscar Jilsén talks about his experience with Game Design on Satisfactory.',
				'uploadDate': '2018-07-04',
			}),
		],
	})),
];
