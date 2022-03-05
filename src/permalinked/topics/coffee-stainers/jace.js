import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	CoffeeStainer,
} from '../../../utils.js';

import {
	default as JuiceVelvet,
} from './jace/juice-velvet.js';

import {
	default as RoboJace,
} from './jace/robo-jace.js';

export default [
	CoffeeStainer('Jace Varlet', {
		"jobTitle": "Community Manager",
		"subjectOf": [
			YouTubeVideo('PTjtfAKNC9A', {
				name: 'The ups and downs of a bipolar streamer',
				description: 'Content warning: This video contains discussions about mental health and suicide. Jace Varlet is a popular community manager at Coffee Stain Studios, reaching thousands each week in his streams. But once the camera is off, another reality awaits. Jace suffers from bipolar II disorder, a chronic mental illness, characterized by periods of severe depression and hypomania.',
				uploadDate: '2021-07-08',
			}),
			YouTubeVideo('v2JdPmTvQKg', {
				"name": "Game Dev Circle - Episode 1 - Jace Varlet",
				"description": "This is Jace Varlet, he's a community manager and colleague at Coffee Stain Studios. Follow Jace as he talks about his story leading up until this point, including his time in Japan where he started his game development career after having moved from his home country Australia.",
				"uploadDate": "2019-07-26",
			})
		],
		"image": [
			SatisfactoryWikiImage(
				{
					wikiname: 'Jace.jpg',
					encodingFormat: 'image/jpeg',
					width: 400,
					height: 400,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/51/Jace.jpg/revision/latest/scale-to-width-down/400?cb=20180706203523',
				},
				{
					"name": "our lord and savior Jace",
				}
			),
		],
		character: [
			JuiceVelvet[0],
			RoboJace[0],
		],
		"url": [
			"https://twitter.com/jembawls"
		]
	}),
];
