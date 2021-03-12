
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Button, DatePicker} from "antd";

import 'antd/lib/button/style/index.css';
import 'antd/lib/date-picker/style/index.css';
import './Profile.css';

const Profile = () => {

    //Hooks

    const [pokemons, setPokemon] = useState({
        monsters : [],
        episodes : [],
        pokemonNumber : 1
    });

    //useEffect

    useEffect(  () => {

        const fetchData = async () => {
            let dataApi = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.pokemonNumber}/`);
            
            setTimeout(()=>{
                
                setPokemon({...pokemons, monsters : dataApi.data} );

            },1500);

            
        }

        fetchData();

    },[]);

    useEffect(()=>{

        console.log(pokemons.pokemonNumber);
        
    });

    //Handlers

    //Funciones 

    const changePokemon = async (int) => {

        if(pokemons.pokemonNumber + int > 0){
            
            let updatedPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemons.pokemonNumber + int}/`);

            setPokemon({...pokemons, pokemonNumber : pokemons.pokemonNumber + int, monsters : updatedPokemon.data}); 
        }

        return;
    }

    if(!pokemons.monsters?.name){

        
        return(
            <div>
                <img src="img/spinnerCustom.gif" className="spinner"/>
            </div>
        );
    }else {
        //Mapeamos una vez tenemos la confirmación de que los datos existen
        
        return(
        
            <div className="profileContainer">

                <div className="cardPokemon">
                    <div className="logoPokemon">
                        <img className="awfulLogo" src="img/pokemon.png"/>
                    </div>
                    <div className="pokemonUp">
                        {pokemons.monsters?.name}
                    </div>
                    <div className="pokemonMiddle">
                
                        <div>
                            <img src={pokemons.monsters.sprites?.front_shiny}/>
                        </div>
                        <div>
                            <img src={pokemons.monsters.sprites?.back_default}/>
                        </div>
                    </div>
                    <div className="pokemonDown">
                        {pokemons.monsters?.abilities.map(habilidad => {
                        
                            return(
                                <div className="habilidadPokemon">
                                    {habilidad.ability?.name}
                                    </div>
                            )
                        })}
                    </div>
                   
                    <Button onClick={()=> changePokemon(-1)}>Previous</Button>
                    <Button onClick={()=> changePokemon(+1)}>Next</Button>
                    
                </div>

            </div>
        
        );
    }

  
}

export default Profile;
