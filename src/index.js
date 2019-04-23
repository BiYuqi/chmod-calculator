import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Calculator';
import GoogleAnaly from './utils/google';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  const googleSrc= {
    src: 'https://www.googletagmanager.com/gtag/js?id=UA-138873126-1'
  };
  const googleHtml = {
    html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-138873126-1');`
  };

  GoogleAnaly(googleSrc);
  GoogleAnaly(googleHtml);
}
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
