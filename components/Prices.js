import Item from './Item'

class Prices extends React.Component {
  state = {
    currency: 'USD',
  }

  render() {
    let { currency } = this.state;

    return (
      <div>
        <ul className="list-group">
          <Item
            currency={this.state.currency}
            bpi={this.props.bpi} />
        </ul>

        <select onChange={e => this.setState({ currency: e.target.value })}
          className="form-control">
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;