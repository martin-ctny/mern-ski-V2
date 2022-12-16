import { useState } from "react";

const FilterPost = ({ posts }) => {
  const [filter, setFilter] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    console.log(filter);
  };
  const handleSelect = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    console.log(filter);
  };

  return (
    <div>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        placeholder="rechercher"
        name=""
        id=""
      />
      ;{" "}
      <select onChange={handleSelect} name="Poids" id="">
        <option value="45">Plus de 45kg</option>
        <option value="46">Entre 45 et 65kg </option>
        <option value="66">Plus de 55kg</option>
      </select>
    </div>
  );
};

export default FilterPost;
