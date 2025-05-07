function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="category-filters" data-id="vg12l9cbc" data-path="components/CategoryFilter.js">
      {categories.map((category) =>
      <button
        key={category}
        className={`category-filter ${activeCategory === category ? 'active' : ''}`}
        onClick={() => setActiveCategory(category)} data-id="gik43w72e" data-path="components/CategoryFilter.js">

          {category}
        </button>
      )}
    </div>);

}