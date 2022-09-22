import "./App.css";

// Import React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";

// Import Pages
import {
  LandingPage,
  LogInPage,
  TrackingPage,
  ProductPage,
  APIPage,
  StoreSearchPage,
} from "./pages";

const apiEndpoint = `http://localhost:3001/graphql`;

const httpLink = createHttpLink({
  uri: "/graphql"
});

// Initialize Client Object
const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  // Authentication state...

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/tracking" element={<TrackingPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/store" element={<StoreSearchPage />} />
          <Route path="/api" element={<APIPage />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
