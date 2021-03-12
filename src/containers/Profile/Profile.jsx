
import React, {useState,useEffect} from 'react';
import axios from 'axios';

import './Profile.css';

const Profile = () => {

    //Hooks

    const [pokemons, setPokemon] = useState({
        monsters : [],
        episodes : []
    });

    //useEffect

    useEffect(  () => {

        const fetchData = async () => {
            let dataApi = await axios.get('https://pokeapi.co/api/v2/pokemon/5/');
            
            setTimeout(()=>{
                
                setPokemon({...pokemons, monsters : dataApi.data} );

            },1500);

            
        }

        fetchData();

    },[]);

    useEffect(()=>{

        // if(pokemons.monsters?.name){
            
        //     console.log("Los datos han cambiado??", pokemons.monsters);
            


        // }
    });

    //Handlers

    //Funciones 

    if(!pokemons.monsters?.name){

        
        return(
            <div>
                <img src="img/loader.gif" className="spinner"/>
            </div>
        );
    }else {
        //Mapeamos una vez tenemos la confirmación de que los datos existen
        console.log(pokemons.monsters);
        return(<div className="cardPokemon">
            
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
            

            </div>
        );
    }

  
}

export default Profile;