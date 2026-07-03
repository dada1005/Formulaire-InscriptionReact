import { useState } from "react";

const styleBoite = () => ({
  display: "flex",
  flexDirection: "column",
  width: "350px",
  height: "450px",
  margin: "0 auto",
  border: "2px solid white",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "150px"
});

const App = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailExist, setEmailExist] = useState(false);
  const [estVisible, setEstVisible] = useState(false);
  const [envoyer, setEnvoyer] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailExist) {
      alert("Cet email existe déjà !");
      return;
    }

    if (!envoyer) {
      setEnvoyer(false)
      return;
    }
  
  };
  if (envoyer) return <p> inscription réussie {nom} !</p>

  return (
    <form style={styleBoite()} onSubmit={handleSubmit}>
      <h2 style={{ color: "blue", textAlign: "center", margin: "0 0 20px" }}>Inscription !</h2>

      <label htmlFor="nom">Nom :</label>
      <input
        type="text"
        placeholder="Entrez votre nom"
        onChange={(e) => setNom(e.target.value)}
        className="form-control"
        required
      />

      <label htmlFor="prenom">Prénom :</label>
      <input
        type="text"
        placeholder="Entrez votre prénom"
        onChange={(e) => setPrenom(e.target.value)}
        className="form-control"
        required
      />

      <label htmlFor="email">Email :</label>
      <input
        type="email"
        placeholder="Entrez votre email"
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
        required
        error={emailExist ? "Cet email existe déjà !" : ""}
      />


      <label htmlFor="password">Mot de passe :</label>
      <div style={{ position: "relative" }}>
        <input
          type={estVisible ? "text" : "password"}
          placeholder="******"
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
          backgroundColor: "blue",
          padding: "10px",
          marginTop: "15px",
          border: "1px solid purple",
          borderRadius: "4px"
        }}
        onClick={() => setEnvoyer(true)}
      >
        Envoyer
      </button>
    </form >
  );
};

export default App;
