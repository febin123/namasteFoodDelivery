import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test('should render load header component with login button', () => { 

    render(
        <BrowserRouter>
    <Provider store={appStore}><Header/>
    </Provider>
    </BrowserRouter>
    )
    const loginButton=screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
 })