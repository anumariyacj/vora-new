import {
  ProductSelection,
  Title,
  ProductList,
} from '../../../components/ProductSelection';

const Kidsbags = () => {
  const kbags = [
    { title: 'Astronaut Backpack', price: '$85', img: '/kbag1.png' },
    { title: 'Rainbow Quilted Crossbody', price: '$450', img: '/Kbag2.png' },
    { title: 'Yellow School Bus Bag', price: '$299', img: '/kbag3.png' },
    { title: 'Green Monster Satchel', price: '$120', img: '/kb5.png' },
    { title: 'Blue Monster Messenger', price: '$160', img: '/kb6.png' },
    { title: 'Purple Polka Dot Handbag', price: '$220', img: '/kb4.png' },
    { title: 'Clear Beach Tote', price: '$300', img: '/kb1.png' },
    { title: 'Red Rocket Sling Bag', price: '$300', img: '/kb3.png' },
    { title: 'Teddy Bear Backpack', price: '$300', img: '/kb2.png' },
  ];

  return (
    <ProductSelection>
      <Title label="Kids's bags" subtitle="Explore" />
      <ProductList products={kbags} />
    </ProductSelection>
  );
};

export default Kidsbags;
