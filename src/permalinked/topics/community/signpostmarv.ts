import {
	SatisfactoryCommunityMember,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const SignpostMarv = SatisfactoryCommunityMember('Marv', {
	alternateName: ['SignpostMarv'],
	honorificPrefix: 'Signpost',
	url: [
		'https://signpostmarv.name/',
		'https://bsky.app/profile/signpostmarv.name',

		// I rarely use twitter any more
		'https://twitter.com/SignpostMarv',
		'https://mastodon.social/@SignpostMarv',
		'https://steamcommunity.com/id/SignpostMarv/',
		'https://github.com/SignpostMarv/',
		'https://github.com/Satisfactory-Clips-Archive/',
	],
});

const Page = [
	SchemaGenerators.withContext({...SignpostMarv}),
];

export {
	SignpostMarv,
};

export default Page;
