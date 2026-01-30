import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Manta = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Giant Flying Manta',
		'Satisfactory Livestream clips about the Giant Flying Manta',
		[
			'Giant_Flying_Manta',
		],
		{
			image: [
				SatisfactoryWikiImage(
					// eslint-disable-next-line @stylistic/max-len
					'https://satisfactory.wiki.gg/images/5/54/Giant_Flying_Manta.png',
					1200,
					1200,
					'image/png',
					'Giant Flying Manta.png',
				),
			],
		},
	)),
];

export default Manta;
