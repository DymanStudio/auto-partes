function SearchBar({ onSearch, activeCategory, setActiveCategory }) {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="search-container fade-in" data-id="loouj4x88" data-path="components/SearchBar.js">
      <form className="search-form" onSubmit={handleSubmit} data-id="io28in7vx" data-path="components/SearchBar.js">
        <input
          type="text"
          className="search-input"
          placeholder="Buscar por nombre, código o marca..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar productos" data-id="2ralcnt1f" data-path="components/SearchBar.js" />

        <button type="submit" className="search-button" data-id="g9wu81fkh" data-path="components/SearchBar.js">
          <i className="fas fa-search search-icon" data-id="pzdku4jyf" data-path="components/SearchBar.js"></i>
          Buscar
        </button>
      </form>
      
      <div className="category-filters" data-id="6vyhudw4o" data-path="components/SearchBar.js">
        {categories.map((category) =>
        <button
          key={category}
          className={`category-filter ${activeCategory === category ? 'active' : ''}`}
          onClick={() => handleCategoryClick(category)} data-id="phxn7vv77" data-path="components/SearchBar.js">

            {category}
          </button>
        )}
      </div>
    </div>);

}