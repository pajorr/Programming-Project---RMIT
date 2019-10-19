import React from 'react';
import { shallow } from 'enzyme';

import Booking from '../userBooking';


describe('userLogin', () => {
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<Booking debug/>);

        expect(component).toMatchSnapshot();
    });
});
