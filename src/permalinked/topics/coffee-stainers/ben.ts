import {
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(CoffeeStainer('Ben de Hullu', {
		"jobTitle": "Tech Artist",
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
	})),
];
