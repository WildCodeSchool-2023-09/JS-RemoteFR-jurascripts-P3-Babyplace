import { MdChevronRight } from "react-icons/md";
import { useState } from "react";
import "../../styles/dossierInscription.scss";
import HeaderDoc from "../../components/parents/HeaderDoc";

function DossierInscription() {
  const [validator, setValidator] = useState({
    justificatifRevenu: false,
    declaRevenu: false,
    caf: false,
    securiteSociale: false,
    jusDomicile: false,
    sitProfessionnelle: false,
    rib: false,
    autoPhoto: false,
    autoSortie: false,
    livretFamille: false,
    justifDivorce: false,
  });
  const [inputs, setInputs] = useState({
    justificatifRevenu: "",
    declaRevenu: "",
    caf: "",
    securiteSociale: "",
    jusDomicile: "",
    sitProfessionnelle: "",
    rib: "",
    autoPhoto: "",
    autoSortie: "",
    livretFamille: "",
    justifDivorce: "",
  });

  const handlInputsChange = (e) => {
    const { name, value } = e.target;
    setInputs((preInputs) => ({ ...preInputs, [name]: value }));
    if (value === "") {
      setValidator((chekcs) => ({ ...chekcs, [name]: false }));
    }
  };
  const handlValid = (checkName) => {
    setValidator((chekcs) => ({ ...chekcs, [checkName]: !chekcs[checkName] }));
  };

  return (
    <section className="InscriptionDoc">
      <HeaderDoc />
      <h2>Dossier d'inscription</h2>
      <div className="Inscription_doc">
        <form action="submit">
          <div>
            <label htmlFor="checkboxjustificatifRevenu">
              {" "}
              <input
                type="checkbox"
                id="checkboxjustificatifRevenu"
                name="justificatifRevenu"
                checked={
                  validator.justificatifRevenu && inputs.justificatifRevenu
                }
                disabled={!inputs}
                onChange={() => handlValid("justificatifRevenu")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="justificatifRevenu"
              name="justificatifRevenu"
              value={inputs.justificatifRevenu}
              onChange={handlInputsChange}
              placeholder="Justificatif de revenu (moins de 3 moins)"
            />
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxdeclaRevenu">
              {" "}
              <input
                type="checkbox"
                id="checkboxdeclaRevenu"
                name="declaRevenu"
                checked={validator.declaRevenu && inputs.declaRevenu}
                disabled={!inputs}
                onChange={() => handlValid("declaRevenu")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="declaRevenu"
              name="declaRevenu"
              value={inputs.declaRevenu}
              onChange={handlInputsChange}
              placeholder="Déclaration de revenu (année en cours)"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxcaf">
              {" "}
              <input
                type="checkbox"
                id="checkboxcaf"
                name="caf"
                checked={validator.caf && inputs.caf}
                disabled={!inputs}
                onChange={() => handlValid("caf")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="number"
              id="caf"
              name="caf"
              value={inputs.caf}
              onChange={handlInputsChange}
              placeholder="Numéro de la caf"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxsecuriteSociale">
              {" "}
              <input
                type="checkbox"
                id="checkboxsecuriteSociale"
                name="securiteSociale"
                checked={validator.securiteSociale && inputs.securiteSociale}
                disabled={!inputs}
                onChange={() => handlValid("securiteSociale")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="number"
              id="securiteSociale"
              name="securiteSociale"
              value={inputs.securiteSociale}
              onChange={handlInputsChange}
              placeholder="Numéro de sécurité sociale"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxjusDomicile">
              {" "}
              <input
                type="checkbox"
                id="checkboxjusDomicile"
                name="jusDomicile"
                checked={validator.jusDomicile && inputs.jusDomicile}
                disabled={!inputs}
                onChange={() => handlValid("jusDomicile")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="jusDomicile"
              name="jusDomicile"
              value={inputs.jusDomicile}
              onChange={handlInputsChange}
              placeholder="Justificdati de domicile"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxsitProfessionnelle">
              {" "}
              <input
                type="checkbox"
                id="checkboxsitProfessionnelle"
                name="sitProfessionnelle"
                checked={
                  validator.sitProfessionnelle && inputs.sitProfessionnelle
                }
                disabled={!inputs}
                onChange={() => handlValid("sitProfessionnelle")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="sitProfessionnelle"
              name="sitProfessionnelle"
              value={inputs.sitProfessionnelle}
              onChange={handlInputsChange}
              placeholder="Justificatif de situation professionnelles"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxrib">
              {" "}
              <input
                type="checkbox"
                id="checkboxrib"
                name="rib"
                checked={validator.rib && inputs.rib}
                disabled={!inputs}
                onChange={() => handlValid("rib")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="rib"
              name="rib"
              value={inputs.rib}
              onChange={handlInputsChange}
              placeholder="RIB"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxautoPhoto">
              {" "}
              <input
                type="checkbox"
                id="checkboxautoPhoto"
                name="autoPhoto"
                checked={validator.autoPhoto && inputs.autoPhoto}
                disabled={!inputs}
                onChange={() => handlValid("autoPhoto")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="autoPhoto"
              name="autoPhoto "
              value={inputs.autoPhoto}
              onChange={handlInputsChange}
              placeholder="Autorisation photo et vidéo"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxautoSortie">
              {" "}
              <input
                type="checkbox"
                id="checkboxautoSortie"
                name="autoSortie"
                checked={validator.autoSortie && inputs.autoSortie}
                disabled={!inputs}
                onChange={() => handlValid("autoSortie")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="autoSortie"
              name="autoSortie"
              value={inputs.autoSortie}
              onChange={handlInputsChange}
              placeholder="Autorisation de sortie"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxlivretFamille">
              {" "}
              <input
                type="checkbox"
                id="checkboxlivretFamille"
                name="livretFamille"
                checked={validator.livretFamille && inputs.livretFamille}
                disabled={!inputs}
                onChange={() => handlValid("livretFamille")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="livretFamille"
              name="livretFamille"
              value={inputs.livretFamille}
              onChange={handlInputsChange}
              placeholder="Copie livret de famille"
            />{" "}
            <MdChevronRight />
          </div>
          <div>
            <label htmlFor="checkboxjustifDivorce">
              {" "}
              <input
                type="checkbox"
                id="checkboxjustifDivorce"
                name="justifDivorce"
                checked={validator.justifDivorce && inputs.justifDivorce}
                disabled={!inputs}
                onChange={() => handlValid("justifDivorce")}
              />
              <svg viewBox="0 0 64 64" height="2em" width="2em">
                <path
                  d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
                  pathLength="575.0541381835938"
                  className="path"
                />
              </svg>
            </label>
            <input
              type="text"
              id="justifDivorce"
              name="justifDivorce"
              value={inputs.justifDivorce}
              onChange={handlInputsChange}
              placeholder="Copie du jugement de divorce"
            />{" "}
            <MdChevronRight />
          </div>
        </form>
        <input type="submit" value="Envoyer" className="send" />
      </div>
    </section>
  );
}

export default DossierInscription;
