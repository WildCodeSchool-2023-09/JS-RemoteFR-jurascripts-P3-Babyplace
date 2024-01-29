/* eslint-disable jsx-a11y/label-has-associated-control */
import axios from "axios";
import React, { useState } from "react";
import { RiLinksFill } from "react-icons/ri";
import HeaderDoc from "../../components/parents/HeaderDoc";
import "../../styles/dossierenfants.scss";

function SvgCheckbox() {
  return (
    <svg viewBox="0 0 64 64" height="2em" width="2em">
      <path
        d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16"
        pathLength="575.0541381835938"
        className="path"
      />
    </svg>
  );
}

function DossierEnfants() {
  const [inputs, setInputs] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    marcheur: "",
    allergies: "",
    assurance: "",
    vaccination: "",
    acteNaissance: "",
    medecinTraitant: "",
    aptitude: "",
    autorisation: "",
  });

  const [validator, setValidator] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    marcheur: "",
    allergies: "",
    assurance: "",
    vaccination: "",
    acteNaissance: "",
    medecinTraitant: "",
    aptitude: "",
    autorisation: "",
  });
  // const [uploadedFiles, setUploadedFiles] = useState({
  //   assurance: null,
  //   acteNaissance: null,
  //   aptitude: null,
  //   autorisation: null,
  //   vaccination: null,
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/parents/1`,
        inputs
      );
      console.info(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "dateNaissance") {
      const cleanedValue = value.replace(/[^0-9/]/g, "").slice(0, 10);
      setInputs((prevInputs) => ({ ...prevInputs, [name]: cleanedValue }));
    } else {
      setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    }
  };

  const triggerFileUpload = () => {
    document.getElementById("fileUpload").click();
  };

  // const handleFileChange = (e, documentType) => {
  //   const file = e.target.files[0];
  //   if (file && file.type === "application/pdf") {
  //     setUploadedFiles((prevFiles) => ({
  //       ...prevFiles,
  //       [documentType]: {
  //         name: file.name,
  //         url: URL.createObjectURL(file),
  //         type: file.type,
  //       },
  //     }));
  //   } else {
  //     console.error("Le fichier doit être au format PDF");
  //   }
  // };

  const handleInputBlur = (e) => {
    const { name, value } = e.target;
    setValidator((prev) => ({ ...prev, [name]: !!value }));
  };

  return (
    <section className="InscriptionDoc">
      <HeaderDoc />
      <h2>Dossier enfants</h2>
      <div className="childs">
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="checkboxNom">
              <input
                type="checkbox"
                name="nom"
                checked={validator.nom}
                readOnly
              />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Nom"
              name="nom"
              value={inputs.nom}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="input">
            <label htmlFor="checkboxPrenom">
              <input
                type="checkbox"
                name="prenom"
                checked={validator.prenom}
                readOnly
              />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Prénom"
              name="prenom"
              value={inputs.prenom}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="input">
            <label htmlFor="checkboxdateNaissance">
              <input
                type="checkbox"
                name="dateNaissance"
                checked={validator.dateNaissance}
                readOnly
              />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Date de naissance"
              name="dateNaissance"
              value={inputs.dateNaissance}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="input">
            <label htmlFor="checkboxMedecinTraitant">
              <input
                type="checkbox"
                name="medecinTraitant"
                checked={validator.medecinTraitant}
                readOnly
              />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Médecin Traitant"
              name="medecinTraitant"
              value={inputs.medecinTraitant}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="input">
            <label htmlFor="checkboxAllergies">
              <input
                type="checkbox"
                name="allergies"
                checked={validator.allergies}
                readOnly
              />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Allergies"
              name="allergies"
              value={inputs.allergies}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="input">
            <label htmlFor="checkboxMarcheur">
              <input
                type="checkbox"
                name="marcheur"
                checked={validator.marcheur}
                readOnly
              />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Marcheur"
              name="marcheur"
              value={inputs.marcheur}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          </div>

          <input
            type="file"
            id="fileUpload"
            style={{ display: "none" }}
            // onChange={handleFileChange}
          />

          <div className="input">
            <label htmlFor="checkboxAssurance">
              <input type="checkbox" name="assurance" />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Attestation d'assurance"
              readOnly
              onClick={triggerFileUpload}
            />
            <RiLinksFill />
          </div>
          <div className="input">
            <label htmlFor="checkboxVaccination">
              <input type="checkbox" name="vaccination" />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Carnet de santé / Vaccination"
              readOnly
              onClick={triggerFileUpload}
            />
            <RiLinksFill />
          </div>
          <div className="input">
            <label htmlFor="checkboxActeNaissance">
              <input type="checkbox" name="acteNaissance" />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Acte de naissance"
              readOnly
              onClick={triggerFileUpload}
            />
            <RiLinksFill />
          </div>
          <div className="input">
            <label htmlFor="checkboxActeNaissance">
              <input type="checkbox" name="acteNaissance" />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Carnet de santé / Vaccination"
              readOnly
              onClick={triggerFileUpload}
            />
            <RiLinksFill />
          </div>
          <div className="input">
            <label htmlFor="checkboxAssurance">
              <input type="checkbox" name="assurance" />
              <SvgCheckbox />
            </label>
            <input
              type="text"
              placeholder="Attestation d'assurance"
              readOnly
              onClick={triggerFileUpload}
            />
            <RiLinksFill />
          </div>
          <button type="submit" className="send">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}

export default DossierEnfants;
