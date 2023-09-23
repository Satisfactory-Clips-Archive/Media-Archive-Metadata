import {default as satisfactory} from './common/satisfactory.js';
import {default as coffee_stain} from './common/coffee-stain.js';
import {
	SchemaProperties,
	Schema,
	SchemaGenerators,
} from './SchemaTypes.js';

declare type SatisfactoryWikiImageProperties = SchemaProperties.ImageObject & {
	url: string,
	discussionUrl: string,
	usageInfo: [string],
};

export function SatisfactoryWikiImage<T extends SatisfactoryWikiImageProperties> (
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

export function	SatisfactoryWikiBuildingImage<T extends SatisfactoryWikiImageProperties> (
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

export function SatisfactoryWikiItemImage<T extends SatisfactoryWikiImageProperties> (
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

export function YouTubePlaylist<T extends (SchemaProperties.CreativeWorkSeries & {
	url: string,
})> (
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
	T1 extends SchemaProperties.VideoObject,
	T2 extends  SchemaProperties.ImageObject,
> (
	videoId: string,
	data: T1 & Schema.has_image<T2>,
) : Schema.VideoObject<T1, T2> {
	return SchemaGenerators.generate<'VideoObject', T1>(
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
	T2 extends SchemaProperties.VideoObject,
	T3 extends SchemaProperties.ImageObject,
> (
	videoId:string,
	clipId:string|undefined,
	start:number,
	finish:number,
	data: T2 & Schema.has_image<T3>,
) : Schema.ClipObject<T1, T2, T3> {
	const video: Schema.VideoObject<T2, T3> = YouTubeVideo<T2, T3>(videoId, data);
	const clip_properties:T1 = {
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
	} as T1;

	return SchemaGenerators.generate<'Clip', Schema.has_image<T3> & T2 & T1>(
		'Clip',
		Object.assign({}, video, clip_properties)
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

export function WebPageAboutSatisfactory<
	T1 extends SchemaProperties.WebPage,
>(
	name: string,
	data: T1 & Schema.SubjectOf & Schema.has_image<any>,
) : Schema.WebPage<T1 & Schema.SubjectOf & Schema.has_image<any>> {
	const about = [...(data.about || [])];

	data.about = [satisfactory, ...about];

	return SchemaGenerators.WebPage<T1 & Schema.SubjectOf & Schema.has_image<any>>(name, data);
}

export function CoffeeStainer<
	T1 extends SchemaProperties.Person<any, any>
>(
	name: string,
	data: T1,
) : Schema.Person<T1, any> {
	return SchemaGenerators.Person<T1>(
		name,
		Object.assign({}, data, {
			worksFor: coffee_stain,
		}),
	);
}

export function Tweet<
	T1 extends SchemaProperties.SocialMediaPosting<any, any>,
>(from:string, id:string, data:T1): Schema.SocialMediaPosting<T1> & {
	author: Schema.Person<any, any> & {url: string},
} {
	const author = SchemaGenerators.Person<any & {url: string}>(from, {
		url: `https://twitter.com/${from}`,
	});

	return SchemaGenerators.SocialMediaPosting<T1 & {author: Schema.Person<SchemaProperties.Person<any, any> & {url: string}, any>}>(
		`https://twittter.com/${from}/status/${id}`,
		Object.assign({}, data, {
			author,
		})
	);
}
