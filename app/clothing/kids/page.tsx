import {
  ProductSelection,
  Title,
  ProductList,
} from '../../../components/ProductSelection';

const Kidcloth = () => {
  const kidCloth = [
    { title: 'Rainbow Stripe Set', price: '$85', img: '/kc1.png' },
    { title: 'Dino-Floral Mix', price: '$450', img: '/kc2.png' },
    { title: 'Pink Denim Dungarees', price: '$299', img: '/kc3.png' },
    { title: 'Denim Pinafore Dress', price: '$120', img: '/kc4.png' },
    { title: 'Preppy Polo Look', price: '$160', img: '/kc5.png' },
    { title: 'Varsity Tracksuit', price: '$220', img: '/kc6.png' },
    { title: 'Classic Plaid Button-Down', price: '$250', img: '/kc7.png' },
    { title: 'Sparkle Tutu Dress', price: '$300', img: '/kc8.png' },
  ];

  return (
    <ProductSelection>
      <Title label="Kid's clothing" subtitle="Explore" />
      <ProductList products={kidCloth} />
    </ProductSelection>
  );
};

export default Kidcloth;
