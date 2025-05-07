// Custom hook for products management
function useProducts() {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 20;

  // Initialize products
  React.useEffect(() => {
    loadProducts();
  }, []);

  // Load products from products.json file
  const loadProducts = () => {
    setLoading(true);
    // Fetch the products from the JSON file
    fetch('/utils/products.json').
    then((response) => response.json()).
    then((data) => {
      setProducts(data);
      setFilteredProducts(data);
      setLoading(false);
    }).
    catch((error) => {
      console.error('Error loading products:', error);
      // Fallback to productData if fetch fails
      setProducts(productData || []);
      setFilteredProducts(productData || []);
      setLoading(false);
    });
  };

  // Filter products based on search term and category
  const filterProducts = (search, category) => {
    let results = [...productData];

    // Filter by search term
    if (search && search.trim() !== '') {
      const searchLower = search.toLowerCase();
      results = results.filter((product) =>
      product.name.toLowerCase().includes(searchLower) ||
      product.code.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower)
      );
    }

    // Filter by category
    if (category && category !== 'Todos') {
      results = results.filter((product) => product.category === category);
    }

    setFilteredProducts(results);
    setCurrentPage(1); // Reset to first page on new search/filter
  };

  // Save products (for admin functions)
  const saveProducts = (updatedProducts) => {
    try {
      localStorage.setItem('productData', JSON.stringify(updatedProducts));
      setProducts(updatedProducts);
      setFilteredProducts(updatedProducts);
      console.log('Products saved successfully', updatedProducts.length);
    } catch (error) {
      console.error('Error saving products to localStorage:', error);
    }
  };

  // Get a product by id
  const getProductById = (id) => {
    return products.find((product) => product.id === id);
  };

  // Add a new product
  const addProduct = (product) => {
    const newProduct = {
      ...product,
      id: Math.max(...products.map((p) => p.id), 0) + 1
    };
    const updatedProducts = [...products, newProduct];
    saveProducts(updatedProducts);
    return newProduct;
  };

  // Update a product
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
    );
    saveProducts(updatedProducts);
    return updatedProduct;
  };

  // Delete a product
  const deleteProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    saveProducts(updatedProducts);
  };

  // Get current products for pagination
  const getCurrentProducts = () => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    return filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  };

  // Calculate total pages
  const getTotalPages = () => {
    return Math.ceil(filteredProducts.length / productsPerPage);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return {
    products,
    filteredProducts,
    loading,
    currentPage,
    filterProducts,
    getCurrentProducts,
    getTotalPages,
    paginate,
    addProduct,
    updateProduct,
    deleteProduct,
    getProductById
  };
}