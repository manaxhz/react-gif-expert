import React, { useState } from 'react'

import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {


    const [categories, setcategories] = useState(['One Punch']); 

    const onAddCategory = ( newCategory ) => {
                
        if(categories.includes( newCategory)) return;

        setcategories(
            [newCategory, ...categories] 
        )

        // setcategories(
        //     cat => [...cat, 'Valorant']
        // )
    }


    return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            onNewCategory={onAddCategory}
        />


        {/* Listado de Gif */}
        {
            categories.map( category => (
                <GifGrid key={category} category={category}/>
            ))
        }

 

    
    </>
  )
}
