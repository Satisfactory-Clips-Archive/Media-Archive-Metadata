import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
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
				'https://satisfactory.wiki.gg/images/9/9c/Captain_Birk_of_the_SS_Chillax.png',
				888,
				718,
				'image/png',
				'Captain Birk of the SS Chillax.png',
				{
					name: 'Screengrab from Shifting Focus to 1.0, Update 4 in Q1 (maybe) + more w/ Producer Birk',
				},
			),
		],
		subjectOf: [
			YouTubeVideo('VYyFA7-yRKc', {
				name: 'Shifting Focus to 1.0, Update 4 in Q1 (maybe) + more w/ Producer Birk',
				description: 'Bring a fresh cup of chamomile tea because this update gonna get cosy',
				uploadDate: '2020-11-12',
			}),
		],
	})),
];
