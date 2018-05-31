import React from "react";
import { connect } from "react-redux";
import { pageDetailsSelector } from '../redux/pageConfig';
import { refreshPage } from "../redux/refresh";
import { containerMap } from "../containers";
import  pages from './constants';


const Home = ({ refreshPage, history, homePage }) => {
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
        <h1>content</h1>
      </div>
    </div>
  );
};

export default connect( state=>({
  homePage: pageDetailsSelector(state, pages.HOME)
}), {
  refreshPage
})(Home);
