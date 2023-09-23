import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Giant Flying Manta',
		'Satisfactory Livestream clips about the Giant Flying Manta',
		[
			'Giant_Flying_Manta',
		],
		{
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/5/54/Giant_Flying_Manta.png',
				1200,
				1200,
				'image/png',
				'Giant Flying Manta.png',
			),
		],
		}
	)),
];
