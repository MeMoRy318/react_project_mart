import {Outlet} from "react-router-dom";

import css from './moviesPageModule.css'

import {Footer, Header} from "../../componets";


const MoviePage = () => {

    return (

        <div className={'wrap'}>

            <Header/>
             <Outlet/>
            <Footer/>

        </div>
    );
};

export {MoviePage};