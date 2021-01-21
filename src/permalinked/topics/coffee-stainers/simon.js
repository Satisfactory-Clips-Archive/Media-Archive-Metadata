const coffee_stain = require('../../../common/coffee-stain.js');

module.exports = [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Simon Begby",
		"jobTitle": "VFX Artist",
		"worksFor": coffee_stain,
		"subjectOf": [
			{
				"@type": "CreativeWorkSeries",
				"name": "Simon Saga",
				"startDate": "2018-10-17",
				"endDate": "2019-03-04",
				"url": "https://www.youtube.com/playlist?list=PLzGEn7MzkWRsyTI-94PoqpuRh9a2YcKXK"
			}
		],
		"url": [
			"https://twitter.com/SBegby"
		]
	}
];
