import {
	WebPage,
	SatisfactoryWikiImage,
} from '../../../utils.js';

export default [
	WebPage('Resource Wells', {
		description: 'Satisfactory Livestream clips about Resource Wells',
		relatedLink: [
			'https://satisfactory.wiki.gg/wiki/Resource_Well',
			'https://archive.satisfactory.video/topics/features/buildings/resource-well-extractor/',
			'https://archive.satisfactory.video/topics/features/buildings/resource-well-pressurizer/',
			'https://archive.satisfactory.video/topics/features/gases/',
		],
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/d/d4/Resource_wells.jpg',
				608,
				709,
				'image/jpeg',
				'Resource wells.jpg',
				{
					"name": "Screengrab of Resource Wells concept art.",
				}
			),
		]
	}),
];
