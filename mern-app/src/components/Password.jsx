import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Password = ({ shop }) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (shop.password == password) {
      navigate(`/shops/sucess`);
    } else {
      alert("Please enter the correct password");
    }
  };

  return (
    <div>
      <h1>{shop.name}</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="entrez le mot de passe"
          name="password"
          id="password"
          onChange={(e) => handleChange(e)}
        />
        <button>accédez a la boutique</button>
      </form>
    </div>
  );
};

export default Password;
