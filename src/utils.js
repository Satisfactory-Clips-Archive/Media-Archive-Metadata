module.exports = {
	SatisfactoryWikiImage: (
		required = {
			wikiname,
			width,
			height,
			encodingFormat,
			licensetemplate,
		},
		data
	) => {
		const {
			wikiname,
			width,
			height,
			encodingFormat,
			licensetemplate,
		} = Object.assign(
			{
				licensetemplate: 'Copyright_first-party',
			},
			required
		);

		return Object.assign({'@type': 'ImageObject'}, data, {
			encodingFormat,
			width: {
				'@type': 'QuantitativeValue',
				value: width,
			},
			height: {
				'@type': 'QuantitativeValue',
				value: height,
			},
			'usageInfo': [
				`https://satisfactory.gamepedia.com/Template:${
					licensetemplate
				}`,
				'https://www.fandom.com/licensing'
			],
			discussionUrl: `https://satisfactory.gamepedia.com/File_talk:${
				wikiname
			}`,
			url: `https://satisfactory.gamepedia.com/File:${
				wikiname
			}`
		});
	},
	YouTubePlaylist: (playlistId, data) => {
		return Object.assign({'@type': 'CreativeWorkSeries'}, data, {
			url: `https://www.youtube.com/playlist?list=${playlistId}`,
		});
	},
	YouTubeVideo: (videoId, data) => {
		return Object.assign({'@type': 'VideoObject'}, data, {
			thumbnailUrl: `http://i3.ytimg.com/vi/${videoId}/hqdefault.jpg`,
			url: `https://www.youtube.com/watch?v=${videoId}`,
			embedUrl: `https://www.youtube.com/embed/${videoId}`
		});
	},
};
