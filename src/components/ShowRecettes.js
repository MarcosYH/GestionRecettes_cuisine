import React, {useState} from "react";
import '../styles/ShowRecettes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrashCan,
    faPen,

}
from '@fortawesome/free-solid-svg-icons'
function ShowRecettes() {
    // State d'ajout de recette à la list
    const [recipe, setRecipe] = useState([
        { "id":1, "title": "Recette1", "ingredients": " L'eau, riz etc..." , "etapes": "faire cuire et manger"},

    ]);  //variable d'ajout de recette avec les paramères

    const [newRecette, setNewRecette] = useState(''); // Pour l'ajout d'une nouvelles recettes
    const [newTitle, setNewTitile] = useState(''); // Pour l'ajout du nouveau titre
    const [newIngre, setNewIngre] = useState(''); // Pour l'ajout de ingredients
    const [newEtapes, setNewEtapes] = useState(''); // Pour l'ajout d'etapes
    const [updateRecettes, setUpdateRecettes] = useState(''); // Pour modifier une recettes
    const [updateTitle, setUpdateTitle] = useState(''); // Pour modifier le titre d'une recettes'
    const [updateIngredients, setUpdateIngredients] = useState(''); // Pour modifier les ingredients
    const [updateEtapes, setUpdateEtapes] = useState(''); // Pour modifier les etapes
// Implémentation des fonctions
    const addRecette = (e) => {
        if(newTitle) {
            let num = recipe.length + 1;
            let newEntry = { "id": recipe.length + 1, "title": newTitle, "ingredients": newIngre, "etapes": newEtapes };
            setRecipe([...recipe, newEntry]);
            setNewTitile('');
            setNewIngre('');
            setNewEtapes('');
        }
    }

    const deleteRecette = (id) => {
        setRecipe(recipe.filter(recette => recette.id!== id));
    }

    const updateRecette = (id, e) => {
        e.preventDefault();
        setRecipe(recipe.map(recette => recette.id === id? { "id": id, "title": updateTitle, "ingredients": recette.ingredients, "etapes": recette.etapes } : recette));
        setUpdateTitle('');
    }
    // Changer le titre
    const changeTitle = (e) => {
        let newEntry = {
            id: updateTitle.id,
            title: e.target.value,
            ingredients: updateTitle.ingredients,
            etapes: updateTitle.etapes,
        }
        setUpdateTitle(newEntry);


    }
    // Changer les ingredients
    const changeIngredient = (e) =>{
        let newEntry = {
            id: updateIngredients.id,
            ingredients: e.target.value,
            etapes: updateIngredients.etapes,
            title : updateIngredients.title,
        }
        setUpdateIngredients(newEntry);
    }
    // changer les etapes
    const changeEtapesValue = (e) => {
        let newEntry = {
            id: updateEtapes.id,
            etapes: e.target.value,
            title : updateEtapes.title,
            ingredients : updateEtapes.ingredients,
        }
        setUpdateEtapes(newEntry);

    }
    const updateTitleValue = () => {
        let filterRecords = [...recipe].filter( recette=>recette.id !== updateTitle.id);
        let updatedObject = [...filterRecords, updateTitle];
        setRecipe(updatedObject);
        setUpdateTitle('');
    }
    const updateIngredientsValue = () => {

        let filterRecords = [...recipe].filter( recette=>recette.id!== updateIngredients.id);
        let updatedObject = [...filterRecords, updateIngredients];
        setRecipe(updatedObject);
        setUpdateIngredients('');

    }
    const updateEtapesValue = () => {
        let filterRecords = [...recipe].filter( recette=>recette.id!== updateEtapes.id);
        let updatedObject = [...filterRecords, updateEtapes];
        setRecipe(updatedObject);
        setUpdateEtapes('');

    }
    // Annuler modification
    const cancelUpdate = () => {
        setUpdateTitle('');
        setUpdateIngredients('');
        setUpdateEtapes('');
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-xl-center ">
                    <br/><br/>
                <h1> WELCOME TO COOK 👨🏽‍🍳 </h1>
                    <br/><br/>

                    { updateTitle && updateTitle ? (

                        <>
                            <div className="row">
                                <div className="col">
                                    <input
                                        value={updateTitle && updateTitle.title}
                                        onChange={ (e) => changeTitle(e) }
                                        className="form-control form-control-lg"
                                    />

                                </div>
                                <div className="col-auto">
                                    <button
                                        className="btn btn-lg btn-success mr-20"
                                        onClick={updateTitleValue}
                                    >Modifier</button>
                                    <button
                                        onClick={cancelUpdate}
                                        className="btn btn-lg btn-danger mr-20"
                                    >Annuler</button>
                                </div>
                            </div>
                            <br />
                        </>


                    ) : (
                        <>
                            {/*input addTask*/}
                            <div className="row">
                                <div className="col">
                                    <input
                                        placeholder="Entrez le titre de votre recette"
                                        className="form-control form-control-lg"
                                        value={newTitle}
                                        onChange={ (e) =>setNewTitile(e.target.value) } // Pour prendre la valeur du input
                                    />
                                </div>

                            </div>
                            <br/>
                        </>

                    )
                    }
                    { updateIngredients && updateIngredients ? (
                        <>
                            <div className="row">
                                <div className="col">
                                    <input
                                        value={updateIngredients && updateIngredients.ingredients}
                                        onChange={ (e) => changeIngredient(e) }
                                        className="form-control form-control-lg"
                                    />

                                </div>
                                <div className="col-auto">
                                    <button
                                        className="btn btn-lg btn-success mr-20"
                                        onClick={updateIngredientsValue}
                                    >Modifier</button>
                                    <button
                                        onClick={cancelUpdate}
                                        className="btn btn-lg btn-danger mr-20"
                                    >Annuler</button>
                                </div>
                            </div>
                            <br />
                        </>
                    ) : (
                        <>
                        <div className="col">
                            <input
                                placeholder="Entrez les ingrédients..."
                                className="form-control form-control-lg"
                                value={newIngre}
                                onChange={ (e) =>setNewIngre(e.target.value) } // Pour prendre la valeur du input de Ingredient
                            />
                        </div>
                            <br />
        </>
                    )
                    }

                    { updateEtapes && updateEtapes? (
                        <>
                            <div className="row">
                                <div className="col">
                                    <input

                                        value={updateEtapes && updateEtapes.etapes}
                                        onChange={ (e) => changeEtapesValue(e) }
                                        className="form-control form-control-lg"
                                    />

                                </div>
                                <div className="col-auto">
                                    <button
                                        className="btn btn-lg btn-success mr-20"
                                        onClick={updateEtapesValue}
                                    >Modifier</button>
                                    <button
                                        onClick={cancelUpdate}
                                        className="btn btn-lg btn-danger mr-20"
                                    >Annuler</button>
                                </div>
                            </div>
                            <br />
                        </>
                    ) :(
                        <>
                        <div className="col">
                            <input
                                placeholder="Entrez les etape de préparation"
                                className="form-control form-control-lg"
                                value={newEtapes}
                                onChange={ (e) =>setNewEtapes(e.target.value) } // Pour prendre la valeur du input de Etape
                            />
                        </div>
                            <br />
                        </>
                    )}
                    <div className="col-auto">
                        <button
                            className="btn btn-lg btn-primary"
                            onClick={addRecette}
                        >
                            Ajouter
                        </button>
                    </div>
                    <br />

                    { recipe && recipe.length? '' : 'Aucune recette pour l\'instant' }
                        { recipe && recipe
                            .sort((a, b) => a.id > b.id ? 1 : -1)
                            .map((recette, index ) => {
                                return(
                                    <div key={recette.id} className="card recettebg col ">
                                        <div className="card-body ">
                                            <span className="Number ">{index +1}</span>
                                            <h5 className="card-title">Titre: {recette.title}
                                                <span className="icons"
                                                    onClick={ (e ) =>
                                                        setUpdateTitle( { id: recette.id, title: recette.title, ingredients: recette.ingredients, etapes: recette.etapes  })
                                                    }
                                                    title="Modifier">
                                               <FontAwesomeIcon icon={ faPen} className="icons"/>

                                            </span>

                                            </h5>
                                            <p className="card-text">INGREDIENTS: {recette.ingredients}
                                                <span className="icons"
                                                      onClick={ (e ) =>
                                                          setUpdateIngredients( { id: recette.id, title: recette.title, ingredients: recette.ingredients, etapes: recette.etapes  })
                                                      }
                                                      title="Modifier">
                                               <FontAwesomeIcon icon={ faPen} className="icons"/>

                                            </span>
                                            </p>
                                            <p className="card-text">Etapes: {recette.etapes}
                                                <span className="icons"
                                                      onClick={ (e ) =>
                                                          setUpdateEtapes( { id: recette.id, title: recette.title, ingredients: recette.ingredients, etapes: recette.etapes  })
                                                      }
                                                      title="Modifier">
                                               <FontAwesomeIcon icon={ faPen} className="icons"/>

                                            </span>
                                            </p>
                                        </div>
                                        <div className="icons">

                                            <br/><br/>
                                            <span  onClick={ () => deleteRecette(recette.id) } title="Supprimer">
                                                <button className="btn btn-danger"> Supprimer <FontAwesomeIcon icon={faTrashCan}/> </button>
                                            </span>

                                        </div>
                                    </div>
                                    )
                        })

                        }
                </div>
            </div>
        </div>
    );
}

export default ShowRecettes;
