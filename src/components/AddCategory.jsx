import { useState } from "react"

export function AddCategory({onAddCategory}) {
    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target:{value}}) => {
        setInputValue(value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        const newValue = inputValue.trim()
        if(newValue.length <= 1) return

        onAddCategory(newValue)
        setInputValue('')
    }

  return (
    <form onSubmit={onSubmit}>
        <input
            type="text"
            placeholder="Buscar"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}
