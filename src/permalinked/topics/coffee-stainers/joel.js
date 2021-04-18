import {
	SatisfactoryWikiImage,
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';

export default [
	CoffeeStainer('Joel Rydholm', {
		jobTitle: 'Producer',
		subjectOf: [
			YouTubeVideo('LDbnPHbnba0', {
				'name': 'Developer Highlight - Sound Design',
				'description': [
					'Joel Rydholm tells you all about making beeps and boops and stuff for Satisfactory.',
					'btw sound design is not the same as graphic design'
				].join("\n"),
				'uploadDate': '2018-09-19',
			}),
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Joel adjusting collar.png',
					encodingFormat: 'image/png',
					width: 1456,
					height: 966,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/d/db/Joel_adjusting_collar.png/revision/latest?cb=20201212125850&format=original',
				},
				{
					name: 'Joel Rydholm, adjusting his collar while wearing an orange beanie.',
				}
			),
		],
	}),
];
