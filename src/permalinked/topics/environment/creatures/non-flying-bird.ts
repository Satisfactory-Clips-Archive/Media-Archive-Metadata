import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Non Flying Bird',
		'Satisfactory Livestream clips about the Non Flying Bird',
		['Non_Flying_Bird'],
		{
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/4/45/Non_Flying_Bird.png',
				1200,
				1200,
				'image/png',
				'Non Flying Bird.png',
			),
		],
		}
	)),
];
