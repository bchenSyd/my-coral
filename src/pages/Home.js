import React from "react";
import { connect } from "react-redux";
import { tileGroupsSelector } from '../redux/pageConfig';
import { refreshPage } from "../redux/refresh";
import { TileGroup } from '../components/tiles';
import  pages from './constants';


const Home = ({ refreshPage, history, tileGroups }) => {
  const onSearch = ()=>{
    history.push('/search')
  }
  return (
    <div>
      <div>
        <h2 style={{display:"inline-block"}}>Home Page</h2>
        <button onClick={onSearch}>search</button>
      </div>
      <div style={{ float: "right" }}>
        <button onClick={() => refreshPage(true)}>referesh</button>
      </div>
      <div>
        { tileGroups.map( (tg, index)=> <TileGroup key={`_index_${index}`} tileGroup={tg} /> )}
      </div>
    </div>
  );
};

export default connect( state=>({
  tileGroups: tileGroupsSelector(pages.HOME)(state)
}), {
  refreshPage
})(Home);
