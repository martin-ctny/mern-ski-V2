import { useState } from "react";

const WeightSearch = ({ setIsSearch, posts, setSearch }) => {
  const [weight, setWeight] = useState();
  const handleChange = (e) => {
    const poids = e.target.value;
    setWeight(poids);
    console.log(poids);
    if (poids == 45) {
      const filteredWeight = posts.filter((post) => post.weight < poids);
      setSearch(filteredWeight);
      setIsSearch(true);
    } else if (poids == 46) {
      const filteredWeight = posts.filter(
        (post) => post.weight > poids && post.weight < 65
      );
      setSearch(filteredWeight);
      setIsSearch(true);
    } else if (poids == 66) {
      const filteredWeight = posts.filter((post) => post.weight > poids);
      setSearch(filteredWeight);
      setIsSearch(true);
    }
  };

  return (
    <select onChange={(e) => handleChange(e)} name="Poids" id="">
      <option value="">--Poids--</option>
      <option value="45">Moins de 45kg</option>
      <option value="46">Entre 45 et 65kg </option>
      <option value="66">Plus de 55kg</option>
    </select>
  );
};

export default WeightSearch;
