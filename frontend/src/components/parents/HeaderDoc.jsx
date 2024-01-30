import { Link, useParams } from "react-router-dom";
import "../../styles/headerDoc.scss";

function HeaderDoc() {
  const { id } = useParams();
  return (
    <section className="parent_box">
      <div className="parent">
        <h1>
          <span>Papa Poule</span>
        </h1>
      </div>
      <div className="linksTo">
        <Link to={`/parents/dossierenfant/${id}`}>Enfants</Link>
        <Link to={`/parents/dossierparent/${id}`}>Parents</Link>
        <Link to={`/parents/dossierinscription/${id}`}>Inscription</Link>
      </div>
    </section>
  );
}

export default HeaderDoc;
