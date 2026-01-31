import {
	WebPageAboutSatisfactory,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Community_Highlights = [
	// eslint-disable-next-line @stylistic/max-len
	SchemaGenerators.withContext(WebPageAboutSatisfactory('Community Highlights', {
		// eslint-disable-next-line @stylistic/max-len
		description: 'Satisfactory Livestream clips about the Satisfactory Community Highlights',
		relatedLink: [
			'https://communityhighlights.satisfactory.video/',
		],
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://communityhighlights.satisfactory.video/logo-square.png',
				800,
				800,
				'image/png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Logo for the Satisfactory Community Highlights Archive.',
				},
			),
		],
	})),
];

export default Community_Highlights;
