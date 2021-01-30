import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	CoffeeStainer,
} from '../../../utils.js';

export default [
	CoffeeStainer('Birk Denecke', {
		jobTitle: 'Producer',
		alternateName: [
			'Captain Birk of the S.S. Chillax',
		],
		url: [
			'https://twitter.com/BirkTKirk',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Captain Birk of the SS Chillax.png',
					encodingFormat: 'image/png',
					width: 888,
					height: 718,
				},
				{
					name: 'Screengrab from Shifting Focus to 1.0, Update 4 in Q1 (maybe) + more w/ Producer Birk',
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/9/9c/Captain_Birk_of_the_SS_Chillax.png/revision/latest?cb=20201211170804&format=original',
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
	}),
];
