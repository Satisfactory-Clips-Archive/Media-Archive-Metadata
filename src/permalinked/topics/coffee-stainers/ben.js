const coffee_stain = require('../../../common/coffee-stain.js');

module.exports = [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Ben de Hullu",
		"jobTitle": "Tech Artist",
		"worksFor": coffee_stain,
		"subjectOf": [
			{
				"@type": "VideoObject",
				"name": "Dev Vlog: Tech Art & Optimisation with Ben!",
				"description": "save the frames",
				"uploadDate": "2020-11-05",
				"thumbnailUrl": "http://i3.ytimg.com/vi/omjFqZQV9fI/hqdefault.jpg",
				"url": "https://www.youtube.com/watch?v=omjFqZQV9fI",
				"embedUrl": "https://www.youtube.com/embed/omjFqZQV9fI"
			}
		],
		"url": [
			"https://twitter.com/BenHullu"
		]
	}
];
