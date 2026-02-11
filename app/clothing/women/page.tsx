import {
  ProductSelection,
  Title,
  ProductList,
} from '../../../components/ProductSelection';

const Womencloth = () => {
  const products = [
    { title: 'Gala sequin gown', price: '$240', img: '/wc1.png' },
    { title: 'Olive utility jumpsuit', price: '$200', img: '/wc2.png' },
    { title: 'Champagne sequin suit', price: '$220', img: '/wc3.png' },
    { title: 'Baroque bracode suit', price: '$200', img: '/wc4.png' },
    { title: 'Gold dust brocade suit', price: '$250', img: '/wc5.png' },
    { title: 'Embrorded velvet dress', price: '$300', img: '/wc6.png' },
    { title: 'Beaded mesh dress', price: '$350', img: '/wc7.png' },
    { title: 'Classic white shirt', price: '$200', img: '/wc8.png' },
    { title: 'Paiseey print dress', price: '$280', img: '/wc9.png' },
    { title: 'Floral brocade suit', price: '$280', img: '/wc10.png' },
  ];

  return (
    <ProductSelection>
      <Title label="Women's clothing" subtitle="Explore" />
      <ProductList products={products} />
    </ProductSelection>
  );
};

export default Womencloth;
