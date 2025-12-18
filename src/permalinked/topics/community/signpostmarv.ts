import {
    SatisfactoryCommunityMember,
} from '../../../utils.js';
import {
    SchemaGenerators,
} from '../../../SchemaTypes.js';

export const SignpostMarv = SatisfactoryCommunityMember('Marv', {
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

export default [
    SchemaGenerators.withContext(Object.assign({}, SignpostMarv)),
];
