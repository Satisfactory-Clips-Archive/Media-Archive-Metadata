import {
	WebPageRelatingToSatisfactoryWikiArticles,
	SatisfactoryWikiImage,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Page = [
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

export default Page;
