
import React from 'react'


import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail'
import CreateForm from './CreateForm'
import SearchBox from './SearchBox'
const LOCAL_STORAGE_KEY='recipes'
class App extends React.Component {

    constructor() {
        super();
        const localStorageRecipes=window.localStorage.getItem(LOCAL_STORAGE_KEY);
        this.state= {
        showCreate:true,
            recipes:localStorageRecipes ?JSON.parse(localStorageRecipes):[],
            selectedRecipe:null,
            search:''
        };
    }
    showCreate (){
        this.setState({showCreate:true})
        selectedRecipe:null
    }
    handleSelectRecipe(recipe){
       this.setState({
           selectedRecipe:recipe,
           showCreate:false
       })
    }
    handleRecipeEdited(name,ingredients,instructions){
        const {recipes,selectedRecipe}=this.state;
        const editedRecipe = Object.assign({},selectedRecipe,{
            name,
            ingredients,
            instructions
        });
        const newRecipes = recipes.map(recipe =>
        recipe===selectedRecipe ?editedRecipe:recipe);
        this.updateRecipes(newRecipes);
        this.handleSelectRecipe(editedRecipe);


    }

    handleDeleteRecipe(recipeToDelete){
        const newRecipes=this.state.recipes.filter(recipe =>recipe !=recipeToDelete);
        this.updateRecipes(newRecipes);
        this.setState({
            selectedRecipe:null
        })
    }
    handleSearchChange(search){
        this.setState({
            search
        });

    }
    updateRecipes(newRecipes){
        this.setState({
            recipes:newRecipes
        });
    }
    handleEditRecipe(){
        this.setState({
            showCreate:true
        })
    }
    handleCreateRecipe(name,ingredients,instructions){
       const newRecipes =this.state.recipes.concat({
           id:new Date().getTime(),
           name,
           ingredients,
           instructions
       });
       this.updateRecipes(newRecipes)
       window.localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(newRecipes));
    }



    render() {
        const {recipes,selectedRecipe,showCreate,search}=this.state;
        const filteredrecipes=recipes.
            filter(recipe =>recipe.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
        return (

            <div classname ='cotainer'>
                 <h1>Recipe database </h1>

      <div className ='row'>

<div className='col-xs-4'>
    <button
        type ='button'
        className='btn btn-primary'
        style ={{
            width:'100%',
            marginBottom:'5px'
        }}
        onClick ={this.showCreate.bind(this)}
        >
        Create New Recipe
    </button>
    <SearchBox onChange={this.handleSearchChange.bind(this)}/>
    

<RecipeList recipes={filteredrecipes}
onSelectRecipe={this.handleSelectRecipe.bind(this)}
/>


</div>
<div className ='cols-xs-8'>
    {this.state.showCreate ?
        <CreateForm
            onCreate={this.handleCreateRecipe.bind(this)}
        recipe={selectedRecipe}
                    onEdit ={this.handleRecipeEdited.bind(this)}
        /> :<RecipeDetail
        recipe={this.state.selectedRecipe}
        onDelete={this.handleDeleteRecipe.bind(this)}
        onEdit={this.handleEditRecipe.bind(this)}
        />}


</div>
        </div>
        </div>
        );
    }
}
export default App;