import { useState } from "react";

const Password = ({ shop, setIsConnected }) => {
  const [password, setPassword] = useState("");
  const handleChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (shop.password == password) {
      setIsConnected(true);
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
