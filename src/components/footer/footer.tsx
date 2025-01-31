import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        padding: "4px 0",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
        boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
      }}
    >
      <nav
        className="nav-footer-navigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "8px",
          margin: 0,
          padding: "2px 0",
        }}
      >
        <a
          href="https://www.zoho.com/contactus.html"
          style={{ textDecoration: "none", color: "#000", fontSize: "8px" }}
        >
          Fale conosco
        </a>
        <a
          href="https://www.zoho.com/security.html"
          style={{ textDecoration: "none", color: "#000", fontSize: "8px" }}
        >
          Segurança
        </a>
        <a
          href="https://www.zoho.com/terms.html"
          style={{ textDecoration: "none", color: "#000", fontSize: "8px" }}
        >
          Termos de serviço
        </a>
        <a
          href="https://www.zoho.com/privacy.html"
          style={{ textDecoration: "none", color: "#000", fontSize: "8px" }}
        >
          Política de privacidade
        </a>
      </nav>

      <nav
        className="social-footer"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "8px",
          marginTop: "6px",
        }}
      >
        <a
          href="https://www.facebook.com/zohobrasiloficial"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <FaFacebookF style={{ fontSize: "12px" }} />
        </a>
        <a
          href="https://www.instagram.com/zohobrasil"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <FaInstagram style={{ fontSize: "12px" }} />
        </a>
        <a
          href="https://www.youtube.com/ZohoBrasil"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <FaYoutube style={{ fontSize: "12px" }} />
        </a>
        <a
          href="https://twitter.com/zoho"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#000" }}
        >
          <FaTwitter style={{ fontSize: "12px" }} />
        </a>
      </nav>
      <p style={{ fontSize: "6px", color: "#000", marginTop: "4px" }}>
        &copy; 2025, Zoho Corporation Pvt. Ltd. Todos os direitos reservados.
      </p>

      <style>
        {`
          @media (max-width: 600px) {
            footer {
              padding: 2px 0;
            }

            .nav-footer-navigation a {
              font-size: 7px;
              margin-bottom: 3px;
            }

            .social-footer a {
              font-size: 10px;
            }

            p {
              font-size: 5px;
            }
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
