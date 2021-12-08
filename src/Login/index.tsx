import logoImgOne from "../assets/images/logoPartTwo.png";
import logoImg from "../assets/images/logo.png";

import googleLogo from "../assets/images/google.svg";
import emailLogo from "../assets/images/message.svg";
import phoneLogo from "../assets/images/phone.svg";

import facebookLogo from "../assets/images/facebook.svg";
import whatsappLogo from "../assets/images/whatsapp.svg";
import instagramLogo from "../assets/images/instagram.svg";

import "./style.scss";

export function Login() {
  return (
    <div id="login">
      <aside>
        <div className="images">
          <img src={logoImgOne} alt="Logo da Troqueiro" />
        </div>
        <div className="images">
          <img src={logoImg} alt="Logo da Troqueiro" />
        </div>
        <p>Faça o seu login e inicie suas trocas!</p>
      </aside>

      <main>
        <div className="main-content ">
          <button id="btn-google" className="buttons">
            <p className="text-button">
              <img
                className="images-button"
                src={googleLogo}
                alt="Logo do Google"
              />
              Login com o Google
            </p>
          </button>

          <button id="btn-email" className="buttons">
            <p className="text-button">
              <img
                className="images-button"
                src={emailLogo}
                alt="Ícone de Mensagem"
              />
              Login com o E-mail
            </p>
          </button>

          <button id="btn-phone" className="buttons">
            <p className="text-button">
              <img
                className="images-button"
                src={phoneLogo}
                alt="Ícone de Telefone"
              />
              Login com o Telefone
            </p>
          </button>
          <div className="separator">ou inscreva-se com</div>

          <div>
            <button className="logos-socialMedia">
              <img src={facebookLogo} alt="Logo do Facebook" />
            </button>
            <button className="logos-socialMedia">
              <img src={whatsappLogo} alt="Logo do WhatsApp" />
            </button>
            <button className="logos-socialMedia">
              <img src={instagramLogo} alt="Logo do Instagram" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
