/**
 * Created by mukadder on 3/30/17.
 */
/**
 * Created by mukadder on 3/30/17.
 */
import  * as React from 'react'

class CreateForm extends React.Component {
    constructor() {
        super()

        this.state = {
            name: '',
            ingredients: '',
            instructions: '',
            created: false
        };
    }
    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }
    setStateFromRecipe(recipe) {
        this.setState({
            name: recipe ? recipe.name : '',
            ingredients: recipe ? recipe.ingredients : '',
            instructions: recipe ? recipe.instructions : '',
        });
    }
    componentDidMount() {
        this.setStateFromRecipe(this.props.recipe);
    }
    componentWillReceiveProps(nextProps) {
        this.setStateFromRecipe(nextProps.recipe);
    }

    resetForm() {
        this.setState({
            name: '',
            ingredients: '',
            instructions: ''
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        const { name, ingredients, instructions } = this.state;

        if (this.props.recipe) {
            this.props.onEdit(name, ingredients, instructions);
        } else {
            this.props.onCreate(name, ingredients, instructions);

            this.resetForm();
            this.setState({ created: true });
            this.refs.name.focus();
        }
    }
        handleChangeIngredients(event) {
        this.setState({ ingredients: event.target.value });
    }

    handleChangeInstructions(event) {
        this.setState({ instructions: event.target.value });
    }


    render() {
        const { name, ingredients, instructions, created } = this.state;
        return(
        <form onSubmit={this.handleSubmit.bind(this)}>
            { created && <div className='alert alert-success'>Your recipe was created</div> }

            <div className='form-group'>
                <label htmlFor='name'>Recipe name:</label>
                <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Enter recipe name here'
                    value={name}
                    onChange={this.handleChangeName.bind(this)}
                    ref='name'

                />
            </div>

            <div className='form-group'>
                <label htmlFor='ingredients'>Ingredients:</label>
                <textarea
                    className='form-control'
                    rows='5'
                    id='ingredients'
                    placeholder='Enter ingredients here, one per line'
                    value={ingredients}
                    onChange={this.handleChangeIngredients.bind(this)}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='instructions'>Instructions:</label>
                <textarea
                    className='form-control'
                    rows='10'
                    id='instructions'
                    placeholder='Enter instructions here, one step per line'
                    value={instructions}
                    onChange={this.handleChangeInstructions.bind(this)}
                />
            </div>

            <input
                className='btn btn-default'
                type='submit' value={this.props.recipe ?'Edit':'Create'}

            />
        </form>)
    }

}
CreateForm.propTypes = {
    onSubmit: React.PropTypes.func.isRequired,
    recipe: React.PropTypes.object,
    onEdit: React.PropTypes.func.isRequired

};
export default CreateForm;