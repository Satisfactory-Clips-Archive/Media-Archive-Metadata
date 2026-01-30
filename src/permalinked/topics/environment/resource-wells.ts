import {
	WebPageRelatingToSatisfactoryWikiArticles,
	SatisfactoryWikiImage,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Resource_wells = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Resource Wells',
		'Satisfactory Livestream clips about Resource Wells',
		[
			'Resource_Well',
		],
		{
			relatedLink: [
				// eslint-disable-next-line @stylistic/max-len
				'https://archive.satisfactory.video/topics/features/buildings/resource-well-extractor/',
				// eslint-disable-next-line @stylistic/max-len
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
