import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './with-spinner.component';
import Spinner from '../spinner/spinner.component';

describe('testing WithSpinner HOC', () => {
  const TestComponent = () => <div className="testComponent" />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('testing when loading is true', () => {
    it('should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading />);

      expect(wrapper.exists(Spinner)).toBe(true);
    });

    it('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading />);

      expect(wrapper.exists(TestComponent)).toBe(false);
    });
  });

  describe('testing when loading is false', () => {
    it('should render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(TestComponent)).toBe(true);
    });

    it('should not render Spinner', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(Spinner)).toBe(false);
    });
  });
});
