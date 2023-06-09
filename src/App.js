import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import PokemonInfo from "./pages/PokemonInfo";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <section
      className="min-h-screen bg-zinc-300 text-zinc-900
        dark:bg-slate-800 dark:text-gray-100 duration-100"
    >
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/pokemon" element={<Pokemon />} />
          <Route path="/pokemon/:name" element={<PokemonInfo />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </section>
  );
}

export default App;
