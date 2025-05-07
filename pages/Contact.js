function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [formErrors, setFormErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitSuccess, setSubmitSuccess] = React.useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'El nombre es requerido';
    }

    if (!formData.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'El email no es válido';
    }

    if (!formData.message.trim()) {
      errors.message = 'El mensaje es requerido';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola, me gustaría obtener más información sobre sus productos.");
    window.open(`https://wa.me/${whatsappConfig.phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="contact-page page-content" data-id="j8au4z36j" data-path="pages/Contact.js">
      <div className="container mx-auto px-4" data-id="etgrr9c9q" data-path="pages/Contact.js">
        <h1 className="section-title" data-id="o6s3pe8p5" data-path="pages/Contact.js">Contacto</h1>
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-id="76vxexgxj" data-path="pages/Contact.js">
          <div className="bg-white rounded-lg shadow-md p-6 text-center" data-id="am6f7g6t4" data-path="pages/Contact.js">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-id="m1fajtbik" data-path="pages/Contact.js">
              <i className="fas fa-map-marker-alt text-primary text-2xl" data-id="t4zfy7577" data-path="pages/Contact.js"></i>
            </div>
            <h3 className="font-bold text-lg mb-2" data-id="s4m7w53s2" data-path="pages/Contact.js">Dirección</h3>
            <p data-id="cq2gueq2i" data-path="pages/Contact.js">{contactInfo.address}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center" data-id="v5rcdbssa" data-path="pages/Contact.js">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-id="n0psdx2cy" data-path="pages/Contact.js">
              <i className="fas fa-phone-alt text-primary text-2xl" data-id="vz7hh54e6" data-path="pages/Contact.js"></i>
            </div>
            <h3 className="font-bold text-lg mb-2" data-id="rre558fyp" data-path="pages/Contact.js">Teléfono</h3>
            <p data-id="25oldtncp" data-path="pages/Contact.js">{contactInfo.phone}</p>
            <p className="mt-2" data-id="dib2s6hga" data-path="pages/Contact.js">
              <button
                onClick={handleWhatsAppClick}
                className="text-green-600 flex items-center justify-center mx-auto" data-id="9ol1kinm2" data-path="pages/Contact.js">

                <i className="fab fa-whatsapp mr-2 text-xl" data-id="ejai5vjwl" data-path="pages/Contact.js"></i>
                {contactInfo.whatsapp}
              </button>
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 text-center" data-id="7kw7prg6c" data-path="pages/Contact.js">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4" data-id="6y2mezxnk" data-path="pages/Contact.js">
              <i className="fas fa-envelope text-primary text-2xl" data-id="2q8x132mc" data-path="pages/Contact.js"></i>
            </div>
            <h3 className="font-bold text-lg mb-2" data-id="mjwtanl9v" data-path="pages/Contact.js">Email</h3>
            <p data-id="qi52pgary" data-path="pages/Contact.js">{contactInfo.email}</p>
          </div>
        </div>
        
        {/* Business Hours */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 text-center" data-id="3qquytnai" data-path="pages/Contact.js">
          <h3 className="font-bold text-lg mb-2" data-id="4c97cq091" data-path="pages/Contact.js">Horario de Atención</h3>
          <p data-id="wgbkms8g3" data-path="pages/Contact.js">{contactInfo.businessHours}</p>
        </div>
        
        {/* Contact Form and Map */}
        <div className="grid md:grid-cols-2 gap-8 mb-8" data-id="sp8bjkws9" data-path="pages/Contact.js">
          <div className="bg-white rounded-lg shadow-md p-6" data-id="qh18zu9xe" data-path="pages/Contact.js">
            <h2 className="text-xl font-bold mb-4" data-id="k8k7cwhm4" data-path="pages/Contact.js">Envíenos un Mensaje</h2>
            
            {submitSuccess &&
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4" data-id="z7il4ek94" data-path="pages/Contact.js">
                <p data-id="5uosn3piu" data-path="pages/Contact.js">¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.</p>
              </div>
            }
            
            <form onSubmit={handleSubmit} data-id="qnmtlz26a" data-path="pages/Contact.js">
              <div className="mb-4" data-id="2xvlnycm2" data-path="pages/Contact.js">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2" data-id="ndxha95js" data-path="pages/Contact.js">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300'}`
                  } data-id="7azzqgz02" data-path="pages/Contact.js" />

                {formErrors.name && <p className="text-red-500 text-sm mt-1" data-id="6si5j0wdg" data-path="pages/Contact.js">{formErrors.name}</p>}
              </div>
              
              <div className="mb-4" data-id="gfwlhxr7s" data-path="pages/Contact.js">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2" data-id="m19kwpcnw" data-path="pages/Contact.js">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.email ? 'border-red-500' : 'border-gray-300'}`
                  } data-id="l8f8of1r0" data-path="pages/Contact.js" />

                {formErrors.email && <p className="text-red-500 text-sm mt-1" data-id="no7jtq9by" data-path="pages/Contact.js">{formErrors.email}</p>}
              </div>
              
              <div className="mb-4" data-id="nl8xoucq8" data-path="pages/Contact.js">
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-2" data-id="122uo1g5s" data-path="pages/Contact.js">Teléfono (Opcional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" data-id="at7pws8bt" data-path="pages/Contact.js" />

              </div>
              
              <div className="mb-4" data-id="r6lx628pl" data-path="pages/Contact.js">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2" data-id="5stukw550" data-path="pages/Contact.js">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  formErrors.message ? 'border-red-500' : 'border-gray-300'}`
                  } data-id="0n2wx813o" data-path="pages/Contact.js">
                </textarea>
                {formErrors.message && <p className="text-red-500 text-sm mt-1" data-id="tkdxn7lwz" data-path="pages/Contact.js">{formErrors.message}</p>}
              </div>
              
              <button
                type="submit"
                className="btn w-full"
                disabled={isSubmitting} data-id="5ncxuscfn" data-path="pages/Contact.js">

                {isSubmitting ?
                <span className="flex items-center justify-center" data-id="xg8boe51r" data-path="pages/Contact.js">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="vertax0x0" data-path="pages/Contact.js">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="uojcwz364" data-path="pages/Contact.js"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="ht64b9td9" data-path="pages/Contact.js"></path>
                    </svg>
                    Enviando...
                  </span> :

                'Enviar Mensaje'
                }
              </button>
            </form>
            
            <div className="text-center mt-6" data-id="r2ed6ol9y" data-path="pages/Contact.js">
              <p className="text-gray-600 mb-2" data-id="59df4so98" data-path="pages/Contact.js">¿Prefiere contactarnos directamente?</p>
              <a
                href={`https://wa.me/${whatsappConfig.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hola, quisiera información sobre sus productos.")}`}
                className="btn btn-whatsapp"
                target="_blank"
                rel="noopener noreferrer" data-id="p5280twmo" data-path="pages/Contact.js">

                <i className="fab fa-whatsapp mr-2" data-id="7nxa93iqy" data-path="pages/Contact.js"></i>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6" data-id="pywbtbnyw" data-path="pages/Contact.js">
            <h2 className="text-xl font-bold mb-4" data-id="iuxl0sdou" data-path="pages/Contact.js">Nuestra Ubicación</h2>
            <div className="map-container h-80 md:h-96 overflow-hidden rounded-md" data-id="h9bj96ai5" data-path="pages/Contact.js">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa ubicación AutoRepuestos Express" data-id="1a2zr3wxi" data-path="pages/Contact.js">
              </iframe>
            </div>
            
            <div className="mt-4" data-id="eqqhta0sp" data-path="pages/Contact.js">
              <h3 className="font-bold" data-id="dfmtsga0s" data-path="pages/Contact.js">Cómo llegar:</h3>
              <p className="text-gray-600" data-id="p828udfa2" data-path="pages/Contact.js">
                Estamos ubicados en {contactInfo.address}, a pocas cuadras del centro comercial.
                Contamos con estacionamiento para clientes.
              </p>
            </div>
          </div>
        </div>
        
        {/* Social Media */}
        <div className="bg-white rounded-lg shadow-md p-6 text-center" data-id="7963bzg2e" data-path="pages/Contact.js">
          <h2 className="text-xl font-bold mb-4" data-id="ekecb45u9" data-path="pages/Contact.js">Síganos en Redes Sociales</h2>
          <div className="flex justify-center gap-6" data-id="8kb7qzkya" data-path="pages/Contact.js">
            <a
              href={contactInfo.socialMedia.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 text-3xl" data-id="atpjv98at" data-path="pages/Contact.js">

              <i className="fab fa-facebook" data-id="issih7lsi" data-path="pages/Contact.js"></i>
            </a>
            <a
              href={contactInfo.socialMedia.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 text-3xl" data-id="dpc8nrz7g" data-path="pages/Contact.js">

              <i className="fab fa-instagram" data-id="3gqo4ub4v" data-path="pages/Contact.js"></i>
            </a>
            <a
              href={contactInfo.socialMedia.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 text-3xl" data-id="1oyxewj2g" data-path="pages/Contact.js">

              <i className="fab fa-twitter" data-id="thgmbm25x" data-path="pages/Contact.js"></i>
            </a>
          </div>
        </div>
      </div>
    </div>);

}