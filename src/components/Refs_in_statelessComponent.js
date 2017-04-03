import  * as React from 'react'
const AddColorForm = ({onNewColor=f=>f}) => {
    let _title, _color
    const submit = e => {
        e.preventDefault()
        onNewColor(_title.value, _color.value)
        _title.value = ''
        _color.value = '#000000'
        _title.focus()
    }
    return (
        <form onSubmit={submit}>
            <input ref={input => _title = input}
                   type="text" 
                   placeholder="color title..." required/>
            <input ref={input => _color = input}
                   type="color" required/>
            <button>ADD</button>
        </form>
    )
}
/*
Refs in Stateless Functional Components
Refs can also be used in stateless functional components. These components do not have this, so it’s not possible to use this.refs. Instead of using string attributes, we will set refs using functions. This function will pass us the input instance as an argument. We can capture that instance and save it to a local variable.

Let’s refactor the Add*/