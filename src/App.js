import React from "react";
import "./App.css";
import ProductCardList from "./components/product/ProductCardList";
import { whatDataToUse } from "./components/api/GetData";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    return {
      fakeData: true,
      data: [],
    };
  }

  componentDidMount = () => {
    this.getInitialData();
  };

  getInitialData() {
    //console.log(whatDataToUse(this.state.fakeData));
    this.setState({ data: whatDataToUse(this.state.fakeData) });
  }

  updateData(newData) {
    console.log(newData);
  }

  render() {
    return (
      <ProductCardList
        dataForCards={this.state.data}
        fakeData={this.state.fakeData}
      />
    );
  }
}

export default App;
