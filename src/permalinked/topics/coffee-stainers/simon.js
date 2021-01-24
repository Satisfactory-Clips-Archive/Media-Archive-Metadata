import {default as coffee_stain} from '../../../common/coffee-stain.js';
import {YouTubePlaylist} from '../../../utils.js';

export default [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Simon Begby",
		"jobTitle": "VFX Artist",
		"worksFor": coffee_stain,
		"subjectOf": [
			YouTubePlaylist('PLzGEn7MzkWRsyTI-94PoqpuRh9a2YcKXK', {
				"name": "Simon Saga",
				"startDate": "2018-10-17",
				"endDate": "2019-03-04",
			}),
		],
		"url": [
			"https://twitter.com/SBegby"
		]
	}
];
