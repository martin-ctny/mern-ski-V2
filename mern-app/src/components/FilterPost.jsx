import { useState } from "react";

const FilterPost = ({ posts }) => {
  const [filter, setFilter] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
    console.log(filter);
  };

  return (
    <div>
      <input onChange={(e) => handleChange(e)} type="text" name="" id="" />;{" "}
    </div>
  );
};

export default FilterPost;
