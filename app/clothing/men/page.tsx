import {
  ProductSelection,
  Title,
  ProductList,
} from '../../../components/ProductSelection';

const Mencloth = () => {
  const menCloth = [
    { title: 'Western Denim Shirt', price: '$85', img: '/mc2.png' },
    { title: 'Tailored Navy Suit', price: '$450', img: '/mc3.png' },
    { title: 'dark green hoodie', price: '$299', img: '/mc4.png' },
    { title: 'grey blazer', price: '$120', img: '/mc5.png' },
    { title: 'flannel plaid shirt', price: '$160', img: '/mc6.png' },
    { title: 'black leather biker jacket', price: '$220', img: '/mc7.png' },
    { title: 'olive green overshirt', price: '$250', img: '/mc8.png' },
    { title: 'mustard yellow corduroy jacket', price: '$300', img: '/mc9.png' },
  ];

  return (
    <ProductSelection>
      <Title label="Men's clothing" subtitle="Explore" />
      <ProductList products={menCloth} />
    </ProductSelection>
  );
};

export default Mencloth;
