function ProductCard({ product, onOpenModal }) {
  const constructWhatsAppLink = (product) => {
    const message = encodeURIComponent(
      `${whatsappConfig.defaultMessage}\nProducto: ${product.name}\nCódigo: ${product.code}\nPrecio: $${product.price || 'Consultar'}\n`
    );
    return `https://wa.me/${whatsappConfig.phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  };

  const handleCardClick = (e) => {
    // Don't trigger modal if clicking on WhatsApp button
    if (e.target.closest('.product-whatsapp-button')) {
      return;
    }

    e.preventDefault();
    if (onOpenModal) {
      onOpenModal(product);
    }
  };

  return (
    <div className="product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }} data-id="3j4ek4d3r" data-path="components/ProductCard.js">
      <div className="product-image-container" data-id="pytb0dl84" data-path="components/ProductCard.js">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = 'https://usapi.hottask.com/autodev/Image/GetPlaceholder/400x300?text=Imagen+No+Disponible';
          }} data-id="gl642dfob" data-path="components/ProductCard.js" />

      </div>
      <div className="product-details" data-id="fnpq4h0ha" data-path="components/ProductCard.js">
        <div className="product-code" data-id="0fwj9lxcj" data-path="components/ProductCard.js">{product.code}</div>
        <h3 className="product-name" data-id="db4seh36r" data-path="components/ProductCard.js">{product.name}</h3>
        <div className="product-info-row" data-id="emk5xgw9b" data-path="components/ProductCard.js">
          <span className="product-category" data-id="8d7nauu20" data-path="components/ProductCard.js">{product.category}</span>
          <span className="product-price" data-id="jqkm8l9n8" data-path="components/ProductCard.js">${product.price || 'Consultar'}</span>
        </div>
        <p className="product-description" data-id="grgyv07fr" data-path="components/ProductCard.js">{product.description}</p>
        <a
          href={constructWhatsAppLink(product)}
          className="product-whatsapp-button"
          target="_blank"
          rel="noopener noreferrer" data-id="abrgjznio" data-path="components/ProductCard.js">

          <i className="fab fa-whatsapp product-whatsapp-icon" data-id="5t8g28lsp" data-path="components/ProductCard.js"></i>
          Consultar por WhatsApp
        </a>
      </div>
    </div>);

}