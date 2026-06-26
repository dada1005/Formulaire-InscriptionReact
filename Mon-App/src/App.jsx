import { useState } from "react";
import "./assets/index.css";

const styleBoite = () => ({
  display: "flex",
  flexDirection: "column",
  width: "350px",
  height: "400px",
  margin: "0 auto",
  border: "2px solid white",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "150px",
});

const App = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailExist, setEmailExist] = useState(false);
  const [estVisible, setEstVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
      setEmailExist(true);
      return;
    }

    if (nom && prenom && email && password) {
      const user = { nom, prenom, email, password };
      localStorage.setItem("user", JSON.stringify(user));
      alert("Inscription réussie !");
    } 
    nom = "";
    prenom = "";
    email = "";
    password = ""; // Réinitialiser les champs du formulaire
  };

  return (
    <form style={styleBoite()} onSubmit={handleSubmit}>
      <h2 style={{ color: "white", textAlign: "center", margin: "0 0 20px" }}>Inscription !</h2>

      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        id="nom"
        onChange={(e) => setNom(e.target.value)}
        className="form-control"
        required
      />

      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        id="prenom"
        onChange={(e) => setPrenom(e.target.value)}
        className="form-control"
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        required
      />

      {emailExist && (
        <span style={{ color: "red", fontSize: "12px" }}>
          Cet email est déjà utilisé.
        </span>
      )}

      <label htmlFor="password">Mot de passe :</label>
      <div style={{ position: "relative" }}>
        <input
          type={estVisible ? "text" : "password"}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          required
          style={{
            paddingRight: "40px", // espace pour l’icône
          }}
        />

        <button
          onClick={() => setEstVisible(!estVisible)}
          className="form-control"
        >
          {estVisible ? "Afficher" : "Masquer"}
        </button>
      </div>
      <button
        type="submit"
        style={{
          color: "white",
          backgroundColor: "purple",
          padding: "10px",
          marginTop: "15px",
          border: "1px solid purple",
          borderRadius: "4px"
        }}
      >
        Envoyer
      </button>
    </form >
  );
};

export default App;
