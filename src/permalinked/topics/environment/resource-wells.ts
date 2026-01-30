import {
	WebPageRelatingToSatisfactoryWikiArticles,
	SatisfactoryWikiImage,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Resource Wells',
		'Satisfactory Livestream clips about Resource Wells',
		[
			'Resource_Well',
		],
		{
			relatedLink: [
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
		}
	)),
];
