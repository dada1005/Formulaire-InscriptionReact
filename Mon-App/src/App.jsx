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

    const existingUser = JSON.parse(localStorage.getItem("user"));
    if (existingUser && existingUser.email === email) {
      setEmailExist(true);
      return;
    }

    if (!nom || !prenom || !email || !password) {
      setEnvoyer(true)
      return;
    }



    // if (nom && prenom && email && password) {
    //   const user = { nom, prenom, email, password };
    //   localStorage.setItem("user", JSON.stringify(user));
    //   alert(`Inscription réussie ${nom}!`);
    // }
    // setNom("");
    // setPrenom("");
    // setEmail("");
    // setPassword(""); // Réinitialiser les champs du formulaire
  };
  if (envoyer) return <p> inscription réussie {nom} !</p>

  return (
    <form style={styleBoite()} onSubmit={handleSubmit}>
      <h2 style={{ color: "white", textAlign: "center", margin: "0 0 20px" }}>Inscription !</h2>

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
      />

      {emailExist && (
        <span style={{ color: "red", fontSize: "12px" }}>
          Cet email est déjà utilisé.
        </span>
      )}

      <label htmlFor="password">Mot de passe :</label>

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
      <div style={{ position: "relative" }}>
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
        onClick={() => setEnvoyer(envoyer)}
      >
        Envoyer
      </button>
    </form >
  );
};

export default App;
