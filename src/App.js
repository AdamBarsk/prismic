import React, { useState, useEffect } from 'react';
import { client as prismic } from './prismic-client';
import Prismic from 'prismic-javascript';
import './App.scss';
import { Header, Footer } from './components';
import { BlogPost } from './containers';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    prismic
      .query(Prismic.Predicates.at('document.type', 'blog_post'))
      .then(res => setData(res.results[0]));
  }, [data]);

  const componentPicker = data => {
    let component;
    switch (data.type) {
      case 'blog_post':
        component = <BlogPost data={data}></BlogPost>;
        break;
      default:
        break;
    }
    return component;
  };

  return (
    <div className="App">
      <Header></Header>
      <div className="container">{data && componentPicker(data)}</div>
      <Footer></Footer>
    </div>
  );
}

export default App;
