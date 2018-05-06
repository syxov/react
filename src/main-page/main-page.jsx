import {FilmsList} from '../components/films-list/films-list';
import {Fragment} from 'react';
import {SearchHeader} from '../components/search-header/search-header';

export class MainPageComponent extends React.PureComponent {
    constructor(...args) {
        super(...args);
        this.state = {
            films: [
                {
                    id: 1,
                    title: 'Kill Bill',
                    runtime: 2003,
                    genre: 'Action',
                    posterPath: 'http://cdn.funcheap.com/wp-content/uploads/2009/10/kill-bill.jpg'
                },
                {
                    id: 2,
                    title: 'Kill Bill 2',
                    runtime: 2011,
                    genre: 'Action',
                    posterPath: 'http://2sub.tv/uploads/posts/2016-10/1476053829_kill_bill_2_2004.jpg'
                },
                {
                    id: 3,
                    title: 'Kill Bill',
                    runtime: 2003,
                    genre: 'Action',
                    posterPath: 'http://cdn.funcheap.com/wp-content/uploads/2009/10/kill-bill.jpg'
                },
                {
                    id: 4,
                    title: 'Kill Bill 2',
                    runtime: 2011,
                    genre: 'Action',
                    posterPath: 'http://2sub.tv/uploads/posts/2016-10/1476053829_kill_bill_2_2004.jpg'
                },
                {
                    id: 5,
                    title: 'Kill Bill',
                    runtime: 2003,
                    genre: 'Action',
                    posterPath: 'http://cdn.funcheap.com/wp-content/uploads/2009/10/kill-bill.jpg'
                },
                {
                    id: 6,
                    title: 'Kill Bill 2',
                    runtime: 2011,
                    genre: 'Action',
                    posterPath: 'http://2sub.tv/uploads/posts/2016-10/1476053829_kill_bill_2_2004.jpg'
                }
            ]
        };
    }

    render() {
        return (
            <Fragment>
                <SearchHeader/>
                <FilmsList films={this.state.films}/>
            </Fragment>
        );
    }
}