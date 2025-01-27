import React from "react";
import { shallow, mount, render } from "enzyme";
import Card from './Card';

it('expect to render Card Component', () => {
    expect(shallow(<Card />).length).toEqual(1);
});

it('expect to render Card Component/snapshot', () => {
    expect(shallow(<Card />)).toMatchSnapshot();
}); 