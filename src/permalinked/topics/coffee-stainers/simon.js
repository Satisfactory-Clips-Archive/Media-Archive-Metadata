const coffee_stain = require('../../../common/coffee-stain.js');
const { YouTubePlaylist } = require('../../../utils.js');

module.exports = [
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
