import { useState } from "react"
import { AddCategory, GifGrid } from "../components"

export function GifExpertApp() {

  const [categories, setCategories] = useState(['Pandas', 'Gatos'])

  const addCategory = (value) => {
    if (categories.includes(value)) return
    setCategories([value, ...categories])
  }

  return (
    <>
      <h3>GifExpertApp</h3>
      <AddCategory
        onAddCategory={(value) => addCategory(value)}
      />

      {categories.map((category) => {
        return (
          <GifGrid
            category={category}
            key={category}
          />
        )
      })}

    </>
  )
}
