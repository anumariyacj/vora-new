import {
  ProductSelection,
  Title,
  ProductList,
} from '../../../components/ProductSelection';

const Womenbags = () => {
  const womenBagsData = [
    { title: 'Classic Black Tote', price: '$85', img: '/wb10.png' },
    { title: 'Quilted Pastel Blue Crossbody', price: '$450', img: '/wb9.png' },
    { title: 'Woven Straw Tote', price: '$299', img: '/wb8.png' },
    { title: 'Quilted Tan Shoulder Bag', price: '$120', img: '/wb7.png' },
    { title: 'Woven Vertical Tote', price: '$160', img: '/wb6.png' },
    { title: 'Powder Blue Top-Handle Bag', price: '$220', img: '/wb5.png' },
    { title: 'Embellished Red Clutch', price: '$250', img: '/wb4.png' },
    { title: 'Cream Mini Backpack', price: '$300', img: '/wb3.png' },
    { title: 'Burgundy Frame Bag', price: '$300', img: '/wb2.png' },
    { title: 'Metallic Silver Pouch', price: '$300', img: '/wb1.png' },
  ];

  return (
    <ProductSelection>
      <Title label="Women's bags" subtitle="Explore" />
      <ProductList products={womenBagsData} />
    </ProductSelection>
  );
};

export default Womenbags;
