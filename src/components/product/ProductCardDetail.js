import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { sendOrNotToSent } from "../api/GetData";

class ProductCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
  }

  get initialState() {
    console.log();
    return {
      quantity: this.props.data.quantity,
      period: this.setPeriod(),
    };
  }

  componentDidMount = () => {
    this.handleHeight();
  };

  /* this is so stupid ... but i didnt want to change the grid system for this so im commiting to this... */

  handleHeight() {
    let card1 = document.getElementById("card_1");
    let card1name = card1.querySelector(".card-name");
    let card1desc = card1.querySelector(".card-desc");
    let card1feat = card1.querySelector(".card-feat");
    let card2 = document.getElementById("card_2");
    let card2name = card2.querySelector(".card-name");
    let card2desc = card2.querySelector(".card-desc");
    let card2feat = card2.querySelector(".card-feat");

    if (card1name.clientHeight >= card2name.clientHeight) {
      card2name.setAttribute(
        "style",
        "height:" + card1name.clientHeight + "px"
      );
    } else {
      card1name.setAttribute(
        "style",
        "height:" + card2name.clientHeight + "px"
      );
    }
    if (card1desc.clientHeight > card2desc.clientHeight) {
      card2desc.setAttribute(
        "style",
        "height:" + card1desc.clientHeight + "px"
      );
    } else {
      card1desc.setAttribute(
        "style",
        "height:" + card2desc.clientHeight + "px"
      );
    }
    if (card1feat.clientHeight >= card2feat.clientHeight) {
      card2feat.setAttribute(
        "style",
        "height:" + card1feat.clientHeight + "px"
      );
      card2feat.style.height = card1feat.clientHeight;
    } else {
      card1feat.setAttribute(
        "style",
        "height:" + card2feat.clientHeight + "px"
      );
      card1feat.style.height = card2feat.clientHeight;
    }
  }

  setPeriod = () => {
    return new Date().getFullYear() + this.props.data.period;
  };

  featureList = () => {
    let data = this.props.data.features;
    let cardId = this.props.cardId;
    let i = 0;
    const featureList = data.map((feat) => {
      i++;
      return (
        <div key={"card_" + cardId + "_feat_" + i}>
          <div className="inline check-icon">
            <CheckIcon />
          </div>
          <div className="inline">{feat}</div>
        </div>
      );
    });
    return featureList;
  };

  formatPrice = (amount) => {
    var formatter = new Intl.NumberFormat(navigator.language, {});
    return formatter.format(amount);
  };

  render() {
    return (
      <div>
        <div><h3>Card heading - what is supposed to be here?</h3></div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper>
              <img src={this.props.data.img} alt="" />
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <div className="card-name">{this.props.data.name}</div>
              <div className="card-desc">{this.props.data.description}</div>
              <div className="card-feat">{this.featureList()}</div>
            </Paper>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  id="filled-number"
                  label="Total Devices"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={this.state.quantity}
                  onChange={(e) => {
                    this.setState({ quantity: e.target.value });
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  id="filled-number"
                  label="Valid until"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={this.state.period}
                  onChange={(e) => {
                    this.setState({ period: e.target.value });
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid className="right-align" item xs={12}>
            <div className="price">
              {this.formatPrice(this.props.data.price) + ",-"}
            </div>
          </Grid>
          <Grid className="right-align" item xs={12}>
            <Button
              className="update-button"
              variant="contained"
              onClick={(e) => {
                sendOrNotToSent(
                  this.props.fakeData,
                  this.state.period,
                  this.state.quantity
                );
              }}
            >
              UPDATE NOW
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ProductCardList;
