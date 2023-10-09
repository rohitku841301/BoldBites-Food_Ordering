import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Work from "../Work"

test('should button is render in work component', () => { 
    render(<Work />);
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
 })

 test("should input are render in work component", ()=>{
    render(<Work />);
    const input = screen.getAllByRole("textbox");
    console.log(input);
    // expect(input).toBeInTheDocument();
 })