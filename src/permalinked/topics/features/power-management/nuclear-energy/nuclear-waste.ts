import {
	WebPageAboutSatisfactory,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../../utils.ts';
import {
	Uranium_Waste,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../../common/wiki-images.ts';

import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../../SchemaTypes.ts';

const Page = [
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Nuclear Waste', {
		image: [
			Uranium_Waste,
		],
	})),
];

export default Page;
