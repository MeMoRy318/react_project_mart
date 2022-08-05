import {Navigate, Route, Routes} from "react-router-dom";
import {useContext} from "react";

import './App.css';

import {MoviePage, MoviesListCardPage, MoviesListPage, NotFoundPage, PageMyPleyList} from "./containers";
import {ThemaContext} from "./context";

function App() {

    const {thema,setThema} = useContext(ThemaContext);


    return (
      <div className={`${thema}`}>

          <Routes>

              <Route path={'/'} element={<MoviePage/>}>

                  <Route index element={<Navigate to={'movieList'}/>}/>

                  <Route path={'movieList'} element={<MoviesListPage/>}/>

                  <Route path={'ganre/:id'} element={<MoviesListPage/>}/>

                  <Route path={'movieInfo/:id'} element={<MoviesListCardPage/>}/>

                  <Route path={'playList'} element={<PageMyPleyList/>}/>

                  <Route path={"*"} element={<NotFoundPage/>}/>


              </Route>

          </Routes>


      </div>

  );
}

export default App;
