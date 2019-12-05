import React from "react"
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Dashboard from './Dashboard';


afterEach(cleanup);


it("renders", () => {
    const { asFragment } = render(<Dashboard text="ball"/>); 
    expect(asFragment()).toMatchSnapshot();
});

it('inserts text in div', () => {
    const {getByTestId, getByText} = render(<Dashboard/>);
    expect(getByTestId("divtag")).toHaveTextContent('ball');
    expect(getByText('ball')).toHaveClass('fancy-div');
})


// instanceof("render", () => {
    // const { asFragment } = render(<Header text="Hello" />);
    // expect(asFragment()).toMatchSnapshot();
// });
/*
it("inserts text in h1", () => {
    const { getByTestId, getByText} = render(<Header text="Hello!" />);
});
expect(getByTestId('h1tag)).toHaveTextContent("Hello");
// expect( getbytext('Hello!')).toHaveClass('fancy-h1');
//you can pass in any text to compare it with the tohavetextcontent function.
});
on the h1 data-testid ="h1tag">
on the h1 className="fancy=h1">
*/
// yarn test
// u
//header file
/*
import of react
export default Header ({text})
return header tag h2 tag {text}
close
*/