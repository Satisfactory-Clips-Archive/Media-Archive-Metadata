import {
	WebPage,
	SatisfactoryWikiImage,
} from '../../../utils.js';

export default [
	WebPage('Resource Wells', {
		description: 'Satisfactory Livestream clips about Resource Wells',
		relatedLink: [
			'https://satisfactory.gamepedia.com/Future_content#Resource_wells',
			'https://archive.satisfactory.video/topics/features/buildings/resource-well-extractor/',
			'https://archive.satisfactory.video/topics/features/buildings/resource-well-pressurizer/',
			'https://archive.satisfactory.video/topics/features/gases/',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Resource wells.jpg',
					encodingFormat: 'image/jpeg',
					width: 608,
					height: 709,
				},
				{
					"name": "Screengrab of Resource Wells concept art.",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/d/d4/Resource_wells.jpg/revision/latest?cb=20210125115611&format=original",
				}
			),
		]
	}),
];
