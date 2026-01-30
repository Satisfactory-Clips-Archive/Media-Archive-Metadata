import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	FormerCoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

import {
	default as JuiceVelvet,
// eslint-disable-next-line imports/no-internal-modules
} from './jace/juice-velvet.ts';

import {
	default as RoboJace,
// eslint-disable-next-line imports/no-internal-modules
} from './jace/robo-jace.ts';

const Jace = [
	SchemaGenerators.withContext(FormerCoffeeStainer('Jace Varlet', {
		"jobTitle": "Community Manager",
		"subjectOf": [
			YouTubeVideo('6HZzPbgw3pg', {
				name: 'Community Manager Introduction - Coffee Stain Studios',
				description: '',
				uploadDate: '2017-11-17',
			}),
			YouTubeVideo('PTjtfAKNC9A', {
				name: 'The ups and downs of a bipolar streamer',
				// eslint-disable-next-line @stylistic/max-len
				description: 'Content warning: This video contains discussions about mental health and suicide. Jace Varlet is a popular community manager at Coffee Stain Studios, reaching thousands each week in his streams. But once the camera is off, another reality awaits. Jace suffers from bipolar II disorder, a chronic mental illness, characterized by periods of severe depression and hypomania.',
				uploadDate: '2021-07-08',
			}),
			YouTubeVideo('v2JdPmTvQKg', {
				"name": "Game Dev Circle - Episode 1 - Jace Varlet",
				// eslint-disable-next-line @stylistic/max-len
				"description": "This is Jace Varlet, he's a community manager and colleague at Coffee Stain Studios. Follow Jace as he talks about his story leading up until this point, including his time in Japan where he started his game development career after having moved from his home country Australia.",
				"uploadDate": "2019-07-26",
			})
		],
		"image": [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/5/51/Jace.jpg',
				1080,
				809,
				'image/jpeg',
				'Jace.jpg',
				{
					"name": "our lord and savior Jace",
				}
			),
		],
		character: [
			SchemaGenerators.withoutContext(JuiceVelvet[0]),
			SchemaGenerators.withoutContext(RoboJace[0]),
		],
		"url": [
			"https://twitter.com/jembawls"
		]
	})),
];

export default Jace;
