const StyleSearch = ({ setIsSearch, posts, setSearch }) => {
  const handleChange = (e) => {
    const style = e.target.value;
    console.log(style);
    const filteredStyle = posts.filter(
      (post) => post.style.toLowerCase() === style.toLowerCase()
    );
    setSearch(filteredStyle);
    setIsSearch(true);
  };
  return (
    <select onChange={(e) => handleChange(e)} name="Poids" id="">
      <option value="">--Styles--</option>
      <option value="Freeride">Freeride</option>
      <option value="Freestyle">Freestyle </option>
      <option value="Piste">Piste</option>
      <option value="Polyvalant">Polyvalant</option>
    </select>
  );
};

export default StyleSearch;
