import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(categories => setCategories(categories));
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">Categories</h3>
      {categories.map(category => (
        // Yes . The nextJs Documentation states if your child is not just an tag but a functional or class component then the passHref is needed. Make sure to pass it whenever you use a react component as a child
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3 ">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
