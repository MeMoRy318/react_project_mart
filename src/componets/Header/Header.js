import {Link} from "react-router-dom";

import {GenreBadge} from "../genreBadge/GenreBadge";
import {MovieSlayder} from "../movieSlayder/MovieSlayder";
import {SwitchToggle} from "../switchToggle/SwitchToggle";

import ccs from './headerwrap.css'
import {HeaderAudi} from "../movieInfo/headerAudi/HeaderAudi";

const Header = () => {
    return (

        <div>
            <div className={'zzz'}>

                <Link to={'/playList'}>
                    <button className={'trailer'}>Play List</button>
                </Link>
                <HeaderAudi/>
                <SwitchToggle/>

            </div>

            <div className={'header_wrap'}>
                <MovieSlayder/>
                <GenreBadge/>

            </div>
        </div>

    );
};

export {Header};