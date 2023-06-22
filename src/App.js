import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import Pokemon from "./pages/Pokemon";
import PokemonInfo from "./pages/PokemonInfo";
import PokemonType from "./pages/PokemonType";
import Navbar from "./components/Navbar";
import General from "./components/General";

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
          <Route exact path="/" element={<Pokemon />} />
          {/* <Route path="/pokemon" element={<Pokemon />} /> */}
          <Route path="/pokemon/:name" element={<PokemonInfo />} />
          <Route path="/type/:type" element={<PokemonType />} />
          <Route path="*" element={<General />} />
        </Routes>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </section>
  );
}

export default App;
