import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Root from './root';
import 'antd/dist/antd.min.css'
import "react-alice-carousel/lib/alice-carousel.css";
import { Context } from './context';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
      <Context>
        <Root/>
      </Context>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

