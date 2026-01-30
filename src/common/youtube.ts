import {
	YouTubeVideo,
	YouTubePlaylist,
} from '../utils.ts';

export const yt_UT9iNA3WGT4 = YouTubeVideo('UT9iNA3WGT4', {
	'name': 'How Hannah, Anna, and Nathalie joined Coffee Stain',
	'description': [
		'Embracer Group made a cool video featuring',
		'3 Coffee Stainers\' journey into game dev. You can check',
		'out their Youtube channel for more stories at',
		'https://www.youtube.com/channel/UCFq1IPfyTFFeyKOnsdI40ew'
	].join(' '),
	'uploadDate': '2020-11-16',
});

export const Simon_Saga = YouTubePlaylist(
	'PLzGEn7MzkWRsyTI-94PoqpuRh9a2YcKXK',
	{
		"name": "Simon Saga",
		"startDate": "2018-10-17",
		"endDate": "2019-03-04",
	},
);

export const yt_2_dash_JM_JP8RNc = YouTubeVideo(
	'2-JM_JP8RNc',
	{
		name: 'Northern Forest rework coming in Update 5 // Before and After',
		description: [
			'The Northern Forest is getting a rework in Update 5.',
			'These changes will mostly be foliage with some',
			'very minor landscape polish that Shouldn\'t™ affect your',
			'factories too much.',
			'More information on these changes will be released next week!',
		].join(' '),
		uploadDate: '2021-07-30',
	}
);

export const yt_ST6V_dash_a4u8Qs = YouTubeVideo('ST6V-a4u8Qs', {
	name: 'Satisfactory Update 7 Patch Notes // Jace\'s Dark Secret [CC]',
	description: [
		// eslint-disable-next-line @stylistic/max-len
		'Satisfactory Update 7 is finally here! For a full list of patch notes, please go to:',
		'https://www.satisfactorygame.com/updates/update-7',
	].join(' '),
	uploadDate: '2022-12-06',
	creditText: [
		'Dennis Filatov - sound design, audio mix',
		'Mason Lindblad - editing, music seleciton, b-roll',
		'Linus Sjöholm - on set camera & sound + b-roll capture',
	].join('\n'),
});
