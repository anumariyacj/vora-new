import {
  ProductSelection,
  Title,
  ProductList,
} from '../../../components/ProductSelection';

const Menbags = () => {
  const menbags = [
    { title: 'Modern Leather Briefcase', price: '$85', img: '/mb1.png' },
    { title: 'Canvas Rolltop Backpack', price: '$450', img: '/mb2.png' },
    { title: 'Nylon Sling Bag', price: '$299', img: '/mb3.png' },
    { title: 'Tech Pouch & Camera Bag', price: '$120', img: '/mb4.png' },
    { title: 'Canvas Weekend Duffle', price: '$160', img: '/mb5.png' },
    { title: 'Perforated Leather Tote', price: '$220', img: '/mb6.png' },
    { title: 'Woven Leather Messenger', price: '$250', img: '/mb7.png' },
  ];

  return (
    <ProductSelection>
      <Title label="Men's bags" subtitle="Explore" />
      <ProductList products={menbags} />
    </ProductSelection>
  );
};

export default Menbags;
