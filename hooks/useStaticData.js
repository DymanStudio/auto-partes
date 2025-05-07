// Custom hook to access static data from JSON
function useStaticData() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  // Load static data on mount
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        // In a real-world scenario with a build system, we'd import the JSON directly
        // Since we're using vanilla JS without a build system, we'll fetch it
        const response = await fetch('/utils/staticData.json');
        if (!response.ok) {
          throw new Error(`Failed to load static data: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        console.error('Error loading static data:', err);
        setError(err.message);
        setLoading(false);

        // Fallback to hardcoded data if fetch fails
        // This is just for development/demo purposes
        fallbackToHardcodedData();
      }
    };

    fetchData();
  }, []);

  // Fallback function to use hardcoded data if fetch fails
  const fallbackToHardcodedData = () => {
    console.warn('Using fallback static data');

    // This is the same data as in staticData.json
    const fallbackData = {
      categories: [
      "Todos",
      "Motor",
      "Frenos",
      "Suspensión",
      "Transmisión",
      "Eléctricos",
      "Accesorios"],

      whatsappConfig: {
        phoneNumber: "+1234567890",
        defaultMessage: "Hola, estoy interesado en esta autoparte."
      },
      aboutContent: {
        companyName: "AutoRepuestos Express",
        logo: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png",
        foundedYear: 2010,
        description: "AutoRepuestos Express es tu proveedor confiable de autopartes de alta calidad. Contamos con una amplia variedad de productos para todas las marcas y modelos, ofreciendo soluciones rápidas y confiables para mantener tu vehículo en óptimas condiciones.",
        mission: "Ofrecer autopartes de calidad a precios competitivos, brindando un servicio excepcional y soluciones rápidas para nuestros clientes.",
        vision: "Ser reconocidos como el proveedor líder de autopartes, caracterizados por nuestra calidad, servicio y conocimiento técnico.",
        values: [
        "Calidad en todos nuestros productos",
        "Servicio al cliente excepcional",
        "Honestidad y transparencia",
        "Conocimiento técnico y asesoramiento experto",
        "Mejora continua"],

        team: [
        {
          name: "Carlos Rodríguez",
          position: "Fundador y Director",
          image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
          name: "Laura Martínez",
          position: "Gerente de Ventas",
          image: "https://randomuser.me/api/portraits/women/2.jpg"
        },
        {
          name: "Miguel Sánchez",
          position: "Especialista Técnico",
          image: "https://randomuser.me/api/portraits/men/3.jpg"
        }]

      },
      contactInfo: {
        address: "Av. Libertador 1234, Ciudad Autónoma",
        phone: "+12 3456 7890",
        email: "info@autorepuestosexpress.com",
        whatsapp: "+1234567890",
        businessHours: "Lunes a Viernes: 9:00 AM - 6:00 PM | Sábados: 9:00 AM - 1:00 PM",
        socialMedia: {
          facebook: "https://facebook.com/autorepuestosexpress",
          instagram: "https://instagram.com/autorepuestosexpress",
          twitter: "https://twitter.com/autorepuestosx"
        },
        mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276291452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzEnMzkuNSJOIDPCsDIyJzMxLjEiRQ!5e0!3m2!1sen!2sng!4v1574864786783!5m2!1sen!2sng"
      },
      uiText: {
        notFound: {
          title: "Página No Encontrada",
          message: "La página que está buscando no existe o ha sido movida.",
          homeButton: "Volver al Inicio",
          catalogButton: "Ver Catálogo"
        },
        footer: {
          quickLinks: "Enlaces Rápidos",
          contact: "Contacto",
          socialMedia: "Redes Sociales",
          whatsappText: "Contáctanos por WhatsApp",
          companyDescription: "Tu proveedor de confianza para todas las autopartes que necesitas.",
          rights: "Todos los derechos reservados."
        },
        catalog: {
          pageTitle: "Catálogo de Repuestos",
          allProducts: "Todos los Productos",
          productsFound: "productos encontrados",
          loading: "Cargando productos...",
          noResults: {
            title: "No se encontraron productos",
            message: "Intente buscar con otros términos o categorías",
            button: "Ver todos los productos"
          }
        }
      }
    };

    setData(fallbackData);
    setLoading(false);
  };

  // Get a specific section of the static data
  const getSection = (sectionName) => {
    if (!data) return null;
    return data[sectionName];
  };

  return {
    data,
    loading,
    error,
    getSection
  };
}