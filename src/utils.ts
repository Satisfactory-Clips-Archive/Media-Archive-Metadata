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
		}),
	);
}

function	SatisfactoryWikiBuildingImage<
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
		data,
	);
}

function SatisfactoryWikiItemImage<
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
		data,
	);
}

function YouTubePlaylist<T extends (
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
		}) as T,
	);
}

function YouTubeVideo<
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
			embedUrl: `https://www.youtube.com/embed/${videoId}`,
		}),
	);
}

function YouTubeClip<
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
		}) as T1&T2,
	);
}

function WebPageRelatingToSatisfactoryWikiArticles<
	T1 extends SchemaProperties.WebPage,
>(
	name:string,
	description: string,
	related_articles: [string, ...string[]],
	data?: T1,
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

function WebSiteAboutSatisfactory<T1 extends SchemaProperties.WebSite>(
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
		},
	));
}

function WebPageAboutSatisfactory<
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

function CoffeeStainer<
	T1 extends SchemaProperties.Person,
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

function FormerCoffeeStainer<
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

function SatisfactoryCommunityMember<
	T1 extends SchemaProperties.Person,
> (
	name: string,
	data?: T1,
) : Schema.Person<T1 & knowsAbout_satisfactory> {
	return SchemaGenerators.Person<T1 & knowsAbout_satisfactory>(
		name,
		Object.assign({}, data, {
			knowsAbout: [satisfactory].concat([...(data?.knowsAbout || [])]),
		}),
	);
}

function Tweet<
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
		}),
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
