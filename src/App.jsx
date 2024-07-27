import { useState } from "react";
import Filter from "./components/filter/Filter";
import ProductList from "./components/list/ProductList";
import { getProductList } from "./utils";

function App() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const filteredProductList = getProductList(selectedFilter);

  return (
    <main>
      <div className="wrap">
        <h1 className="heading-title">Catalogue</h1>

        <Filter
          seelctedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />

        <ProductList data={filteredProductList} />
      </div>
    </main>
  );
}

export default App;
