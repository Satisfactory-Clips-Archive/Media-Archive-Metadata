import type {
	knowsAbout_satisfactory,
// eslint-disable-next-line imports/no-internal-modules
} from './common/satisfactory.ts';

// eslint-disable-next-line imports/no-internal-modules
import satisfactory from './common/satisfactory.ts';

// eslint-disable-next-line imports/no-internal-modules
import coffee_stain from './common/coffee-stain.ts';

import type {
	Schema,
	SchemaObject,
	SchemaProperties,
} from './SchemaTypes.ts';
import {
	SchemaGenerators,
} from './SchemaTypes.ts';

import type {
	definitely_has_url,
} from './SchemaProperties.ts';

declare type SatisfactoryWikiImageProperties = (
	& SchemaProperties.ImageObject
	& {
		url: string,
		discussionUrl: string,
		usageInfo: [string],
	}
);

function SatisfactoryWikiImage<
	T extends SatisfactoryWikiImageProperties,
>(
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: SchemaProperties.mime_type,
	wikiname: string,
	data?: (
		& Omit<T, (
			| 'url'
			| 'usageInfo'
			| 'discussionUrl'
			| 'contentUrl'
			| 'width'
			| 'height'
			| 'encodingFormat'
			| 'wikiname'
		)>
		& SchemaProperties.ImageObjectOptional
	),
	licensetemplate: string = 'Copyright_first-party',
) {
	return SchemaGenerators.ImageObject(
		contentUrl,
		width,
		height,
		encodingFormat,
		{
			...data,
			url: `https://satisfactory.wiki.gg/wiki/File:${
				wikiname
			}`,
			usageInfo: [
				`https://satisfactory.wiki.gg/wiki/Template:${
					licensetemplate
				}`,
			],
			discussionUrl: `https://satisfactory.wiki.gg/wiki/File_talk:${
				wikiname
			}`,
		},
	);
}

function SatisfactoryWikiBuildingImage<
	T extends SatisfactoryWikiImageProperties,
>(
	contentUrl: string,
	wikiname: string,
	data?: (
		& Omit<T, (
			| 'url'
			| 'usageInfo'
			| 'discussionUrl'
			| 'contentUrl'
			| 'width'
			| 'height'
			| 'encodingFormat'
			| 'wikiname'
		)>
		& SchemaProperties.ImageObjectOptional
	),
) {
	return SatisfactoryWikiImage(
		contentUrl,
		512,
		512,
		'image/png',
		wikiname,
		data,
	);
}

function SatisfactoryWikiItemImage<
	T extends SatisfactoryWikiImageProperties,
>(
	contentUrl: string,
	wikiname: string,
	data?: (
		& Omit<T, (
			| 'url'
			| 'usageInfo'
			| 'discussionUrl'
			| 'contentUrl'
			| 'width'
			| 'height'
			| 'encodingFormat'
			| 'wikiname'
		)>
		& SchemaProperties.ImageObjectOptional
	),
) {
	return SatisfactoryWikiImage<T>(
		contentUrl,
		256,
		256,
		'image/png',
		wikiname,
		data,
	);
}

function YouTubePlaylist<T extends SchemaProperties.CreativeWorkSeries>(
	playlistId: string,
	data: T,
): SchemaObject<
	'CreativeWorkSeries',
	(
		& typeof data
		& definitely_has_url
	)
> {
	return SchemaGenerators.generate<
		'CreativeWorkSeries',
		(
			& typeof data
			& definitely_has_url
		)
	>(
		'CreativeWorkSeries',
		{
			...data,
			url: `https://www.youtube.com/playlist?list=${playlistId}`,
		},
	);
}

function YouTubeVideo<
	T1 extends SchemaProperties.VideoObjectSpecifyUrlLater,
>(
	videoId: string,
	data: T1,
): Schema.VideoObject<T1 & {url: string}> {
	return SchemaGenerators.generate<'VideoObject', T1 & {url: string}>(
		'VideoObject',
		{
			...data,
			thumbnailUrl: `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
			url: `https://www.youtube.com/watch?v=${videoId}`,
			embedUrl: `https://www.youtube.com/embed/${videoId}`,
		},
	);
}

function YouTubeClip<
	T1 extends SchemaProperties.ClipObject,
	T2 extends SchemaProperties.VideoObjectSpecifyUrlLater,
>(
	videoId: string,
	clipId: string|undefined,
	start: number,
	finish: number,
	data: T2 & Omit<T1, (
		| 'startOffset'
		| 'endOffset'
		| 'embedUrl'
		| 'url'
	)>,
): Schema.ClipObject<T1 & T2> {
	const video = YouTubeVideo(videoId, data);

	return SchemaGenerators.generate(
		'Clip',
		{
			...video,
			startOffset: start,
			endOffset: finish,
			url: (
				clipId !== undefined
					? `https://www.youtube.com/clip/${clipId}`
					: `https://www.youtube.com/watch?v=${videoId}&t=${
						Math.floor(start)
					}`
			),
			embedUrl: `https://www.youtube.com/embed/${
				videoId
			}?loop=1&start=${
				Math.floor(start)
			}&end=${
				Math.ceil(finish)
			}`,
		},
	);
}

function WebPageRelatingToSatisfactoryWikiArticles<
	T1 extends SchemaProperties.WebPage,
>(
	name: string,
	description: string,
	related_articles: [string, ...string[]],
	data?: T1,
): Schema.WebPage<typeof data & {
	description: string,
	relatedLink: [string, ...string[]],
}> {
	return SchemaGenerators.WebPage<typeof data & {
		description: string,
		relatedLink: [string, ...string[]],
	}>(name, {
		...(data || ({} as T1)),
		description,
		relatedLink: related_articles.map((wiki_name) => {
			return `https://satisfactory.wiki.gg/wiki/${wiki_name}`;
		}).concat(...data?.relatedLink || []) as [string, ...string[]],
	});
}

function WebSiteAboutSatisfactory<T1 extends SchemaProperties.WebSite>(
	data: T1,
): Schema.WebSite<
	T1 & {about: [SchemaObject<'VideoGame'>, ...SchemaObject<string>[]]}
> {
	return SchemaGenerators.WebSite<(
		& T1
		& {
			about: [
				SchemaObject<'VideoGame'>,
				...SchemaObject<string>[],
			],
		}
	)>({
		...data,
		about: [
			satisfactory,
			...(data?.about || []),
		],
	});
}

function WebPageAboutSatisfactory<
	T1 extends SchemaProperties.WebPage,
>(
	name: string,
	data: (
		& T1
		& Schema.SubjectOf
		& Schema.has_image<SchemaProperties.ImageObject>
	),
): Schema.WebPage<typeof data> {
	const about = [...(data.about || [])];

	data.about = [satisfactory, ...about];

	return SchemaGenerators.WebPage<(
		& T1
		& Schema.SubjectOf
		& Schema.has_image<SchemaProperties.ImageObject>
	)>(name, data);
}

function CoffeeStainer<
	T1 extends SchemaProperties.Person,
>(
	name: string,
	data?: T1,
): Schema.Person<
	T1 & knowsAbout_satisfactory & {
		worksFor: Schema.Organization<SchemaProperties.Organization>,
	}
> {
	return SchemaGenerators.Person<T1 & knowsAbout_satisfactory & {
		worksFor: Schema.Organization<SchemaProperties.Organization>,
	}>(
		name,
		{
			...(data || ({} as T1)),
			worksFor: coffee_stain,
			knowsAbout: [
				satisfactory,
				...(data?.knowsAbout || []),
			],
		},
	);
}

function FormerCoffeeStainer<
	T1 extends SchemaProperties.Person,
>(
	name: string,
	data?: T1,
): Schema.Person<
	T1 & knowsAbout_satisfactory & {
		alumni: [
			Schema.Organization<SchemaProperties.Organization>,
			...Schema.Organization<SchemaProperties.Organization>[],
		],
	}
> {
	return SchemaGenerators.Person<T1 & knowsAbout_satisfactory & {
		alumni: [
			Schema.Organization<SchemaProperties.Organization>,
			...Schema.Organization<SchemaProperties.Organization>[],
		],
	}>(
		name,
		{
			...(data || ({} as T1)),
			knowsAbout: [
				satisfactory,
				...(data?.knowsAbout || []),
			],
			alumni: [
				coffee_stain,
				...(data?.alumni || []),
			],
		},
	);
}

function SatisfactoryCommunityMember<
	T1 extends SchemaProperties.Person,
>(
	name: string,
	data?: T1,
): Schema.Person<typeof data & knowsAbout_satisfactory> {
	return SchemaGenerators.Person<typeof data & knowsAbout_satisfactory>(
		name,
		{
			...(data || ({} as T1)),
			knowsAbout: [
				satisfactory,
				...(data?.knowsAbout || []),
			],
		},
	);
}

function Tweet<
	T1 extends SchemaProperties.SocialMediaPosting,
>(from: string, id: string, data: T1): Schema.SocialMediaPosting<T1> & {
	author: Schema.Person<SchemaProperties.Person> & {url: string},
} {
	const author = SchemaGenerators.Person<(
		& SchemaProperties.Person
		& {url: string}
	)>(from, {
		url: `https://twitter.com/${from}`,
	});

	return SchemaGenerators.SocialMediaPosting<(
		& T1
		& {
			author: Schema.Person<(
				& SchemaProperties.Person
				& {url: string}
			)>,
		}
	)>(
		`https://twittter.com/${from}/status/${id}`,
		{
			...data,
			author,
		},
	);
}

export {
	SatisfactoryWikiImage,
	SatisfactoryWikiBuildingImage,
	SatisfactoryWikiItemImage,
	YouTubePlaylist,
	YouTubeVideo,
	YouTubeClip,
	WebPageRelatingToSatisfactoryWikiArticles,
	WebSiteAboutSatisfactory,
	WebPageAboutSatisfactory,
	CoffeeStainer,
	FormerCoffeeStainer,
	SatisfactoryCommunityMember,
	Tweet,
};
