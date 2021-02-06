import React from 'react';
import axios from "axios";
import { useDispatch } from 'react-redux';

import "./index.css";

import { Home, AboutUs, Blog, Portfolio, ContactUs } from "./Pages";
import { Header, Footer } from "./Components";
import { Route, Switch } from "react-router-dom";
import { setItems } from "./Redux/actions/items";

function App() {
  const dispatch = useDispatch();

  const [headerNames] = React.useState({aboutUsName: ['About', 'us'], blogName: 'Blog', 
                                        portfolioName: 'Portfolio', contactUsName: ['Contact', 'Us']});
  
  React.useEffect(()=> {
    const fetchItems = async ()=> {
      axios.get('http://localhost:3000/db.json').then(({data})=>{
        dispatch(setItems(data.BlogItems));
      });
    }

    fetchItems();
  },);

  return (
    <>
    <Header />
    <Switch>
      <Route path='/' component={Home}  exact />
      <Route path='/aboutus' render={()=> <AboutUs headerName={headerNames.aboutUsName} />} exact />

      <Route path='/blog' render={()=> <Blog headerName={headerNames.blogName}
        />} exact />

      <Route path='/portfolio' render={()=> <Portfolio headerName={headerNames.portfolioName} />} />
      
      <Route path='/contactus' render={()=> <ContactUs headerName={headerNames.contactUsName} />} exact />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
