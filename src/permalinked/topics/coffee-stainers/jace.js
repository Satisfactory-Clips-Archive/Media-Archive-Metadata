import {
	YouTubeVideo,
	SatisfactoryWikiImage,
	CoffeeStainer,
} from '../../../utils.js';

export default [
	CoffeeStainer('Jace Varlet', {
		"jobTitle": "Community Manager",
		"subjectOf": [
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
				},
				{
					"name": "our lord and savior Jace",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/5/51/Jace.jpg/revision/latest/scale-to-width-down/400?cb=20180706203523",
				}
			),
		],
		"url": [
			"https://twitter.com/jembawls"
		]
	}),
];
