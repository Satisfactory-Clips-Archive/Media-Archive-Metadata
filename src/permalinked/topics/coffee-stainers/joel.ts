import {
	SatisfactoryWikiImage,
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Joel Rydholm', {
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
				'https://satisfactory.wiki.gg/images/d/db/Joel_adjusting_collar.png',
				1456,
				966,
				'image/png',
				'Joel adjusting collar.png',
				{
					name: 'Joel Rydholm, adjusting his collar while wearing an orange beanie.',
				}
			),
		],
	})),
];
