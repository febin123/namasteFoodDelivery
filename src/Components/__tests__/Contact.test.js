import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import '@testing-library/jest-dom'

describe("Contact us page test cases",()=>{

    it('should load contact component', () => {
  
        render(<Contact/>)
    
        const heading=screen.getByRole("heading")
    
        expect(heading).toBeInTheDocument()
    })
    
    it('should load buttton inside contact component', () => {
      
        render(<Contact/>)
    
        const button=screen.getByText("Submit")
    
        expect(button).toBeInTheDocument()
    })
    
    it('should load 2 input boxes on contact component', () => {
        render(<Contact/>)
    
        const inputBoxes=screen.getAllByRole("textbox")
    
        expect(inputBoxes.length).toBe(2)
    })
    
})
