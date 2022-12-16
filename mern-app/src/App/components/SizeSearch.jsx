const SizeSearch = ({ setIsSearch, posts, setSearch }) => {
  const handleChange = (e) => {
    const size = e.target.value;
    console.log(size);
    const filteredSize = posts.filter((post) => post.size == size);
    setSearch(filteredSize);
    setIsSearch(true);
  };
  return (
    <select onChange={(e) => handleChange(e)} name="Poids" id="">
      <option value="">--Tailles--</option>
      <option value="140">140</option>
      <option value="145">145</option>
      <option value="150">150</option>
      <option value="155">155</option>
      <option value="160">160</option>
      <option value="165">165</option>
      <option value="170">170</option>
      <option value="175">175</option>
      <option value="180">180</option>
      <option value="185">185</option>
      <option value="190">190</option>
      <option value="195">195</option>
      <option value="200">200</option>
    </select>
  );
};

export default SizeSearch;
