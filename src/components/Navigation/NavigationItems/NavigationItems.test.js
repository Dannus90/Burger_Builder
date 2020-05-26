//Below is to connect enzyme. Shallow renders all the components but not deeply.The component we want to test must get imported also. That is NavigationItems below. expect -> check if the wrapper.find() contains a certain element.

import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItems from "./NavigationItems";

configure({ adapter: new Adapter() });

//Enzyme lets us test this item standalone independent of the rest of the application.Isolated tests. Down below is the test suite. beforeEach will be executed before each of your tests.There is also afterEach that cleans up.Each test is on its own so authentication must be added.
describe("<NavigationItems />", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    });

    it("should render two <NavigationItem /> elements if not authenticated", () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it("should render three <NavigationItem /> elements if authenticated", () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({ isAuthenticated: true });
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it("should show an logout button", () => {
        // wrapper = shallow(<NavigationItems isAuthenticated />);
        wrapper.setProps({ isAuthenticated: true });
        expect(
            wrapper.contains(
                <NavigationItem link="/logout">Logout</NavigationItem>
            )
        ).toEqual(true);
    });
});
