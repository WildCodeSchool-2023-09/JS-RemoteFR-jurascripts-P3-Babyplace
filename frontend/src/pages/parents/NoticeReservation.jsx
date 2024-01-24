import { FcCalendar } from "react-icons/fc";
import { RiSendPlaneLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { avatar } from "../../assets/index";
import "../../styles/NoticeRervation.scss";

function NoticeReservation() {
  return (
    <section className="NoticeReservation">
      <div className="filter_box">
        <button type="button">Toutes les reservations</button>
        <button type="button">Passées</button>
        <button type="button">A venir</button>
        <button type="button">En attente</button>
      </div>
      <div className="profile_container">
        <div className="profile_box">
          <img src={avatar} alt="description" />
          <div className="descrip">
            <h3>Shakuro</h3>
            <p>Invitation</p>
          </div>
          <button type="button" className="attente">
            en attente
          </button>
          <span>Lun 17 sept </span>
          <div className="icons">
            <FcCalendar />
            <RiSendPlaneLine />
          </div>
        </div>
        <div className="profile_box">
          <img src={avatar} alt="description" />
          <div className="descrip">
            <h3>Shakuro</h3>
            <p>Invitation</p>
          </div>
          <Link to="/parents/accepte">
            <button type="button" className="accpt">
              accepté
            </button>
          </Link>
          <span>Lun 17 sept </span>
          <div className="icons">
            <FcCalendar />
            <RiSendPlaneLine />
          </div>
        </div>
        <div className="profile_box">
          <img src={avatar} alt="description" />
          <div className="descrip">
            <h3>Shakuro</h3>
            <p>Invitation</p>
          </div>
          <Link to="/parents/refuse">
            <button type="button" className="refus">
              refusé
            </button>
          </Link>
          <span>Lun 17 sept </span>
          <div className="icons">
            <FcCalendar />
            <RiSendPlaneLine />
          </div>
        </div>
      </div>
      <Link to="/parents/profile">
        <button className="retour" type="button">
          Retour{" "}
        </button>
      </Link>
    </section>
  );
}

export default NoticeReservation;
