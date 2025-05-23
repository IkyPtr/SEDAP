import frameworkData from "./framework.json";
import { useState } from "react";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  
  const _searchTerm = searchTerm.toLowerCase();

  
  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;

    return matchesSearch && matchesTag;
  });

  
  const allTags = [...new Set(frameworkData.flatMap((framework) => framework.tags))];

  return (
    <div className="p-8">
      
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      
      <select
        name="selectedTag"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
        {allTags.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      
      {filteredFrameworks.length > 0 ? (
        filteredFrameworks.map((item) => (
          <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
            <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
            <p className="text-gray-600">
              {item.description}
              <br />
              Developer by:{" "}
              <strong className="text-gray-900">
                {item.details.developer}, {item.details.releaseYear}
              </strong>
            </p>
            <a
              href={item.details.officialWebsite}
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
            <br />
            {item.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        ))
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
}
