import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Pruebas en <GifItem/>', () => {
    const TITLE = "Saitama"
    const URL = 'https://one-punch.com/saitama.jpg'

    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GifItem title={TITLE} url={URL}/>)
        expect(container).toMatchSnapshot();
        
     })

     test('Debe mostrar la imagen con el URL y el ALT indicado', () => {
        render(<GifItem title={TITLE} url={URL}/>)
        //screen.debug()
        expect(screen.getByRole('img').src).toEqual(URL)
        expect(screen.getByRole('img').alt).toEqual(TITLE)
     })
})