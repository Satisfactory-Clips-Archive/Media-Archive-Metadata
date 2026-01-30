import {
	satisfactory,
} from '../../../../common/satisfactory.ts';
import {
	YouTubePlaylist,
} from '../../../../utils.ts';
import {
	SchemaGenerators,
	SchemaProperties,
	Schema,
} from '../../../../SchemaTypes.ts';

declare type Update7 = SchemaProperties.VideoGame & {
	softwareVersion: string,
	subjectOf: [
		Schema.CreativeWorkSeries<any>,
		Schema.CreativeWorkSeries<any>,
		...Schema.SubjectOfSubtypes[],
	],
};
export const Update7:Update7 = Object.assign({}, satisfactory, {
	softwareVersion: 'Update 7',
	subjectOf: [
		YouTubePlaylist('PLzGEn7MzkWRvEuI1nzAGDk1Jy7Y4kXA9i', {
			name: 'Satisfactory Update 7',
			startDate: '2022-09-30',
			endDate: '2022-12-06',
		}),
		YouTubePlaylist('PLbjDnnBIxiEq99AIuldrDf7WJJpvEtkEO', {
			name: 'Satisfactory - Update 7',
			startDate: '2022-03-09',
		}),
	],
});

export default [
	SchemaGenerators.withContext(SchemaGenerators.VideoGame<Update7>(Object.assign({}, Update7))),
];
