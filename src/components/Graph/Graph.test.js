import React from "react";
import Enzyme, { shallow } from "enzyme";
import Graph from "./Graph";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

describe("Graph", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <Graph
        data1={[{ score: 1, ratio: 0.5, price: 10 }]}
        name1=""
        data2={[{ score: 15, ratio: 0.7, price: 100 }]}
        name2=""
      />
    );
  });

  test("renders correctly", () => {
    expect(wrapper).not.toBeNull();
  });
});
