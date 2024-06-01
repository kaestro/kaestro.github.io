import React, { useEffect, useRef } from 'react';
import '../styles/categoryList.css';

type CategoryListProps = {
  categories: string[];
};

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  const filteredCategories = categories.filter(
    category => category !== 'Legacy' && category !== 'Pre-Renewal' && category !== 'ProtoType'
  );

  const categoryListRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const initialTop = 400; // 초기 top 위치
    const handleScroll = () => {
      if (categoryListRef.current) {
        const scrollY = window.scrollY;
        if (scrollY >= initialTop) {
          let newTop = initialTop - scrollY;
          newTop = Math.max(newTop, 30);
          categoryListRef.current.style.top = `${newTop}px`;
        } else {
          categoryListRef.current.style.top = `${initialTop - scrollY}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside id="category-list" ref={categoryListRef} aria-label="Category List">
      <h2>Categories</h2>
      <ul>
        {filteredCategories.map(category => (
          <li key={category}>
            <a href={`/${category}`}>{category}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategoryList;