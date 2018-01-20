const Item = (props) => (
  <li className="list-group-item">
    Bitcoin rate form {props.bpi[props.currency].description}
    : <span className="badge badge-primary">{props.bpi[props.currency].code}</span>
    <strong>{props.bpi[props.currency].rate}</strong>
  </li>
);

export default Item;
