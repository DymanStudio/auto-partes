function Home() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("Todos");
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const navigate = ReactRouterDOM.useNavigate();

  React.useEffect(() => {
    // Initialize with featured products (first 6)
    setFilteredProducts(productData.slice(0, 6));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);

    if (term.trim() !== "") {
      navigate(`/auto-partes/catalogo?search=${encodeURIComponent(term)}`);
    }
  };

  const handleCategorySelect = (category) => {
    setActiveCategory(category);
    navigate(`/auto-partes/catalogo?category=${encodeURIComponent(category)}`);
  };

  const handleViewAllProducts = () => {
    navigate("/auto-partes/catalogo");
  };

  // Default hero image - can be replaced with your own
  const heroImageUrl =
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";

  return (
    <div className="home-page" data-id="pgxwecs0g" data-path="pages/Home.js">
      {/* Hero Section with Background Image */}
      <section
        className="relative"
        data-id="sl0mfhu2r"
        data-path="pages/Home.js"
      >
        <div
          className="hero-background text-white"
          style={{ backgroundImage: `url(${heroImageUrl})` }}
          data-id="357kypwea"
          data-path="pages/Home.js"
        >
          <div
            className="hero-overlay"
            data-id="p3cx5hjz2"
            data-path="pages/Home.js"
          >
            <div
              className="container mx-auto px-4 flex flex-col items-center"
              data-id="m7bz1vsdt"
              data-path="pages/Home.js"
            >
              <h1
                className="text-4xl md:text-5xl font-bold text-center mb-6"
                data-id="nddjkk2h2"
                data-path="pages/Home.js"
              >
                Encuentre las Autopartes que Necesita
              </h1>
              <p
                className="text-xl text-center max-w-2xl mb-8"
                data-id="82lbkhi0x"
                data-path="pages/Home.js"
              >
                Amplio catálogo de repuestos de calidad para su vehículo con
                atención personalizada vía WhatsApp
              </p>
              <SearchBar
                onSearch={handleSearch}
                activeCategory={activeCategory}
                setActiveCategory={handleCategorySelect}
                data-id="8ywdp8ewt"
                data-path="pages/Home.js"
              />
            </div>
          </div>
        </div>

        {/* Wave separator */}
        <div
          className="absolute bottom-0 left-0 w-full overflow-hidden"
          data-id="plp0as6ci"
          data-path="pages/Home.js"
        >
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-12 md:h-16"
            fill="white"
            data-id="s4jhikz4q"
            data-path="pages/Home.js"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"
              data-id="vc0nzd11e"
              data-path="pages/Home.js"
            ></path>
          </svg>
        </div>
      </section>

      {/* Featured Categories */}
      <section
        className="py-12 bg-white"
        data-id="zgp8dg0qb"
        data-path="pages/Home.js"
      >
        <div
          className="container mx-auto px-4"
          data-id="2njfagmcy"
          data-path="pages/Home.js"
        >
          <h2
            className="section-title"
            data-id="vk82gndqp"
            data-path="pages/Home.js"
          >
            Categorías Principales
          </h2>
          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            data-id="2jqcgnhw3"
            data-path="pages/Home.js"
          >
            {categories.slice(1).map((category) => (
              <div
                key={category}
                className="bg-gray-100 rounded-lg p-6 text-center cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                onClick={() => handleCategorySelect(category)}
                data-id="jp81zoqrk"
                data-path="pages/Home.js"
              >
                <div
                  className="text-primary text-3xl mb-3"
                  data-id="zx2k70kfq"
                  data-path="pages/Home.js"
                >
                  <i
                    className={getCategoryIcon(category)}
                    data-id="h78155jeq"
                    data-path="pages/Home.js"
                  ></i>
                </div>
                <h3
                  className="font-semibold"
                  data-id="dnllypr09"
                  data-path="pages/Home.js"
                >
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        className="py-12 bg-gray-50"
        data-id="unol1a6l4"
        data-path="pages/Home.js"
      >
        <div
          className="container mx-auto px-4"
          data-id="pmq0kw5q4"
          data-path="pages/Home.js"
        >
          <div
            className="flex justify-between items-center mb-6"
            data-id="3mtapf4jb"
            data-path="pages/Home.js"
          >
            <h2
              className="section-title mb-0"
              data-id="051ci0icp"
              data-path="pages/Home.js"
            >
              Productos Destacados
            </h2>
            <button
              onClick={handleViewAllProducts}
              className="btn"
              data-id="k33lhsrzi"
              data-path="pages/Home.js"
            >
              Ver Todos
            </button>
          </div>
          <div
            className="catalog-grid"
            data-id="omxmhdb4e"
            data-path="pages/Home.js"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenModal={(product) => {
                  setSelectedProduct(product);
                  setModalOpen(true);
                }}
                data-id="f1y5941r0"
                data-path="pages/Home.js"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="py-12 bg-white"
        data-id="izkawy60s"
        data-path="pages/Home.js"
      >
        <div
          className="container mx-auto px-4"
          data-id="mdnmzsh2n"
          data-path="pages/Home.js"
        >
          <h2
            className="section-title"
            data-id="7827z1qbr"
            data-path="pages/Home.js"
          >
            ¿Por Qué Elegirnos?
          </h2>
          <div
            className="grid md:grid-cols-3 gap-8"
            data-id="f811mb7y4"
            data-path="pages/Home.js"
          >
            <div
              className="text-center"
              data-id="kx8i6p5h2"
              data-path="pages/Home.js"
            >
              <div
                className="text-primary text-4xl mb-4"
                data-id="m72qpm4kn"
                data-path="pages/Home.js"
              >
                <i
                  className="fas fa-award"
                  data-id="a3p7aisbr"
                  data-path="pages/Home.js"
                ></i>
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                data-id="iwqkxd6we"
                data-path="pages/Home.js"
              >
                Calidad Garantizada
              </h3>
              <p data-id="biybnty3o" data-path="pages/Home.js">
                Trabajamos solo con los mejores proveedores para asegurar
                repuestos de alta calidad.
              </p>
            </div>
            <div
              className="text-center"
              data-id="ai1oivm39"
              data-path="pages/Home.js"
            >
              <div
                className="text-primary text-4xl mb-4"
                data-id="hi153tek0"
                data-path="pages/Home.js"
              >
                <i
                  className="fas fa-shipping-fast"
                  data-id="wwk7thj7p"
                  data-path="pages/Home.js"
                ></i>
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                data-id="bh2rrcd4g"
                data-path="pages/Home.js"
              >
                Entrega Rápida
              </h3>
              <p data-id="2mj7bd18c" data-path="pages/Home.js">
                Ofrecemos opciones de envío rápido para que reciba sus repuestos
                cuando los necesita.
              </p>
            </div>
            <div
              className="text-center"
              data-id="5ubawl9l4"
              data-path="pages/Home.js"
            >
              <div
                className="text-primary text-4xl mb-4"
                data-id="0oq4e3yqr"
                data-path="pages/Home.js"
              >
                <i
                  className="fas fa-headset"
                  data-id="2mqwceiuc"
                  data-path="pages/Home.js"
                ></i>
              </div>
              <h3
                className="text-xl font-semibold mb-2"
                data-id="vr7i94um5"
                data-path="pages/Home.js"
              >
                Atención Personalizada
              </h3>
              <p data-id="nlnnfmbq3" data-path="pages/Home.js">
                Nuestro equipo está disponible para asesorarle vía WhatsApp en
                todo momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section
        className="py-12 bg-primary text-white"
        data-id="444469su8"
        data-path="pages/Home.js"
      >
        <div
          className="container mx-auto px-4 text-center"
          data-id="7oc6uaf5m"
          data-path="pages/Home.js"
        >
          <h2
            className="text-3xl font-bold mb-4"
            data-id="p3k0vgixv"
            data-path="pages/Home.js"
          >
            ¿Necesita Ayuda para Encontrar su Repuesto?
          </h2>
          <p
            className="text-xl mb-6 max-w-2xl mx-auto"
            data-id="831szfqcn"
            data-path="pages/Home.js"
          >
            Contáctenos ahora mismo vía WhatsApp y nuestro equipo le asesorará
            en tiempo real
          </p>
          <a
            href={`https://wa.me/${whatsappConfig.phoneNumber.replace(
              /[^0-9]/g,
              ""
            )}?text=${encodeURIComponent(
              "Hola, necesito ayuda para encontrar un repuesto."
            )}`}
            className="btn btn-lg btn-whatsapp inline-flex items-center"
            target="_blank"
            rel="noopener noreferrer"
            data-id="c323wtgfx"
            data-path="pages/Home.js"
          >
            <i
              className="fab fa-whatsapp mr-2"
              data-id="72wxafqmv"
              data-path="pages/Home.js"
            ></i>
            Contáctenos por WhatsApp
          </a>
        </div>
      </section>

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}

// Helper function to get proper icons for categories
function getCategoryIcon(category) {
  const iconMap = {
    Motor: "fas fa-cogs",
    Frenos: "fas fa-ban",
    Suspensión: "fas fa-car-side",
    Transmisión: "fas fa-tachometer-alt",
    Eléctricos: "fas fa-bolt",
    Accesorios: "fas fa-car",
  };

  return iconMap[category] || "fas fa-car-alt";
}
