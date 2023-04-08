import { Link } from 'react-router-dom';
import data from '../Data/Data';

function HomeList() {
  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>
            $
            {product.price}
          </p>
          <Link to={`/product/${product.id}`}>View Product</Link>
        </div>
      ))}
    </div>
  );
}
export default HomeList;
