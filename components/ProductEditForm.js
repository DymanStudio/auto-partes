function ProductEditForm({ product, onSave, onCancel, isNewProduct = false }) {
  const [formData, setFormData] = React.useState({
    id: product.id,
    name: product.name,
    code: product.code,
    description: product.description,
    category: product.category,
    image: product.image,
    price: product.price || '',
    secondImage: product.secondImage || ''
  });

  const [saving, setSaving] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);

    // Make sure all required fields are filled
    if (!formData.name || !formData.code || !formData.description || !formData.category || !formData.image) {
      alert('Por favor complete todos los campos obligatorios');
      setSaving(false);
      return;
    }

    // Simulate saving delay
    setTimeout(() => {
      // Make sure we're passing a clean object copy to avoid reference issues
      const productToSave = { ...formData };
      onSave(productToSave);
      setSaving(false);
      console.log('Form submitted with data:', productToSave);
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="product-edit-form" data-id="vsa29wn1i" data-path="components/ProductEditForm.js">
      <div className="form-header" data-id="ogfbrt95j" data-path="components/ProductEditForm.js">
        <h3 data-id="y65e3bxsw" data-path="components/ProductEditForm.js">
          {isNewProduct ? 'Crear Nuevo Producto' : 'Editar Producto'}
        </h3>
        <button
          type="button"
          className="cancel-button"
          onClick={onCancel}
          title="Cancelar edición" data-id="8zk4mq7zh" data-path="components/ProductEditForm.js">

          <i className="fas fa-times" data-id="jpa384sv9" data-path="components/ProductEditForm.js"></i>
        </button>
      </div>
      
      <div className="form-grid" data-id="n9bdjnwy8" data-path="components/ProductEditForm.js">
        <div className="form-group" data-id="0zpqn3x8e" data-path="components/ProductEditForm.js">
          <label htmlFor="name" data-id="v2kn5dnub" data-path="components/ProductEditForm.js">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Nombre del producto" data-id="1nvdvn5pg" data-path="components/ProductEditForm.js" />

        </div>
        
        <div className="form-group" data-id="i4ig2bjmx" data-path="components/ProductEditForm.js">
          <label htmlFor="code" data-id="xeq1qh1hb" data-path="components/ProductEditForm.js">Código</label>
          <input
            type="text"
            id="code"
            name="code"
            value={formData.code}
            onChange={handleChange}
            required
            placeholder="Código del producto" data-id="3pvhdq0de" data-path="components/ProductEditForm.js" />

        </div>
        
        <div className="form-group full-width" data-id="q5qp8bxqe" data-path="components/ProductEditForm.js">
          <label htmlFor="description" data-id="gv3gz87d3" data-path="components/ProductEditForm.js">Descripción</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Descripción del producto" data-id="uggbqf99w" data-path="components/ProductEditForm.js">
          </textarea>
        </div>
        
        <div className="form-group" data-id="if1bexsx3" data-path="components/ProductEditForm.js">
          <label htmlFor="category" data-id="5kwar6ywp" data-path="components/ProductEditForm.js">Categoría</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required data-id="6fv6tys9h" data-path="components/ProductEditForm.js">

            {categories.slice(1).map((category) =>
            <option key={category} value={category} data-id="spq1ksvz3" data-path="components/ProductEditForm.js">{category}</option>
            )}
          </select>
        </div>
        
        <div className="form-group" data-id="hq83u4i97" data-path="components/ProductEditForm.js">
          <label htmlFor="image" data-id="pdgwndob2" data-path="components/ProductEditForm.js">URL de Imagen</label>
          <input
            type="url"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="URL de imagen del producto" data-id="i25zf9v62" data-path="components/ProductEditForm.js" />

        </div>
        
        <div className="form-group" data-id="jwz5db1yv" data-path="components/ProductEditForm.js">
          <label htmlFor="secondImage" data-id="bt8sny3vz" data-path="components/ProductEditForm.js">URL de Segunda Imagen</label>
          <input
            type="url"
            id="secondImage"
            name="secondImage"
            value={formData.secondImage}
            onChange={handleChange}
            placeholder="URL de segunda imagen del producto" data-id="ly9utfk0a" data-path="components/ProductEditForm.js" />
        </div>
        
        <div className="form-group" data-id="mrtnugcz6" data-path="components/ProductEditForm.js">
          <label htmlFor="price" data-id="0jiyshtsp" data-path="components/ProductEditForm.js">Precio</label>
          <input
            type="number"
            id="price"
            name="price"
            step="0.01"
            min="0"
            value={formData.price}
            onChange={handleChange}
            placeholder="Precio del producto (ej: 15.99)" data-id="tq859o71m" data-path="components/ProductEditForm.js" />
        </div>
        
        <div className="form-preview full-width" data-id="gmiwt7rmj" data-path="components/ProductEditForm.js">
          <label data-id="hoy0ly3u9" data-path="components/ProductEditForm.js">Vista previa de imagen</label>
          <div className="image-preview" data-id="osh4pc84k" data-path="components/ProductEditForm.js">
            <img
              src={formData.image}
              alt={formData.name}
              onError={(e) => {
                e.target.src = 'https://usapi.hottask.com/autodev/Image/GetPlaceholder/400x300?text=Imagen+No+Disponible';
              }} data-id="9pqkbtre4" data-path="components/ProductEditForm.js" />

          </div>
        </div>
      </div>
      
      <div className="form-actions" data-id="2zp578ghl" data-path="components/ProductEditForm.js">
        <button
          type="button"
          className="cancel-action"
          onClick={onCancel}
          disabled={saving} data-id="tgoxcfxtk" data-path="components/ProductEditForm.js">

          Cancelar
        </button>
        <button
          type="submit"
          className="save-action"
          disabled={saving} data-id="zfe04dnvf" data-path="components/ProductEditForm.js">

          {saving ?
          <>
              <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="e1ymd74i3" data-path="components/ProductEditForm.js">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="ulgbn3kal" data-path="components/ProductEditForm.js"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="z8tl4g3aa" data-path="components/ProductEditForm.js"></path>
              </svg>
              Guardando...
            </> :

          <>
              <i className="fas fa-save mr-2" data-id="crguwvesq" data-path="components/ProductEditForm.js"></i>
              {isNewProduct ? 'Crear Producto' : 'Guardar Cambios'}
            </>
          }
        </button>
      </div>
    </form>);

}