import React from "react";
import Enzyme, { shallow } from "enzyme";
import CustomSelect from "./CustomSelect";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("CustomSelect", () => {
  let wrapper;
  let mockSetSelectedOption = jest.fn();
  beforeEach(() => {
    wrapper = shallow(
      <CustomSelect
        optionsList={[]}
        selectedOption={{ name: "", data: {} }}
        setSelectedOption={mockSetSelectedOption}
        bgColor=""
      />
    );
  });

  test("renders correctly", () => {
    expect(wrapper).not.toBeNull();
  });
});
