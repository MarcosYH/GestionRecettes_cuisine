import React, {useState} from "react";
import '../styles/ShowRecettes.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTrashCan,
    faPen,

}
from '@fortawesome/free-solid-svg-icons'
//import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
function ShowRecettes() {
    // State d'ajout de recette à la list
    const [recipe, setRecipe] = useState([

    ]);  //variable d'ajout de recette avec les paramères

    const [newTitle, setNewTitile] = useState(''); // Pour l'ajout du nouveau titre
    const [newIngre, setNewIngre] = useState(''); // Pour l'ajout de ingredients
    const [newEtapes, setNewEtapes] = useState(''); // Pour l'ajout d'etapes
    const [updateTitle, setUpdateTitle] = useState(''); // Pour modifier le titre d'une recettes'
    const [updateIngredients, setUpdateIngredients] = useState(''); // Pour modifier les ingredients
    const [updateEtapes, setUpdateEtapes] = useState(''); // Pour modifier les etapes


// Implémentation des fonctions
    const addRecette = (e) => {
        if(newTitle) {
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
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-xl-center ">
                    <br/><br/>
                <h1> WELCOME TO COOK 👨🏽‍🍳 </h1>
                    <br/><br/>
                    <br/>
                    <img src={img2} alt="image1" className="img-fluid float-start Img"/>
                    <h2 className=""> Recette Info</h2>
                    { updateTitle && updateTitle ? (

                        <>
                            <div className="row">
                                <div className="col">
                                    <input
                                        value={updateTitle && updateTitle.title}
                                        onChange={ (e) => changeTitle(e) }
                                        className="form-control form-control-lg input1"
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
                            {/*input addTitle*/}
                            <div className="row">
                                <div className="col">
                                    <input
                                        placeholder="Entrez le titre de votre recette"
                                        className="form-control form-control-lg input1"
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
                                        className="form-control form-control-lg input2"
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
                                className="form-control form-control-lg input2"
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
                                        className="form-control form-control-lg input3"
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
                                placeholder="Entrez les étapes de préparation"
                                className="form-control form-control-lg input3"
                                value={newEtapes}
                                onChange={ (e) =>setNewEtapes(e.target.value) } // Pour prendre la valeur du input de Etape
                            />
                        </div>
                            <br />
                        </>
                    )}
                    <div className=" col-auto ">
                        <button
                            className="btn btn-lg btn-primary "
                            onClick={addRecette}
                        >
                            Ajouter
                        </button>
                    </div>
                    <br />
                    <h2 className="mt-3 mb-5"> Liste de vos recettes de cuisine </h2>
                    { recipe && recipe.length? '' : 'Aucune recette pour l\'instant 😕' }
                        { recipe && recipe
                            .sort((a, b) => a.id > b.id ? 1 : -1)
                            .map((recette, index ) => {
                                return(
                                    <div key={recette.id} className="container card recettebg col listrecettes mb-5">
                                        <div className="card-body">
                                            <span className="Number ">{index +1}</span>
                                            <h5 className="card-title mt-3">Titre: {recette.title}
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
                                        <div className="delete">

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
