function Catalog() {
  // State for product modal
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  // Use custom hooks
  const { searchTerm, activeCategory, handleSearch, handleCategoryChange, clearAll } = useSearch();
  const { filteredProducts, loading, currentPage, filterProducts, getCurrentProducts, getTotalPages, paginate } = useProducts();
  const { data, loading: staticDataLoading } = useStaticData();

  // Get UI text from static data
  const uiText = data?.uiText?.catalog || {
    pageTitle: "Catálogo de Repuestos",
    allProducts: "Todos los Productos",
    productsFound: "productos encontrados",
    noResults: {
      title: "No se encontraron productos",
      message: "Intente buscar con otros términos o categorías",
      button: "Ver todos los productos"
    }
  };

  React.useEffect(() => {
    // Apply filters when search parameters change
    filterProducts(searchTerm, activeCategory);
  }, [searchTerm, activeCategory]);

  // Get current products for the page
  const currentProducts = getCurrentProducts();

  // Calculate total pages
  const totalPages = getTotalPages();

  return (
    <div className="catalog-page page-content" data-id="19lgqhm7h" data-path="pages/Catalog.js">
      <div className="container mx-auto px-4" data-id="fe62wtn4o" data-path="pages/Catalog.js">
        <h1 className="section-title" data-id="c0qqsgzzt" data-path="pages/Catalog.js">{uiText.pageTitle}</h1>
        
        <SearchBar
          onSearch={handleSearch}
          activeCategory={activeCategory}
          setActiveCategory={handleCategoryChange} data-id="njd4pzffl" data-path="pages/Catalog.js" />

        
        {loading ?
        <div className="catalog-loading" data-id="5cs4tfqmn" data-path="pages/Catalog.js">
            <div className="spinner" data-id="3ki54cgji" data-path="pages/Catalog.js"></div>
          </div> :

        <>
            <div className="catalog-header" data-id="3azfydrvp" data-path="pages/Catalog.js">
              <h2 className="catalog-title" data-id="12hlo1fu4" data-path="pages/Catalog.js">
                {activeCategory !== 'Todos' ? activeCategory : uiText.allProducts}
              </h2>
              <span className="catalog-count" data-id="bloczcjs1" data-path="pages/Catalog.js">
                {filteredProducts.length} {uiText.productsFound}
              </span>
            </div>
            
            {filteredProducts.length > 0 ?
          <div className="catalog-container" data-id="kwomdckh6" data-path="pages/Catalog.js">
                <div className="catalog-grid" data-id="itku37npq" data-path="pages/Catalog.js">
                  {currentProducts.map((product) =>
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={(product) => {
                  setSelectedProduct(product);
                  setModalOpen(true);
                }}
                data-id="dfmorqfqf"
                data-path="pages/Catalog.js" />
              )}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 &&
            <div className="catalog-pagination" data-id="l3qh8do0a" data-path="pages/Catalog.js">
                    <button
                className="pagination-button"
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1} data-id="crs0bspg4" data-path="pages/Catalog.js">

                      <i className="fas fa-chevron-left" data-id="h2nd6wq81" data-path="pages/Catalog.js"></i>
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) =>
              <button
                key={i + 1}
                className={`pagination-button ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => paginate(i + 1)} data-id="hb97p7f04" data-path="pages/Catalog.js">

                        {i + 1}
                      </button>
              )}
                    
                    <button
                className="pagination-button"
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages} data-id="cvtp20wwt" data-path="pages/Catalog.js">

                      <i className="fas fa-chevron-right" data-id="od7sd25ls" data-path="pages/Catalog.js"></i>
                    </button>
                  </div>
            }
              </div> :

          <div className="catalog-empty" data-id="74vj1arku" data-path="pages/Catalog.js">
                <div className="catalog-empty-icon" data-id="t3mkeqdn4" data-path="pages/Catalog.js">
                  <i className="fas fa-search" data-id="fpd9qb8is" data-path="pages/Catalog.js"></i>
                </div>
                <h3 className="catalog-empty-text" data-id="ukbq9rkbj" data-path="pages/Catalog.js">{uiText.noResults.title}</h3>
                <p data-id="rnk5brzjg" data-path="pages/Catalog.js">{uiText.noResults.message}</p>
                <button
              className="btn mt-4"
              onClick={clearAll} data-id="7mqyfx77e" data-path="pages/Catalog.js">

                  {uiText.noResults.button}
                </button>
              </div>
          }
          </>
        }
      </div>
      
      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)} />
    </div>);

}