import {default as satisfactory} from './common/satisfactory.js';
import {default as coffee_stain} from './common/coffee-stain.js';

declare type mime_type = 'image/png'|'image/jpeg'|'image/webp'|'image/avif'|'image/svg+xml';

declare type SchemaObject<T extends string> = {
	'@context'?: 'https://schema.org',
	'@type': T,
};

namespace SchemaProperties
{
	export type QuantitativeValue = SchemaObject<'QuantitativeValue'> & {
		value: number,
	};

	export type has_url = {
		url?: [string, ...string[]]|string,
	};

	export type ImageObjectOptional = has_url & {
		name?: string,
		description?: string,
		exampleOfWork?: SocialMediaPostingReturn|Schema.ImageObject<ImageObject>,
		license?: string,
		author?: PersonReturn,
		relatedLink?: [string, ...string[]],
	};

	export type ImageObject = ImageObjectOptional & {
		contentUrl: string,
		encodingFormat: mime_type,
		width: QuantitativeValue,
		height: QuantitativeValue,
	};

	export type CreativeWorkSeries = has_url & {
		name: string,
		description?: string,
		startDate: string,
		endDate?: string,
	};

	export type VideoObject = {
		name: string,
		uploadDate: string,
		description?: string,
		creditText?: string,
	};

	export type ClipObject = {
		startOffset: number,
		endOffset: number,
		url: string,
		embedUrl: string,
	};

	export type WebPage = {
		alternateName?: string[]|string,
		description?: string,
		relatedLink?: string[]|string,
		about?: SchemaObject<string>[],
	};
}

namespace Schema
{
	declare type QuantitativeValue = SchemaObject<'QuantitativeValue'> & {
		value: number,
	};

	export type ImageObject<T extends SchemaProperties.ImageObject> = SchemaObject<'ImageObject'> & T;

	export type has_image<T extends SchemaProperties.ImageObject> = {
		image?: ImageObject<T>[]|ImageObject<T>,
	};

	export type Organization = SchemaObject<'Organization'> & SchemaProperties.has_url & {
		name: string,
	};

	export type CreativeWorkSeries<T extends SchemaProperties.CreativeWorkSeries> = SchemaObject<'CreativeWorkSeries'> & T;

	export type VideoObject<
		T1 extends SchemaProperties.VideoObject,
		T2 extends SchemaProperties.ImageObject,
	> = SchemaObject<'VideoObject'> & has_image<T2> & T1;

	export type ClipObject<
		T1 extends SchemaProperties.ClipObject,
		T2 extends SchemaProperties.VideoObject,
		T3 extends SchemaProperties.ImageObject,
	> = SchemaObject<'Clip'> & has_image<T3> & T2 & T1;

	export type WebPage<
		T1 extends SchemaProperties.ImageObject
	> = SchemaObject<'WebPage'> & SubjectOf & Schema.has_image<T1> & SchemaProperties.WebPage;

	export function generate_SchemaObject<
		T1 extends string,
		T2 extends object
	>(
		type: T1,
		data: T2,
	): SchemaObject<T1> & T2 & {
		'@context': 'https://schema.org',
	} {
		return Object.assign({}, data, {
			'@context': 'https://schema.org',
			'@type': type as T1,
		}) as (SchemaObject<T1> & T2 & {
			'@context': 'https://schema.org',
		});
	}

	export function generate_QuantitativeValue(value: number): QuantitativeValue
	{
		return {
			'@type': 'QuantitativeValue',
			value,
		};
	}
}

export type Organization = SchemaObject<'Organization'> & {
	name: string,
	url: string,
};

export function ImageObject<T extends Schema.ImageObject<SchemaProperties.ImageObject>> (
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: mime_type,
	data?: SchemaProperties.ImageObjectOptional,
) : T {
	return Schema.generate_SchemaObject<'ImageObject', T>(
		'ImageObject',
		Object.assign({}, data, {
			contentUrl,
			encodingFormat,
			width: Schema.generate_QuantitativeValue(width),
			height: Schema.generate_QuantitativeValue(height),
		}) as T
	);
}

declare type SatisfactoryWikiImageProperties = SchemaProperties.ImageObject & {
	url: string,
	discussionUrl: string,
	usageInfo: [string],
};

export function SatisfactoryWikiImage<T extends SatisfactoryWikiImageProperties> (
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: mime_type,
	wikiname: string,
	data?: SchemaProperties.ImageObjectOptional,
	licensetemplate: string = 'Copyright_first-party',
) : Schema.ImageObject<T> {
	return ImageObject<Schema.ImageObject<T>>(
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
	return Schema.generate_SchemaObject<'CreativeWorkSeries', T>(
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
	return Schema.generate_SchemaObject<'VideoObject', T1>(
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

	return Schema.generate_SchemaObject<'Clip', Schema.has_image<T3> & T2 & T1>(
		'Clip',
		Object.assign({}, video, clip_properties)
	);
}

declare type SubjectOfSubtypes = Schema.CreativeWorkSeries<any> | Schema.VideoObject<any, any> | Schema.ClipObject<any, any, any> | SocialMediaPostingReturn;

declare type SubjectOf = {
	subjectOf?: SubjectOfSubtypes[]|SubjectOfSubtypes,
};

export function WebPage<
	T1 extends SchemaProperties.WebPage,
	T2 extends SchemaProperties.ImageObject,
>(
	name: string,
	data: SubjectOf & Schema.has_image<T2> & T1,
) : Schema.WebPage<T2> {
	return Schema.generate_SchemaObject<'WebPage', T1>(
		'WebPage',
		Object.assign({}, data, {
			name,
		})
	);
}

export function WebPageAboutSatisfactory<
	T1 extends SchemaProperties.WebPage,
	T2 extends SchemaProperties.ImageObject,
>(
	name: string,
	data: SubjectOf & Schema.has_image<T2> & T1,
) : Schema.WebPage<T2> {
	const about = [...(data.about || [])];

	data.about = [satisfactory, ...about];

	return WebPage(name, data);
}

declare type PersonData = SubjectOf & SchemaProperties.has_url & Schema.has_image<SchemaProperties.ImageObject> & {
	alternateName?: string[]|string,
	description?: string,
	jobTitle?: string[]|string,
	worksFor?: Organization[]|Organization,
	character?: PersonReturn[]|PersonReturn,
};

declare type PersonReturn = SchemaObject<'Person'> & PersonData;

export function Person(
	name:string,
	data: PersonData
) : PersonReturn {
	return Object.assign({}, data, {
		"@context": "https://schema.org",
		"@type": "Person",
	} as SchemaObject<'Person'>, {
		name,
	});
}

export function CoffeeStainer(
	name: string,
	data: PersonData,
) {
	return Object.assign(Person(name, data), {
		worksFor: coffee_stain,
	});
}

declare type SocialMediaPostingData = Schema.has_image<SchemaProperties.ImageObject> & {
	headline: string,
	datePublished: string,
	keywords?: [string, ...string[]],
	potentialAction?: {
		'@type': 'VoteAction',
		actionOption: [string, ...string[]],
		endTime: string,
	}[],
};

declare type SocialMediaPostingReturn = SchemaObject<'SocialMediaPosting'> & SocialMediaPostingData & {
	url: string,
	author?: PersonData,
};

export function SocialMediaPosting(url:string, data:SocialMediaPostingData): SocialMediaPostingReturn {
	return Object.assign({}, data, {
		'@context': 'https://schema.org',
		'@type': 'SocialMediaPosting',
	} as SchemaObject<'SocialMediaPosting'>, {
		url,
	});
}

export function Tweet(from:string, id:string, data:SocialMediaPostingData): SocialMediaPostingReturn {
	return Object.assign(
		SocialMediaPosting(
			`https://twittter.com/${from}/status/${id}`,
			data
		),
		{
			author: Person(from, {
				url: `https://twitter.com/${from}`,
			}),
		}
	);
}
