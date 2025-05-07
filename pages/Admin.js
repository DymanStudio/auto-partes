function Admin() {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('Todos');
  const [editingProduct, setEditingProduct] = React.useState(null);
  const [isCreatingProduct, setIsCreatingProduct] = React.useState(false);
  const [notification, setNotification] = React.useState(null);

  const { logout } = useAdminAuth(); // Use the auth hook to protect this route
  const navigate = ReactRouterDOM.useNavigate();

  // Load products
  React.useEffect(() => {
    // Load products with a small delay to simulate API loading
    setLoading(true);
    setTimeout(() => {
      // Create a deep copy of the products to avoid reference issues
      const productsDeepCopy = JSON.parse(JSON.stringify(productData));
      setProducts(productsDeepCopy);
      setLoading(false);
    }, 800);
  }, []);

  // Filter products
  const filteredProducts = React.useMemo(() => {
    return products.filter((product) => {
      // Filter by search term
      const matchesSearch = searchTerm === '' ||
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());

      // Filter by category
      const matchesCategory = activeCategory === 'Todos' ||
      product.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, activeCategory]);

  // Search handler
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Category filter handler
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  // Edit product handler
  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  // Save product handler
  const handleSaveProduct = (updatedProduct) => {
    let updatedProducts;

    if (isCreatingProduct) {
      // For new products, add to the array
      updatedProducts = [...products, updatedProduct];
      showNotification('Producto creado correctamente', 'success');
    } else {
      // For existing products, update in the array
      updatedProducts = products.map((p) =>
      p.id === updatedProduct.id ? updatedProduct : p
      );
      showNotification('Producto actualizado correctamente', 'success');
    }

    // First ensure we save to localStorage
    saveProducts(updatedProducts);

    // Then update the local state
    setProducts(updatedProducts);
    console.log('Products saved. Total count:', updatedProducts.length);

    // Reset editing state
    setEditingProduct(null);
    setIsCreatingProduct(false);
  };

  // Cancel edit handler
  const handleCancelEdit = () => {
    setEditingProduct(null);
    setIsCreatingProduct(false);
  };

  // Create new product handler
  const handleCreateProduct = () => {
    // Generate new product ID (max ID + 1)
    const maxId = products.reduce((max, product) => Math.max(max, product.id), 0);
    const newProduct = {
      id: maxId + 1,
      name: '',
      code: '',
      description: '',
      category: categories[1], // Default to first actual category
      image: 'https://usapi.hottask.com/autodev/Image/GetPlaceholder/400x300?text=Nueva+Imagen'
    };

    setEditingProduct(newProduct);
    setIsCreatingProduct(true);
  };

  // Delete product handler
  const handleDeleteProduct = (productId) => {
    if (window.confirm('¿Está seguro que desea eliminar este producto? Esta acción no se puede deshacer.')) {
      const updatedProducts = products.filter((p) => p.id !== productId);
      setProducts(updatedProducts);
      saveProducts(updatedProducts);
      showNotification('Producto eliminado correctamente', 'success');
    }
  };

  // Show notification helper
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  // Handle logout
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="admin-page" data-id="clfqj53lc" data-path="pages/Admin.js">
      <div className="admin-header" data-id="t7w2dxnvc" data-path="pages/Admin.js">
        <div className="container mx-auto px-4" data-id="k41rs6viv" data-path="pages/Admin.js">
          <div className="admin-header-content" data-id="ljfyuw56c" data-path="pages/Admin.js">
            <div className="admin-branding" data-id="71dbsbijq" data-path="pages/Admin.js">
              <img
                src="https://cdn-icons-png.flaticon.com/512/3774/3774278.png"
                alt="Logo"
                className="admin-logo" data-id="iiqeexj78" data-path="pages/Admin.js" />

              <h1 data-id="ivv4tkl87" data-path="pages/Admin.js">Panel de Administración</h1>
            </div>
            
            <div className="admin-actions" data-id="5joa3hgiw" data-path="pages/Admin.js">
              <button
                className="admin-logout-btn"
                onClick={handleLogout}
                title="Cerrar sesión" data-id="s9hqdp1as" data-path="pages/Admin.js">

                <i className="fas fa-sign-out-alt" data-id="2rceetcu2" data-path="pages/Admin.js"></i>
                <span data-id="0bcz6brmh" data-path="pages/Admin.js">Cerrar sesión</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="admin-content container mx-auto px-4 py-6" data-id="9jnnspznh" data-path="pages/Admin.js">
        <div className="admin-content-header" data-id="amvoh3a8n" data-path="pages/Admin.js">
          <h2 className="admin-content-title" data-id="sppjr854o" data-path="pages/Admin.js">Gestión de Productos</h2>
          <div className="admin-header-actions" data-id="b0umg1jox" data-path="pages/Admin.js">
            <button
              className="create-product-btn"
              onClick={handleCreateProduct}
              title="Crear nuevo producto" data-id="7it9sqmt9" data-path="pages/Admin.js">
              <i className="fas fa-plus-circle mr-2" data-id="wwi7jgjt3" data-path="pages/Admin.js"></i>
              Nuevo Producto
            </button>
            <ReactRouterDOM.Link to="/" className="back-to-site-btn" data-id="qxi58d4f4" data-path="pages/Admin.js">
              <i className="fas fa-external-link-alt mr-2" data-id="49f37j8xm" data-path="pages/Admin.js"></i>
              Ver Sitio
            </ReactRouterDOM.Link>
          </div>
        </div>
        
        {notification &&
        <div className={`admin-notification ${notification.type}`} data-id="el2v1avfk" data-path="pages/Admin.js">
            <i className={`fas ${notification.type === 'success' ? 'fa-check-circle' : 'fa-info-circle'} mr-2`} data-id="y0z8hqckq" data-path="pages/Admin.js"></i>
            {notification.message}
          </div>
        }
        
        <div className="admin-filters" data-id="pfcx16qrh" data-path="pages/Admin.js">
          <div className="admin-search" data-id="qs9d2z6d5" data-path="pages/Admin.js">
            <i className="fas fa-search" data-id="madarg2fg" data-path="pages/Admin.js"></i>
            <input
              type="text"
              placeholder="Buscar productos por nombre, código o descripción..."
              value={searchTerm}
              onChange={handleSearch} data-id="wxu54oizc" data-path="pages/Admin.js" />

          </div>
          
          <div className="admin-categories" data-id="efrmdfula" data-path="pages/Admin.js">
            {categories.map((category) =>
            <button
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)} data-id="93ibw033z" data-path="pages/Admin.js">

                {category}
              </button>
            )}
          </div>
        </div>
        
        {loading ?
        <div className="admin-loading" data-id="62a3vl2l3" data-path="pages/Admin.js">
            <div className="spinner" data-id="r5xf75srw" data-path="pages/Admin.js"></div>
            <p data-id="5j9xuj1zx" data-path="pages/Admin.js">Cargando productos...</p>
          </div> :

        <>
            {editingProduct ?
          <ProductEditForm
            product={editingProduct}
            onSave={handleSaveProduct}
            onCancel={handleCancelEdit}
            isNewProduct={isCreatingProduct} data-id="txjo64gzh" data-path="pages/Admin.js" /> :


          <div className="admin-products-list" data-id="az7jf4upe" data-path="pages/Admin.js">
                <div className="admin-products-header" data-id="lxcseunmy" data-path="pages/Admin.js">
                  <div className="product-id" data-id="93v8rqf5j" data-path="pages/Admin.js">ID</div>
                  <div className="product-image" data-id="hp1ipo8mr" data-path="pages/Admin.js">Imagen</div>
                  <div className="product-name" data-id="nny98l3j8" data-path="pages/Admin.js">Nombre</div>
                  <div className="product-code" data-id="fec0mody7" data-path="pages/Admin.js">Código</div>
                  <div className="product-category" data-id="5s1vaspj4" data-path="pages/Admin.js">Categoría</div>
                  <div className="product-actions" data-id="jrsneqce9" data-path="pages/Admin.js">Acciones</div>
                </div>
                
                {filteredProducts.length > 0 ?
            <div className="admin-products-items" data-id="u7455nilt" data-path="pages/Admin.js">
                    {filteredProducts.map((product) =>
              <div key={product.id} className="admin-product-item" data-id="xnsqgm8ri" data-path="pages/Admin.js">
                        <div className="product-id" data-id="k2e6abijw" data-path="pages/Admin.js">{product.id}</div>
                        <div className="product-image" data-id="gibejnayl" data-path="pages/Admin.js">
                          <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.target.src = 'https://usapi.hottask.com/autodev/Image/GetPlaceholder/400x300?text=Imagen+No+Disponible';
                    }} data-id="gvn8bcqnb" data-path="pages/Admin.js" />

                        </div>
                        <div className="product-name" title={product.name} data-id="stjurpl1b" data-path="pages/Admin.js">
                          {product.name}
                        </div>
                        <div className="product-code" data-id="hb6d2skqc" data-path="pages/Admin.js">{product.code}</div>
                        <div className="product-category" data-id="ugl8040p9" data-path="pages/Admin.js">{product.category}</div>
                        <div className="product-actions" data-id="rv3qy0y5f" data-path="pages/Admin.js">
                          <button
                    className="edit-btn"
                    onClick={() => handleEditProduct(product)}
                    title="Editar producto" data-id="xpzhpfbym" data-path="pages/Admin.js">
                            <i className="fas fa-edit" data-id="3o69ud4fr" data-path="pages/Admin.js"></i>
                          </button>
                          <button
                    className="delete-btn"
                    onClick={() => handleDeleteProduct(product.id)}
                    title="Eliminar producto" data-id="o4x0e757j" data-path="pages/Admin.js">
                            <i className="fas fa-trash-alt" data-id="uczcitbq5" data-path="pages/Admin.js"></i>
                          </button>
                        </div>
                      </div>
              )}
                  </div> :

            <div className="admin-no-products" data-id="s2mdsuill" data-path="pages/Admin.js">
                    <i className="fas fa-search" data-id="gg7n4rdcj" data-path="pages/Admin.js"></i>
                    <p data-id="nxg7fc69f" data-path="pages/Admin.js">No se encontraron productos con los filtros actuales</p>
                    <button
                className="clear-filters-btn"
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('Todos');
                }} data-id="5sic2zqai" data-path="pages/Admin.js">

                      Limpiar filtros
                    </button>
                  </div>
            }
              </div>
          }
          </>
        }
      </div>
    </div>);

}