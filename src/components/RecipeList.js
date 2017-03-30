/**
 * Created by mukadder on 3/30/17.
 */
import  * as React from 'react'

const RecipeList = ({recipes,onSelectRecipe}) => (
    <ul className='list-unstyled'>
        { recipes.map(recipe => <li key={recipe.id}>
            <a href='#' onClick={onSelectRecipe.bind(null, recipe)}>{recipe.name}</a>
        </li>) }
    </ul>
)

RecipeList.propTypes = {
    recipes: React.PropTypes.array.isRequired

};
export default RecipeList;