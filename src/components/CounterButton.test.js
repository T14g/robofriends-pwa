import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it('should render CounterButton Component', () => {
    expect(shallow(<CounterButton />)).toMatchSnapshot();
});