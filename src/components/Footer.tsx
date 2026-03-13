
export default function Footer() {
  return (
    <footer
      style={{
        position: "fixed",       // fixa na tela
        bottom: 0,               // colado na parte de baixo
        left: 0,
        width: "100%",           // ocupa toda a largura
        background: "#111",
        color: "#fff",
        padding: "15px",
        textAlign: "center",
        boxShadow: "0 -2px 5px rgba(0,0,0,0.3)",
        zIndex: 1000
      }}
    >
      <p>© 2026 AGM Software - Soluções Tecnológicas</p>

      <p>
        WhatsApp:{" "}
        <a
          href="https://wa.me/55539984311234?text=Olá%20vim%20pelo%20site%20AGM%20Software"
          target="_blank"
          style={{ color: "#25D366", textDecoration: "none" }}
        >
          Fale Conosco
        </a>
      </p>

      <p>
        Instagram:{" "}
        <a
          href="https://instagram.com/alexandre_bmartins"
          target="_blank"
          style={{ color: "#E1306C", textDecoration: "none" }}
        >
          @alexandre_bmartins
        </a>
      </p>
    </footer>
  )
}
