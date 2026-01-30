import {
	satisfactory,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../common/satisfactory.ts';
import {
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
	SchemaProperties,
	Schema,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

declare type Update7 = SchemaProperties.VideoGame & {
	softwareVersion: string,
	subjectOf: [
		Schema.CreativeWorkSeries<any>,
		Schema.CreativeWorkSeries<any>,
		...Schema.SubjectOfSubtypes[],
	],
};

const Update7:Update7 = Object.assign({}, satisfactory, {
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

const Update = [
	SchemaGenerators.withContext(
		SchemaGenerators.VideoGame<Update7>(Object.assign({}, Update7)),
	),
];

export {
	Update7,
};

export default Update;
