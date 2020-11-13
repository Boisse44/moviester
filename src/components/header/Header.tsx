import React from 'react';
import Search from '../search/Search';

export default class Header extends React.Component {
    render() {
        return (
            <div>
                <span>Moviester</span>
                <Search />
            </div>
        )
    }
}