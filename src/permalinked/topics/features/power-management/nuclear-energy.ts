import {
	SatisfactoryWikiBuildingImage,
	WebPageAboutSatisfactory,
} from '../../../../utils.ts';
import {
	Uranium_Waste,
} from '../../../../common/wiki-images.ts';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Nuclear Energy', {
		"image": [
			SatisfactoryWikiBuildingImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/4/46/Nuclear_Power_Plant.png',
				'Nuclear_Power_Plant.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					"name": "In-game building icon for the Nuclear Power Plant.",
				}
			),
			Uranium_Waste,
		],
	})),
];
