import React from 'react';
import renderer from 'react-test-renderer';
import FilmPreview from './film-preview';

test('FilmPreview should display film info', () => {
    const filmInfo = {
        filmName: 'Lorem Ipsulum',
		filmCreationYear: 2000,
		filmGenre: ['Lorem', 'Ipsum']
    };

	const component = renderer.create(
		<FilmPreview filmName={filmInfo.filmName}  filmCreationYear={filmInfo.filmCreationYear}  filmGenre={filmInfo.filmGenre}/>,
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
