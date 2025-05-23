import DataBarang from "./Produk.json";
import { useState } from "react";

export default function ListBarang() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const _searchTerm = searchTerm.toLowerCase();

  
  const filteredItems = DataBarang.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(_searchTerm) ||
      item.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? item.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  
  const allTags = [...new Set(DataBarang.flatMap((item) => item.tags))];

  return (
    <div className="p-8">
      
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search item..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      
      <select
        name="selectedTag"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
        {allTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      
      
      <ul className="space-y-4">
      {filteredItems.map((item) => (
        <li key={item.id} className="border p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-red-500">
            {item.title.split(" ")[0]} <span className="text-green-600">{item.title.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-gray-700">{item.description}</p>
          <p className="text-sm text-gray-500">Brand: {item.brand}</p>
          <div className="flex items-center text-yellow-500 text-sm">
            <span>&#9733; {item.rating}</span>
          </div>
          <p className="text-red-600 font-semibold text-lg">Rp. {item.price.toLocaleString("id-ID")}</p>
          <a href="#" className="text-blue-500 underline text-sm">More info</a>
          <button className="ml-2 bg-gray-200 text-gray-700 px-3 py-1 rounded">Buy</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
