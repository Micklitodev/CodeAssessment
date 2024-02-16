import React from "react";

import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
import Navbar from "./components/nav";
import AdminView from "./pages/AdminView";
import TicketDetail from "./pages/TicketDetail";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/adminView' element={<AdminView />} />
            <Route path="/ticket-detail/:id" element={<TicketDetail /> } /> 
          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
