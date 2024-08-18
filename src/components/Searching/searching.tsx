import { SetStateAction, useState } from "react";

export default function Searching(): JSX.Element {
  const fruits = [
    "apple",
    "banana",
    "cherry",
    "date",
    "fig",
    "grape",
    "kiwi",
    "lime",
    "mango",
    "orange",
    "pear",
    "quince",
    "raspberry",
    "strawberry",
    "tangerine",
    "watermelon",
  ];

  const [fruitsData] = useState(fruits);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearching = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const fruitDataFilter = fruitsData.filter((fruit) => {
    return fruit.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search fruits"
        onChange={handleSearching}
      />
      {fruitDataFilter.map(
        (fruit) =>
          fruit.toLowerCase().includes(searchTerm.toLowerCase()) && (
            <div key={fruit}>{fruit}</div>
          )
      )}
    </div>
  );
}
