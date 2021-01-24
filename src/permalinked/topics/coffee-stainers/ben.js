import {default as coffee_stain} from '../../../common/coffee-stain.js';
import {YouTubeVideo} from '../../../utils.js';

export default [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ben de Hullu",
		"jobTitle": "Tech Artist",
		"worksFor": coffee_stain,
		"subjectOf": [
			YouTubeVideo('omjFqZQV9fI', {
				"name": "Dev Vlog: Tech Art & Optimisation with Ben!",
				"description": "save the frames",
				"uploadDate": "2020-11-05",
			})
		],
		"url": [
			"https://twitter.com/BenHullu"
		]
	}
];
