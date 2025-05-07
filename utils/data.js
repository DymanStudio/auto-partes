// Sample product data for the catalog
// Using a function to create a singleton pattern for data management
const createProductStore = () => {
  // Check if products are stored in localStorage
  let storedProducts;
  try {
    storedProducts = localStorage.getItem('productData');
    if (storedProducts) {
      return JSON.parse(storedProducts);
    }
  } catch (error) {
    console.error('Error loading products from localStorage:', error);
  }

  // If no stored products or error occurred, return initial data
  return [
  {
    id: 1,
    name: "Filtro de Aceite Premium",
    code: "FA-1234",
    description: "Filtro de aceite de alta calidad para motores diésel y gasolina. Compatible con múltiples marcas.",
    category: "Motor",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1556760544-74068565f05c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwaGlnaC1xdWFsaXR5JTIwaW1hZ2UlMjBvZiUyMGElMjBwcmVtaXVtJTIwb2lsJTIwZmlsdGVyJTIwc3VpdGFibGUlMjBmb3IlMjBkaWVzZWwlMjBhbmQlMjBnYXNvbGluZSUyMGVuZ2luZXMlMkMlMjBjb21wYXRpYmxlJTIwd2l0aCUyMG11bHRpcGxlJTIwYnJhbmRzLnxlbnwwfHx8fDE3NDU1OTQ5OTd8MA&ixlib=rb-4.0.3&q=80&w=200$w=800",
    secondImage: "https://images.unsplash.com/photo-1635784363190-a6550369acc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Pastillas de Freno Cerámicas",
    code: "PF-2345",
    description: "Juego de pastillas de freno cerámicas para un frenado suave y efectivo. Baja generación de polvo.",
    category: "Frenos",
    price: 35.50,
    image: "https://images.unsplash.com/photo-1525974160448-038dacadcc71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwaGlnaC1xdWFsaXR5JTIwaW1hZ2UlMjBvZiUyMGElMjBjZXJhbWljJTIwYnJha2UlMjBwYWQlMjBzZXQlMkMlMjBzdWl0YWJsZSUyMGZvciUyMHNtb290aCUyMGFuZCUyMGVmZmVjdGl2ZSUyMGJyYWtpbmclMjB3aXRoJTIwbG93JTIwZHVzdCUyMGdlbmVyYXRpb24ufGVufDB8fHx8MTc0NTU5NTAwMXww&ixlib=rb-4.0.3&q=80&w=200$w=800",
    secondImage: "https://images.unsplash.com/photo-1636912172136-8f766a4c2f8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Amortiguador Delantero",
    code: "AD-3456",
    description: "Amortiguador delantero de gas para una conducción suave y control preciso. Durabilidad extendida.",
    category: "Suspensión",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1669941060931-6912c4538ba3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwaGlnaC1xdWFsaXR5JTIwaW1hZ2UlMjBvZiUyMGElMjBmcm9udCUyMHNob2NrJTIwYWJzb3JiZXIlMkMlMjBzdWl0YWJsZSUyMGZvciUyMGRpZXNlbCUyMGFuZCUyMGdhc29saW5lJTIwZW5naW5lcyUyQyUyMGVuc3VyaW5nJTIwc21vb3RoJTIwZHJpdmluZyUyMGFuZCUyMHByZWNpc2UlMjBjb250cm9sLnxlbnwwfHx8fDE3NDU1OTQ5OTN8MA&ixlib=rb-4.0.3&q=80&w=200$w=800",
    secondImage: "https://images.unsplash.com/photo-1566285284385-346bf2c30c0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Kit de Embrague Completo",
    code: "KE-4567",
    description: "Kit completo de embrague que incluye disco, plato y rodamiento. Alta resistencia al desgaste.",
    category: "Transmisión",
    price: 175.00,
    image: "https://images.unsplash.com/photo-1503455637927-730bce8583c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwaGlnaC1xdWFsaXR5JTIwaW1hZ2UlMjBvZiUyMGElMjBjYXIlMjBwYXJ0JTJDJTIwc3BlY2lmaWNhbGx5JTIwYSUyMGNsdXRjaCUyMGtpdCUyQyUyMGRpc3BsYXllZCUyMG9uJTIwYSUyMGNsZWFuJTIwYmFja2dyb3VuZC58ZW58MHx8fHwxNzQ1NTk0OTk2fDA&ixlib=rb-4.0.3&q=80&w=200$w=800",
    secondImage: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Alternador Reconstruido",
    code: "AR-5678",
    description: "Alternador reconstruido con componentes de alta calidad. Garantía de funcionamiento óptimo.",
    category: "Eléctricos",
    price: 129.50,
    image: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Funda de Volante Premium",
    code: "FV-6789",
    description: "Funda de volante ergonómica de cuero sintético con grip antideslizante para mayor comodidad.",
    category: "Accesorios",
    price: 25.99,
    image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY2xvc2UtdXAlMjBpbWFnZSUyMG9mJTIwYSUyMGNhciUyMHN0ZWVyaW5nJTIwd2hlZWwlMjB3aXRoJTIwYSUyMHByZW1pdW0lMjBsZWF0aGVyJTIwY292ZXIlMkMlMjBzaG93Y2FzaW5nJTIwaXRzJTIwZXJnb25vbWljJTIwZGVzaWduJTIwYW5kJTIwbm9uLXNsaXAlMjBncmlwLnxlbnwwfHx8fDE3NDU1OTQ5OTB8MA&ixlib=rb-4.0.3&q=80&w=200$w=800",
    secondImage: "https://images.unsplash.com/photo-1552746947-1d2181ef687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Bomba de Agua Reforzada",
    code: "BA-7890",
    description: "Bomba de agua con cuerpo metálico reforzado y rodamientos de precisión para mayor durabilidad.",
    category: "Motor",
    price: 45.75,
    image: "https://images.unsplash.com/photo-1600985573512-136be80e89a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1530046339915-78e9633890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Discos de Freno Ventilados",
    code: "DF-8901",
    description: "Par de discos de freno ventilados con tratamiento anticorrosión para un rendimiento óptimo.",
    category: "Frenos",
    price: 78.50,
    image: "https://images.unsplash.com/photo-1615310748170-37b5dd328a5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1590607669385-63e427d26d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Kit de Bujes de Suspensión",
    code: "BS-9012",
    description: "Kit completo de bujes de suspensión fabricados en poliuretano para mayor duración y estabilidad.",
    category: "Suspensión",
    price: 52.99,
    image: "https://images.unsplash.com/photo-1592939406103-9f88ee48e732?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1580733532423-aaac1aa32064?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Caja de Velocidades Reconstruida",
    code: "CV-0123",
    description: "Caja de velocidades manual reconstruida con componentes originales y verificada en banco de pruebas.",
    category: "Transmisión",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1619642751034-765cc714845a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Batería de Alto Rendimiento",
    code: "BA-1234",
    description: "Batería libre de mantenimiento con alta capacidad de arranque en frío y larga vida útil.",
    category: "Eléctricos",
    price: 85.99,
    image: "https://images.unsplash.com/photo-1601003161156-e3d0eef65a66?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1577473403731-357dab0f7d1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 12,
    name: "Alfombras de Goma Premium",
    code: "AG-2345",
    description: "Juego de alfombras de goma resistentes a la humedad y fáciles de limpiar. Diseño antideslizante.",
    category: "Accesorios",
    price: 42.50,
    image: "https://images.unsplash.com/photo-1617235276090-16d0ca3d7de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1606713965731-150d7e42e131?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 13,
    name: "Kit de Distribución Completo",
    code: "KD-3456",
    description: "Kit completo de distribución con bomba de agua, correa y tensores. Calidad OEM garantizada.",
    category: "Motor",
    price: 115.75,
    image: "https://images.unsplash.com/photo-1530046339915-78e9633890b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1545155080-1cce1089a6e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 14,
    name: "Cilindro Maestro de Freno",
    code: "CM-4567",
    description: "Cilindro maestro de freno con cuerpo de aluminio anodizado y pistones de precisión.",
    category: "Frenos",
    price: 67.95,
    image: "https://images.unsplash.com/photo-1597418246865-b430178da232?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1590607669385-63e427d26d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 15,
    name: "Espirales Deportivos",
    code: "ES-5678",
    description: "Par de espirales deportivos que reducen la altura y mejoran la estabilidad sin sacrificar confort.",
    category: "Suspensión",
    price: 125.00,
    image: "https://images.unsplash.com/photo-1558284283-de0dbcb5b9e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    secondImage: "https://images.unsplash.com/photo-1622959958850-a7a14b4afb64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 16,
    name: "Palanca de Cambios Deportiva",
    code: "PC-6789",
    description: "Palanca de cambios deportiva con pomo ergonómico y recorrido reducido para cambios precisos.",
    category: "Transmisión",
    image: "https://images.unsplash.com/photo-1558384636-224f1ebe6571?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 17,
    name: "Luces LED para Faros",
    code: "LF-7890",
    description: "Kit de luces LED de alta luminosidad para reemplazo de halógenos, con mayor durabilidad y alcance.",
    category: "Eléctricos",
    image: "https://images.unsplash.com/photo-1626072778346-0ab6604d39c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 18,
    name: "Cargador USB para Auto",
    code: "CU-8901",
    description: "Cargador USB dual de carga rápida con iluminación LED y protección contra sobrecarga.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 19,
    name: "Turbocompresor Performance",
    code: "TP-9012",
    description: "Turbocompresor de alto rendimiento para mayor potencia y respuesta del motor. Compatible con múltiples modelos.",
    category: "Motor",
    image: "https://images.unsplash.com/photo-1551522435-a13afa10f103?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 20,
    name: "Kit de Caliper de Freno",
    code: "KC-0123",
    description: "Kit completo para reconstrucción de caliper de freno, incluye sellos, pistones y accesorios.",
    category: "Frenos",
    image: "https://images.unsplash.com/photo-1579274038029-719675ce59c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 21,
    name: "Barra Estabilizadora Reforzada",
    code: "BE-1234",
    description: "Barra estabilizadora deportiva para mayor rigidez en curvas y mejor manejo en carretera.",
    category: "Suspensión",
    image: "https://images.unsplash.com/photo-1571707428464-1f45b0726f7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 22,
    name: "Kit de Reparación de Transmisión",
    code: "KR-2345",
    description: "Kit completo para reparación de transmisión automática, incluye sellos, filtros y juntas.",
    category: "Transmisión",
    image: "https://images.unsplash.com/photo-1549037173-e3b717902c57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 23,
    name: "Módulo de Encendido Electrónico",
    code: "ME-3456",
    description: "Módulo de encendido electrónico programable para ajuste preciso del tiempo de ignición.",
    category: "Eléctricos",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 24,
    name: "Asiento Deportivo Reclinable",
    code: "AD-4567",
    description: "Asiento deportivo con ajuste reclinable y soporte lumbar para mayor comodidad en viajes largos.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1574807947532-77c3fe83bb6a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 25,
    name: "Sensor de Oxígeno Universal",
    code: "SO-5678",
    description: "Sensor de oxígeno de banda ancha compatible con múltiples marcas para un control preciso de la mezcla.",
    category: "Motor",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 26,
    name: "Líquido de Frenos DOT 5",
    code: "LF-6789",
    description: "Líquido de frenos sintético DOT 5 de alto punto de ebullición para sistemas de frenado exigentes.",
    category: "Frenos",
    image: "https://images.unsplash.com/photo-1580983559367-0dc2f8c075d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 27,
    name: "Kit de Elevación Suspensión",
    code: "KE-7890",
    description: "Kit completo para elevar la altura de la suspensión, ideal para vehículos todoterreno.",
    category: "Suspensión",
    image: "https://images.unsplash.com/photo-1494223416915-42e9c87bfb26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 28,
    name: "Aceite de Transmisión Sintético",
    code: "AT-8901",
    description: "Aceite sintético para transmisiones automáticas con protección térmica y anti-desgaste avanzada.",
    category: "Transmisión",
    image: "https://images.unsplash.com/photo-1606224547099-b15c94ca4807?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 29,
    name: "Arnés Eléctrico Universal",
    code: "AE-9012",
    description: "Arnés eléctrico universal para instalación de sistemas de audio, iluminación y accesorios adicionales.",
    category: "Eléctricos",
    image: "https://images.unsplash.com/photo-1505739818593-1c3d5ed6fe4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 30,
    name: "Sistema de Navegación GPS",
    code: "SN-0123",
    description: "Sistema de navegación GPS con pantalla táctil, mapas actualizados y conectividad Bluetooth.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1527168027773-0cc890c4f42e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 31,
    name: "Junta de Culata Multicapa",
    code: "JC-1234",
    description: "Junta de culata multicapa con anillos de refuerzo para resistir altas temperaturas y presiones.",
    category: "Motor",
    image: "https://images.unsplash.com/photo-1572642226816-9b5bb0fe03c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 32,
    name: "Bomba de Freno Deportiva",
    code: "BF-2345",
    description: "Bomba de freno principal con pistones sobredimensionados para mejor sensibilidad y respuesta.",
    category: "Frenos",
    image: "https://images.unsplash.com/photo-1549317336-206569e8475c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 33,
    name: "Amortiguadores Ajustables",
    code: "AA-3456",
    description: "Amortiguadores con ajuste de altura y dureza para personalizar la conducción según las condiciones.",
    category: "Suspensión",
    image: "https://images.unsplash.com/photo-1566285284385-346bf2c30c0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 34,
    name: "Convertidor de Par Mejorado",
    code: "CP-4567",
    description: "Convertidor de par reforzado con mayor capacidad de bloqueo para transmisiones automáticas deportivas.",
    category: "Transmisión",
    image: "https://images.unsplash.com/photo-1562159616-3a52b66efbc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 35,
    name: "Kit de Luces LED Interior",
    code: "KL-5678",
    description: "Kit completo de iluminación LED para el interior del vehículo con múltiples colores y control remoto.",
    category: "Eléctricos",
    image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 36,
    name: "Consola Central Extendida",
    code: "CC-6789",
    description: "Consola central con compartimentos adicionales y portavasos, ideal para organizar el espacio interior.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1552746947-1d2181ef687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 37,
    name: "Colector de Escape Deportivo",
    code: "CE-7890",
    description: "Colector de escape de alto flujo para mejorar la evacuación de gases y aumentar la potencia.",
    category: "Motor",
    image: "https://images.unsplash.com/photo-1611322952377-99934359d252?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 38,
    name: "Kit de Freno de Disco Trasero",
    code: "KF-8901",
    description: "Kit completo para conversión de frenos traseros de tambor a disco para mayor eficiencia de frenado.",
    category: "Frenos",
    image: "https://images.unsplash.com/photo-1603923407643-d8846b99526b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 39,
    name: "Espaciadores de Rueda",
    code: "ER-9012",
    description: "Juego de espaciadores de rueda de alta resistencia para modificar la geometría de la suspensión.",
    category: "Suspensión",
    image: "https://images.unsplash.com/photo-1604410892906-6e24c6639699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 40,
    name: "Radiador de Transmisión",
    code: "RT-0123",
    description: "Radiador auxiliar para enfriamiento de transmisión automática en condiciones de uso intensivo.",
    category: "Transmisión",
    image: "https://images.unsplash.com/photo-1563388171588-6cef78b39dbb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 41,
    name: "Sistema de Sonido Premium",
    code: "SS-1234",
    description: "Sistema de audio de alta fidelidad con amplificador, altavoces y subwoofer para una experiencia inmersiva.",
    category: "Eléctricos",
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 42,
    name: "Tablero Deportivo Personalizado",
    code: "TD-2345",
    description: "Tablero deportivo con indicadores adicionales y acabado de fibra de carbono para un look racing.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1548184274-f1d3776448cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 43,
    name: "Inyectores de Alto Caudal",
    code: "IA-3456",
    description: "Juego de inyectores de combustible de alto caudal para motores modificados con mayor demanda de combustible.",
    category: "Motor",
    image: "https://images.unsplash.com/photo-1614994252455-c8d9d33e2cdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 44,
    name: "Mangueras de Freno Trenzadas",
    code: "MF-4567",
    description: "Juego de mangueras de freno con refuerzo trenzado metálico para eliminar la expansión y mejorar la respuesta.",
    category: "Frenos",
    image: "https://images.unsplash.com/photo-1615486511584-a2cf9f9fa930?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 45,
    name: "Barras de Torsión Ajustables",
    code: "BT-5678",
    description: "Barras de torsión con ajuste de tensión para personalizar la rigidez de la suspensión delantera.",
    category: "Suspensión",
    image: "https://images.unsplash.com/photo-1580733532423-aaac1aa32064?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 46,
    name: "Juntas Homocinéticas Reforzadas",
    code: "JH-6789",
    description: "Juntas homocinéticas de alta resistencia para transmisiones sometidas a alto estrés y par motor elevado.",
    category: "Transmisión",
    image: "https://images.unsplash.com/photo-1622178810262-1101d4bd0dc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 47,
    name: "Sistema de Alarma Avanzado",
    code: "SA-7890",
    description: "Sistema de alarma con GPS integrado, bloqueo a distancia y notificaciones a dispositivos móviles.",
    category: "Eléctricos",
    image: "https://images.unsplash.com/photo-1558562805-4bf1e2a724eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 48,
    name: "Kit de Aero Deportivo",
    code: "KA-8901",
    description: "Kit aerodinámico completo con faldones laterales, spoiler trasero y difusor para mejorar la estabilidad.",
    category: "Accesorios",
    image: "https://images.unsplash.com/photo-1567248119657-9c04d3509d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 49,
    name: "Pistones Forjados",
    code: "PF-9012",
    description: "Juego de pistones forjados para mayor resistencia en motores de alto rendimiento y sobrealimentados.",
    category: "Motor",
    image: "https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 50,
    name: "Kit Completo de Frenos Performance",
    code: "KF-0123",
    description: "Kit completo de frenos de alto rendimiento con discos ranurados, pastillas cerámicas y líneas reforzadas.",
    category: "Frenos",
    image: "https://images.unsplash.com/photo-1590607669385-63e427d26d3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }];

};

// Create the product data store
const productData = createProductStore();

// Function to save products to localStorage and update the global productData
const saveProducts = (products) => {
  try {
    localStorage.setItem('productData', JSON.stringify(products));
    // Update the global productData reference
    productData.length = 0;
    products.forEach((product) => productData.push(product));
    console.log('Products saved successfully', products.length);
  } catch (error) {
    console.error('Error saving products to localStorage:', error);
  }
};

// Categories for filtering
const categories = [
"Todos",
"Motor",
"Frenos",
"Suspensión",
"Transmisión",
"Eléctricos",
"Accesorios"];


// WhatsApp configuration
const whatsappConfig = {
  phoneNumber: "+1234567890", // Replace with your actual WhatsApp business number
  defaultMessage: "Hola, estoy interesado en esta autoparte."
};

// About us content
const aboutContent = {
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

};

// Contact information
const contactInfo = {
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
};