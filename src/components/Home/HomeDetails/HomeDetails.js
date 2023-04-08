import { useParams } from 'react-router-dom';
import data from '../Data/Data';

function HomeDetails() {
  const { id } = useParams();
  const product = data.find((p) => p.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>
        $
        {product.price}
      </p>
      <p>{product.description}</p>
    </div>
  );
}
export default HomeDetails;
