import {
	SatisfactoryWikiImage,
	WebPageRelatingToSatisfactoryWikiArticles,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Lizard_Doggo = [
	SchemaGenerators.withContext(WebPageRelatingToSatisfactoryWikiArticles(
		'Lizard Doggo',
		'Satisfactory Livestream clips about the Lizard Doggo',
		[
			'Lizard_Doggo',
		],
		{
		alternateName: [
			'Space Rabbit',
		],
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/7/79/Lizard_Doggo.png',
				257,
				257,
				'image/png',
				'Lizard Doggo.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					"name": "Lizard Doggo, cropped from the GDC 2018 Teaser Trailer.",
				}
			),
		],
		}
	)),
];

export default Lizard_Doggo;
