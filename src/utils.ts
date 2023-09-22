import {default as satisfactory} from './common/satisfactory.js';
import {default as coffee_stain} from './common/coffee-stain.js';

declare type mime_type = 'image/png'|'image/jpeg'|'image/webp'|'image/avif'|'image/svg+xml';

declare type ImageObjectRequired = {
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: mime_type,
};

export type SchemaObject<T extends string> = object & {
	'@context'?: 'https://schema.org',
	'@type': T,
};

export type Organization = SchemaObject<'Organization'> & {
	name: string,
	url: string,
};

declare type QuantitativeValue = {
	'@type': 'QuantitativeValue',
	value: number,
};

declare type ImageObjectReturn = SchemaObject<'ImageObject'> & {
	contentUrl: string,
	encodingFormat: mime_type,
	width: QuantitativeValue,
	height: QuantitativeValue,
};

export function ImageObject (
	required: ImageObjectRequired,
	data?: object
) : ImageObjectReturn {
	const {
		contentUrl,
		width,
		height,
		encodingFormat,
	} = required;

	const from_required:ImageObjectReturn = {
		'@type': 'ImageObject',
		contentUrl,
		encodingFormat,
		width: {
			'@type': 'QuantitativeValue',
			value: width,
		},
		height: {
			'@type': 'QuantitativeValue',
			value: height,
		},
	};

	return Object.assign({}, data, from_required);
}

declare type SatisfactoryWikiImageObjectRequired = ImageObjectRequired & {
	wikiname: string,
	licensetemplate?: string,
};

declare type SatisfactoryWikiImageObjectReturn = ImageObjectReturn & {
	url: string,
	discussionUrl: string,
};

export function SatisfactoryWikiImage (
	required : SatisfactoryWikiImageObjectRequired,
	data?: object
) : SatisfactoryWikiImageObjectReturn {
	const {
		wikiname,
		width,
		height,
		encodingFormat,
		licensetemplate,
		contentUrl,
	} = Object.assign(
		{
			licensetemplate: 'Copyright_first-party',
		},
		required
	);

	return Object.assign(
		{},
		ImageObject(
			{
				contentUrl,
				encodingFormat,
				width,
				height,
			},
			data
		),
		{
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
		}
	);
}

export function	SatisfactoryWikiBuildingImage (
	required: {
		wikiname: string,
		contentUrl: string,
	},
	data:object
) : SatisfactoryWikiImageObjectReturn {
	const {
		wikiname,
		contentUrl,
	} = required;

	return SatisfactoryWikiImage(
		{
			wikiname,
			contentUrl,
			encodingFormat: 'image/png',
			width: 512,
			height: 512,
		},
		data
	);
}

export function SatisfactoryWikiItemImage (
	required: {
		wikiname: string,
		contentUrl: string,
	},
	data: object & {name: string}
) {
	const {
		wikiname,
		contentUrl,
	} = required;

	return SatisfactoryWikiImage(
		{
			wikiname,
			contentUrl,
			encodingFormat: 'image/png',
			width: 256,
			height: 256,
		},
		data
	);
}

export type CreativeWorkSeriesData = {
	name: string,
	description?: string,
	startDate: string,
	endDate?: string,
};

export type CreativeWorkSeries = SchemaObject<'CreativeWorkSeries'> & CreativeWorkSeriesData & {
	url: string,
};

export function YouTubePlaylist (
	playlistId:string,
	data: CreativeWorkSeriesData,
) : CreativeWorkSeries {
	return Object.assign({'@type': 'CreativeWorkSeries'} as SchemaObject<'CreativeWorkSeries'>, data, {
		url: `https://www.youtube.com/playlist?list=${playlistId}`,
	});
}

declare type YouTubeData = object & {
	'@context'?: 'https://schema.org',
	name: string,
	uploadDate: string,
	description?: string,
	creditText?: string,
	image?: ImageObjectReturn[]|ImageObjectReturn,
}

declare type YouTubeVideoReturn = SchemaObject<'VideoObject'> & YouTubeData;

export function YouTubeVideo (
	videoId: string,
	data: YouTubeData,
) : YouTubeVideoReturn {
	return Object.assign({'@type': 'VideoObject'} as SchemaObject<'VideoObject'>, data, {
		thumbnailUrl: `https://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
		url: `https://www.youtube.com/watch?v=${videoId}`,
		embedUrl: `https://www.youtube.com/embed/${videoId}`
	});
}

declare type YouTubeClipReturn = SchemaObject<'Clip'> & YouTubeData;

export function YouTubeClip (
	videoId:string,
	clipId:string,
	start:number,
	finish:number,
	data: YouTubeData,
) : YouTubeClipReturn {
	return Object.assign(YouTubeVideo(videoId, data), {'@type': 'Clip'} as SchemaObject<'Clip'>, {
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
	});
}

declare type SubjectOfSubtypes = CreativeWorkSeries | YouTubeVideoReturn | YouTubeClipReturn | SocialMediaPostingReturn;

declare type SubjectOf = {
	subjectOf?: SubjectOfSubtypes[]|SubjectOfSubtypes,
};

declare type WebPageData = object & SubjectOf & {
	alternateName?: string[]|string,
	description?: string,
	relatedLink?: string[]|string,
	about?: SchemaObject<string>[],
	image?: ImageObjectReturn[]|ImageObjectReturn,
};

export function WebPage(
	name: string,
	data: WebPageData,
) {
	return Object.assign(
		{},
		data,
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			name,
		}
	);
}

export function WebPageAboutSatisfactory(
	name:string,
	data: WebPageData,
) {
	const about = [...(data.about || [])];

	data.about = [satisfactory, ...about];

	return WebPage(name, data);
}

declare type PersonData = object & SubjectOf & {
	alternateName?: string[]|string,
	description?: string,
	jobTitle?: string[]|string,
	worksFor?: Organization[]|Organization,
	url?: [string, ...string[]]|string,
	image?: ImageObjectReturn[]|ImageObjectReturn,
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

declare type SocialMediaPostingData = object & {
	headline: string,
	datePublished: string,
	image?: ImageObjectReturn[]|ImageObjectReturn,
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
