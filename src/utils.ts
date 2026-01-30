import type {
	knowsAbout_satisfactory,
// eslint-disable-next-line imports/no-internal-modules
} from './common/satisfactory.ts';

import {
	satisfactory,
// eslint-disable-next-line imports/no-internal-modules
} from './common/satisfactory.ts';

import {
	CSS as coffee_stain,
// eslint-disable-next-line imports/no-internal-modules
} from './common/coffee-stain.ts';

import type {
	SchemaProperties,
	Schema,
	SchemaObject,
} from './SchemaTypes.ts';
import {
	SchemaGenerators,
} from './SchemaTypes.ts';

declare type SatisfactoryWikiImageProperties = (
	& SchemaProperties.ImageObject
	& {
	url: string,
	discussionUrl: string,
	usageInfo: [string],
	}
);

export function SatisfactoryWikiImage<
	T extends SatisfactoryWikiImageProperties,
> (
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: SchemaProperties.mime_type,
	wikiname: string,
	data?: SchemaProperties.ImageObjectOptional,
	licensetemplate: string = 'Copyright_first-party',
) : Schema.ImageObject<T> {
	return SchemaGenerators.ImageObject<Schema.ImageObject<T>>(
		contentUrl,
		width,
		height,
		encodingFormat,
		Object.assign({}, data, {
			url: `https://satisfactory.wiki.gg/wiki/File:${
				wikiname
			}`,
			'usageInfo': [
				`https://satisfactory.wiki.gg/wiki/Template:${
					licensetemplate
				}`,
			],
			discussionUrl: `https://satisfactory.wiki.gg/wiki/File_talk:${
				wikiname
			}`,
		})
	);
}

export function	SatisfactoryWikiBuildingImage<
	T extends SatisfactoryWikiImageProperties,
> (
	contentUrl: string,
	wikiname: string,
	data?: SchemaProperties.ImageObjectOptional,
) : Schema.ImageObject<T> {
	return SatisfactoryWikiImage<T>(
		contentUrl,
		512,
		512,
		'image/png',
		wikiname,
		data
	);
}

export function SatisfactoryWikiItemImage<
	T extends SatisfactoryWikiImageProperties,
> (
	contentUrl: string,
	wikiname: string,
	data?: SchemaProperties.ImageObjectOptional,
) : Schema.ImageObject<T> {
	return SatisfactoryWikiImage<T>(
		contentUrl,
		256,
		256,
		'image/png',
		wikiname,
		data
	);
}

export function YouTubePlaylist<T extends (
	& SchemaProperties.CreativeWorkSeries
	& {
		url: string,
	}
)> (
	playlistId:string,
	data: SchemaProperties.CreativeWorkSeries,
) : Schema.CreativeWorkSeries<T> {
	return SchemaGenerators.generate<'CreativeWorkSeries', T>(
		'CreativeWorkSeries',
		Object.assign({}, data, {
			url: `https://www.youtube.com/playlist?list=${playlistId}`,
		}) as T
	);
}

export function YouTubeVideo<
	T1 extends SchemaProperties.VideoObjectSpecifyUrlLater,
> (
	videoId: string,
	data: T1,
) : Schema.VideoObject<T1 & {url: string}> {
	return SchemaGenerators.generate<'VideoObject', T1 & {url: string}>(
		'VideoObject',
		Object.assign({}, data, {
			thumbnailUrl: `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
			url: `https://www.youtube.com/watch?v=${videoId}`,
			embedUrl: `https://www.youtube.com/embed/${videoId}`
		})
	);
}

export function YouTubeClip<
	T1 extends SchemaProperties.ClipObject,
	T2 extends SchemaProperties.VideoObjectSpecifyUrlLater,
> (
	videoId:string,
	clipId:string|undefined,
	start:number,
	finish:number,
	data: T2,
) : Schema.ClipObject<T1> {
	const video:T2 = YouTubeVideo<T2>(videoId, data);

	return SchemaGenerators.generate<'Clip', T1>(
		'Clip',
		Object.assign(video, {
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
		}) as T1&T2
	);
}

export function WebPageRelatingToSatisfactoryWikiArticles<
	T1 extends SchemaProperties.WebPage,
>(
	name:string,
	description: string,
	related_articles: [string, ...string[]],
	data?: T1
) : Schema.WebPage<T1 & {
	description: string,
	relatedLink: [string, ...string[]],
}> {
	return SchemaGenerators.WebPage<T1 & {
		description: string,
		relatedLink: [string, ...string[]],
	}>(name, Object.assign({}, data, {
		description,
		relatedLink: related_articles.map((wiki_name) => {
			return `https://satisfactory.wiki.gg/wiki/${wiki_name}`;
		}).concat(...data?.relatedLink || []) as [string, ...string[]],
	}))
}

export function WebSiteAboutSatisfactory<T1 extends SchemaProperties.WebSite>(
	data:T1,
) : Schema.WebSite<
	T1 & {about: [SchemaObject<'VideoGame'>, ...SchemaObject<any>[]]}
>{
	return SchemaGenerators.WebSite<(
		& T1
		& {
			about: [
				SchemaObject<'VideoGame'>,
				...SchemaObject<any>[],
			],
		}
	)>(Object.assign(
		{},
		data,
		{
			about: [satisfactory].concat(...(data?.about || [])),
		}
	));
}

export function WebPageAboutSatisfactory<
	T1 extends SchemaProperties.WebPage,
>(
	name: string,
	data: T1 & Schema.SubjectOf & Schema.has_image<any>,
) : Schema.WebPage<T1 & Schema.SubjectOf & Schema.has_image<any>> {
	const about = [...(data.about || [])];

	data.about = [satisfactory, ...about];

	return SchemaGenerators.WebPage<(
		& T1
		& Schema.SubjectOf
		& Schema.has_image<any>
	)>(name, data);
}

export function CoffeeStainer<
	T1 extends SchemaProperties.Person
>(
	name: string,
	data?: T1,
) : Schema.Person<
	T1 & knowsAbout_satisfactory & {
		worksFor: Schema.Organization<any>,
	}
> {
	return SchemaGenerators.Person<T1 & knowsAbout_satisfactory & {
		worksFor: Schema.Organization<any>,
	}>(
		name,
		Object.assign({}, data, {
			worksFor: coffee_stain,
			knowsAbout: [satisfactory].concat([...(data?.knowsAbout || [])]),
		}),
	);
}

export function FormerCoffeeStainer<
	T1 extends SchemaProperties.Person,
> (
	name: string,
	data?: T1,
) : Schema.Person<
	T1 & knowsAbout_satisfactory & {
		alumni: [Schema.Organization<any>, ...Schema.Organization<any>[]],
	}
> {
	return SchemaGenerators.Person<T1 & knowsAbout_satisfactory & {
		alumni: [Schema.Organization<any>, ...Schema.Organization<any>[]],
	}>(
		name,
		Object.assign({}, data, {
			knowsAbout: [satisfactory].concat([...(data?.knowsAbout || [])]),
			alumni: [coffee_stain].concat([...data?.alumni || []]),
		}),
	);
}

export function SatisfactoryCommunityMember<
	T1 extends SchemaProperties.Person,
> (
	name: string,
	data?: T1
) : Schema.Person<T1 & knowsAbout_satisfactory> {
	return SchemaGenerators.Person<T1 & knowsAbout_satisfactory>(
		name,
		Object.assign({}, data, {
			knowsAbout: [satisfactory].concat([...(data?.knowsAbout || [])]),
		}),
	);
}

export function Tweet<
	T1 extends SchemaProperties.SocialMediaPosting,
>(from:string, id:string, data:T1): Schema.SocialMediaPosting<T1> & {
	author: Schema.Person<any> & {url: string},
} {
	const author = SchemaGenerators.Person<any & {url: string}>(from, {
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
		Object.assign({}, data, {
			author,
		})
	);
}
