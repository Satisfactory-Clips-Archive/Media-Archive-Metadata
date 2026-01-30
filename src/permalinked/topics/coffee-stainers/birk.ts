import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Birk = [
	SchemaGenerators.withContext(CoffeeStainer('Birk Denecke', {
		jobTitle: 'Producer',
		alternateName: [
			'Captain Birk of the S.S. Chillax',
		],
		url: [
			'https://twitter.com/BirkTKirk',
		],
		image: [
			SatisfactoryWikiImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/9/9c/Captain_Birk_of_the_SS_Chillax.png',
				888,
				718,
				'image/png',
				'Captain Birk of the SS Chillax.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Screengrab from Shifting Focus to 1.0, Update 4 in Q1 (maybe) + more w/ Producer Birk',
				},
			),
		],
		subjectOf: [
			YouTubeVideo('VYyFA7-yRKc', {
				// eslint-disable-next-line @stylistic/max-len
				name: 'Shifting Focus to 1.0, Update 4 in Q1 (maybe) + more w/ Producer Birk',
				// eslint-disable-next-line @stylistic/max-len
				description: 'Bring a fresh cup of chamomile tea because this update gonna get cosy',
				uploadDate: '2020-11-12',
			}),
		],
	})),
];
