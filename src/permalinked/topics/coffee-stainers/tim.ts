import {
	SatisfactoryWikiImage,
	FormerCoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Tim = [
	SchemaGenerators.withContext(FormerCoffeeStainer('Tim Badylak', {
		"image": [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/a/a7/Tim_Badylak.png',
				726,
				428,
				'image/png',
				'Tim_Badylak.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					"name": "Tim's only known sighting whilst working at Coffee Stain.",
				}
			),
		]
	})),
];

export default Tim;
