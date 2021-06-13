import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ProductCardDetail from "./ProductCardDetail";

class ProductCardList extends React.Component {
  makeList = () => {
    let data = this.props.dataForCards;
    let i = 0;
    const makeCards = data.map((data) => {
      i++;
      return (
        <Grid id={"card_" + i} key={"card_" + i} item xs={6}>
          <Paper>
            <ProductCardDetail
              data={data}
              cardId={i}
              fakeData={this.props.fakeData}
            />
          </Paper>
        </Grid>
      );
    });
    return makeCards;
  };

  render() {
    return (
      <Grid container spacing={3}>
        {this.makeList()}
      </Grid>
    );
  }
}

export default ProductCardList;
