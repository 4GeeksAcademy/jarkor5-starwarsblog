import "../../styles/home.css";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { useParams } from "react-router";

export const PeopleDescription = (...props) => {

    const { store, actions } = useContext(Context);


    return (
        <div className="mt-5 mx-5 divFondoDescription">
            <div className="row">
                <div className="col-lg-4 col-sm-12 m-5">
                    <img className="img-fluid" src={`https://starwars-visualguide.com/assets/img/characters/${store.uidCharacter}.jpg `}
                        onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                        }}></img>
                </div>
                <div className="col-lg-6 col-sm-auto my-auto ms-3">
                    <h1 className="mb-5 text-warning">{!!store.idCharacter ? store.idCharacter.name : "...Loading"}</h1>
                    <p className="fs-5 me-5">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.</p>
                </div>
            </div>
            <hr className="text-warning mx-5" />
            <div className="row">
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Birth Year</label>
                    <br />
                    <label className="fs-4">{!!store.idCharacter ? store.idCharacter.birth_year : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Gender</label>
                    <br />
                    <label className="fs-4">{!!store.idCharacter ? store.idCharacter.gender : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Mass</label>
                    <br />
                    <label className="fs-4">{!!store.idCharacter ? store.idCharacter.mass : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Height</label>
                    <br />
                    <label className="fs-4">{!!store.idCharacter ? store.idCharacter.height : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Skin Color</label>
                    <br />
                    <label className="fs-4">{!!store.idCharacter ? store.idCharacter.skin_color : "...Loading"}</label>
                </div>
                <div className="col-lg-2 col-sm-auto text-center my-5">
                    <label className="fs-3 fw-bold text-warning">Eye Color</label>
                    <br />
                    <label className="fs-4">{!!store.idCharacter ? store.idCharacter.eye_color : "...Loading"}</label>
                </div>
            </div>
        </div>
    )

}
export default PeopleDescription

