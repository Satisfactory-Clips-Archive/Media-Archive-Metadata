import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
} from '../../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

const Birb = [
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

export default Birb;
