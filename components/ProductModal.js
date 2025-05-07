function ProductModal({ product, isOpen, onClose }) {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  // If the product doesn't have a secondImage, use the primary image as fallback
  const images = [
  product?.image,
  product?.secondImage || product?.image].
  filter(Boolean); // Filter out any undefined or null values


  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const constructWhatsAppLink = (product) => {
    const message = encodeURIComponent(
      `${whatsappConfig.defaultMessage}\nProducto: ${product.name}\nCódigo: ${product.code}\nPrecio: $${product.price || 'Consultar'}\n`
    );
    return `https://wa.me/${whatsappConfig.phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  };

  if (!isOpen || !product) return null;

  return (
    <div className="product-modal-overlay" data-id="hfwvlzozt" data-path="components/ProductModal.js">
      <div className="product-modal" data-id="1mdx6ieyo" data-path="components/ProductModal.js">
        <button className="modal-close-btn" onClick={onClose} data-id="c971j7nl5" data-path="components/ProductModal.js">
          <i className="fas fa-times" data-id="6xcoyz9z5" data-path="components/ProductModal.js"></i>
        </button>
        
        <div className="modal-content" data-id="n8dii83sk" data-path="components/ProductModal.js">
          <div className="modal-image-container" data-id="biuo5l663" data-path="components/ProductModal.js">
            <img
              src={images[currentImageIndex]}
              alt={product.name}
              className="modal-product-image"
              onError={(e) => {
                e.target.src = 'https://usapi.hottask.com/autodev/Image/GetPlaceholder/400x300?text=Imagen+No+Disponible';
              }} data-id="wmf43isqf" data-path="components/ProductModal.js" />

            
            <div className="image-navigation" data-id="le4y61kma" data-path="components/ProductModal.js">
              <button className="image-nav-btn" onClick={prevImage} data-id="2h8bbfsaf" data-path="components/ProductModal.js">
                <i className="fas fa-chevron-left" data-id="f2v9wjc0x" data-path="components/ProductModal.js"></i>
              </button>
              <div className="image-indicator" data-id="9txy7uscz" data-path="components/ProductModal.js">
                {images.map((_, index) =>
                <span
                  key={index}
                  className={`indicator-dot ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)} data-id="c04ajcktp" data-path="components/ProductModal.js">
                </span>
                )}
              </div>
              <button className="image-nav-btn" onClick={nextImage} data-id="8j81wu1lu" data-path="components/ProductModal.js">
                <i className="fas fa-chevron-right" data-id="um1ofi07e" data-path="components/ProductModal.js"></i>
              </button>
            </div>
          </div>
          
          <div className="modal-product-details" data-id="55u5lfqe0" data-path="components/ProductModal.js">
            <div className="modal-product-header" data-id="vmatwrdjl" data-path="components/ProductModal.js">
              <div className="modal-product-code" data-id="5o333osg9" data-path="components/ProductModal.js">{product.code}</div>
              <h2 className="modal-product-name" data-id="by20chs9f" data-path="components/ProductModal.js">{product.name}</h2>
            </div>
            
            <div className="modal-product-category" data-id="j412b414u" data-path="components/ProductModal.js">
              <span className="category-label" data-id="lfqbpxo7v" data-path="components/ProductModal.js">Categoría:</span> {product.category}
            </div>
            
            <div className="modal-product-price" data-id="0rw4zpmz3" data-path="components/ProductModal.js">
              <span className="price-label" data-id="wr26ragrb" data-path="components/ProductModal.js">Precio:</span> 
              <span className="price-value" data-id="09cpuuk2a" data-path="components/ProductModal.js">${product.price || 'Consultar'}</span>
            </div>
            
            <p className="modal-product-description" data-id="qbzld6xuw" data-path="components/ProductModal.js">{product.description}</p>
            
            <a
              href={constructWhatsAppLink(product)}
              className="modal-whatsapp-button"
              target="_blank"
              rel="noopener noreferrer" data-id="r3b5xmhlf" data-path="components/ProductModal.js">
              <i className="fab fa-whatsapp modal-whatsapp-icon" data-id="2bjfsoggc" data-path="components/ProductModal.js"></i>
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>);

}