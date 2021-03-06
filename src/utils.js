import {default as satisfactory} from './common/satisfactory.js';
import {default as coffee_stain} from './common/coffee-stain.js';

export function ImageObject(
	required = {
		contentUrl,
		width,
		height,
		encodingFormat
	},
	data
) {
	const {
		contentUrl,
		width,
		height,
		encodingFormat,
	} = required;

	return Object.assign({}, data, {
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
	});
}

export function SatisfactoryWikiImage (
		required = {
			wikiname,
			width,
			height,
			encodingFormat,
			licensetemplate,
			contentUrl,
		},
		data
) {
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
				url: `https://satisfactory.gamepedia.com/File:${
					wikiname
				}`,
			},
			data
		),
		{
			'usageInfo': [
				`https://satisfactory.gamepedia.com/Template:${
					licensetemplate
				}`,
				'https://www.fandom.com/licensing',
			],
			discussionUrl: `https://satisfactory.gamepedia.com/File_talk:${
				wikiname
			}`,
		}
	);
};

export function	SatisfactoryWikiBuildingImage (
	required = {
		wikiname,
	},
	data
) {
	const {
		wikiname,
	} = required;

	return SatisfactoryWikiImage(
		{
			wikiname,
			encodingFormat: 'image/png',
			width: 512,
			height: 512,
		},
		data
	);
};

export function SatisfactoryWikiItemImage (
	required = {
		wikiname,
	},
	data
) {
	const {
		wikiname,
	} = required;

	return SatisfactoryWikiImage(
		{
			wikiname,
			encodingFormat: 'image/png',
			width: 256,
			height: 256,
		},
		data
	);
};

export function YouTubePlaylist (playlistId, data) {
	return Object.assign({'@type': 'CreativeWorkSeries'}, data, {
		url: `https://www.youtube.com/playlist?list=${playlistId}`,
	});
};

export function YouTubeVideo (videoId, data) {
	return Object.assign({'@type': 'VideoObject'}, data, {
		thumbnailUrl: `http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
		url: `https://www.youtube.com/watch?v=${videoId}`,
		embedUrl: `https://www.youtube.com/embed/${videoId}`
	});
};

export function WebPage(
	name,
	data
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
};

export function WebPageAboutSatisfactory(
	name,
	data
) {
	const about = [...(data.about || [])];

	data.about = [satisfactory, ...about];

	return WebPage(name, data);
}

export function Person(name, data) {
	return Object.assign({}, data, {
		"@context": "https://schema.org",
		"@type": "Person",
		name,
	});
}

export function CoffeeStainer(name, data) {
	return Object.assign(Person(name, data), {
		worksFor: coffee_stain,
	});
};

export function SocialMediaPosting(url, data) {
	return Object.assign({}, data, {
		'@context': 'https://schema.org',
		'@type': 'SocialMediaPosting',
		url,
	});
};

export function Tweet(from, id, data) {
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

export function DuplicateValue(value, across) {
	return Object.fromEntries(across.map((key => {
		return [key, value];
	})));
}
