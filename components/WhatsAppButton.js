function WhatsAppButton() {
  const { data } = useStaticData();

  // Use data from custom hook with fallback
  const whatsappConfig = data?.whatsappConfig || {
    phoneNumber: "+1234567890",
    defaultMessage: "Hola, estoy interesado en esta autoparte."
  };

  const whatsappLink = `https://wa.me/${whatsappConfig.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappConfig.defaultMessage)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-floating-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp" data-id="3ffkx3d9o" data-path="components/WhatsAppButton.js">

      <i className="fab fa-whatsapp" data-id="pt0whjw25" data-path="components/WhatsAppButton.js"></i>
      <span className="whatsapp-tooltip" data-id="ezrqyajtu" data-path="components/WhatsAppButton.js">¡Contáctanos por WhatsApp!</span>
    </a>);

}