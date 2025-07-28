function KartuProfil() {
  const profil = {
    foto: "https://picsum.photos/200",
    nama: "Muhamad Rangga Putra Arifianto",
    deskripsi: "Saya sedang latihan React JS"
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100vw",      
    height: "100vh",      
    backgroundColor: "#f8f9fa",
    margin: 0,
    padding: 0
  };

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "1px solid #ccc",
    padding: "20px",
    width: "260px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
    textAlign: "center",
    color: "black"
  };

  const imgStyle = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "10px",
    objectFit: "cover"
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <img src={profil.foto} alt="Foto Profil" style={imgStyle} />
        <h2>{profil.nama}</h2>
        <p>{profil.deskripsi}</p>
      </div>
    </div>
  );
}

export default KartuProfil;
