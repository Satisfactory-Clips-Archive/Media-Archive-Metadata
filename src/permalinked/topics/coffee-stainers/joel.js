import {
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
	}),
];
