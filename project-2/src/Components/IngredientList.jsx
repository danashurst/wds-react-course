import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ingredients}) => {
    const ingridientElements = ingredients.map( ingriedient => {
        return <Ingredient key={ingriedient.id} {...ingriedient} />
    });

    return (
        <div>
            {ingridientElements}
        </div>
    )
}

export default IngredientList;