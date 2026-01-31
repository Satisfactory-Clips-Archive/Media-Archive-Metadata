import {
	SatisfactoryWikiBuildingImage,
	WebPageAboutSatisfactory,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';

import {
	Uranium_Waste,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../common/wiki-images.ts';

import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Page = [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Nuclear Energy', {
		image: [
			SatisfactoryWikiBuildingImage(
				// eslint-disable-next-line @stylistic/max-len
				'https://satisfactory.wiki.gg/images/4/46/Nuclear_Power_Plant.png',
				'Nuclear_Power_Plant.png',
				{
					name: 'In-game building icon for the Nuclear Power Plant.',
				},
			),
			Uranium_Waste,
		],
	})),
];

export default Page;
