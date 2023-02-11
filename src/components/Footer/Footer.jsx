import "./Footer.scss";
import instagram from "../../images/instagram-logo.png";
import facebook from "../../images/facebook.png";
import vk from "../../images/vk.png";

export default function Footer() {
  return (
    <div className="container">
      <div className="container_media">
        <h1>SWAP</h1>
        <img src={instagram}></img>
        <img src={facebook}></img>
        <img src={vk}></img>
      </div>
      <div className="container__info">
        <div className="container__links">
          {" "}
          <h1>Быстрые ссылки</h1>
          <p>Главная</p>
          <p>О нас </p>
          <p>Наши сервисы</p>
        </div>
        <div className="programsFoot">
          <h1>Программы</h1>
          <p>DAAD</p>
          <p>Tech girls </p>
          <p>FLEX</p>
        </div>
        <div className="community">
          <h1>Сообщества </h1>
          <p>Студенты</p>
          <p>Инструкторы </p>
          <p>Бесплатыне ресурсы</p>
        </div>
      </div>

      <div className="container__rights">
        <h1>Все права защищены</h1>
        <p>© 2023 SWAP</p>
      </div>
    </div>
  );
}
