const coffee_stain = require('../../../common/coffee-stain.js');
const {YouTubeVideo} = require('../../../utils');

module.exports = [
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
