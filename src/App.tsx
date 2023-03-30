import React from 'react';
import Megaverse from "./ components/Megaverse";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";

function App() {
  const queryClient = new QueryClient();
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <Megaverse />
      </QueryClientProvider>
    </div>
  );
}

export default App;
