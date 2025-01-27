import React from "react";
import { shallow } from "enzyme";
import CardList from './CardList';

it('expect to render CardList Component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'John Snow',
            username: 'John',
            email: 'test@gmail.com'
        }
    ];

    expect(shallow(<CardList robots={mockRobots} />)).toMatchSnapshot();
});