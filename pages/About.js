function About() {
  return (
    <div className="about-page page-content" data-id="0nwh4pl40" data-path="pages/About.js">
      <div className="container mx-auto px-4" data-id="cf0vwtvcr" data-path="pages/About.js">
        <h1 className="section-title" data-id="rg17k7y25" data-path="pages/About.js">Nosotros</h1>
        
        {/* Company Overview */}
        <section className="bg-white rounded-lg shadow-md p-6 mb-8" data-id="8ad924vrv" data-path="pages/About.js">
          <div className="flex flex-col md:flex-row items-center" data-id="kinilayse" data-path="pages/About.js">
            <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center" data-id="u2wjes086" data-path="pages/About.js">
              <img
                src={aboutContent.logo}
                alt={aboutContent.companyName}
                className="w-48 h-48 object-contain" data-id="v8eahegpd" data-path="pages/About.js" />

            </div>
            <div className="md:w-2/3 md:pl-8" data-id="92ohryx6j" data-path="pages/About.js">
              <h2 className="text-2xl font-bold text-primary mb-4" data-id="2lvdxaa9a" data-path="pages/About.js">
                {aboutContent.companyName}
              </h2>
              <p className="mb-4" data-id="a20te8stg" data-path="pages/About.js">
                {aboutContent.description}
              </p>
              <p className="text-sm text-gray-600" data-id="cfenlj6g4" data-path="pages/About.js">
                Fundado en {aboutContent.foundedYear}
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission, Vision, Values */}
        <section className="grid md:grid-cols-3 gap-6 mb-8" data-id="oi96ct5vy" data-path="pages/About.js">
          <div className="bg-white rounded-lg shadow-md p-6" data-id="840e7awf9" data-path="pages/About.js">
            <div className="text-primary text-3xl mb-4" data-id="929k2vn8p" data-path="pages/About.js">
              <i className="fas fa-bullseye" data-id="l10s57mfb" data-path="pages/About.js"></i>
            </div>
            <h2 className="text-xl font-bold mb-3" data-id="d8wflx2a4" data-path="pages/About.js">Nuestra Misión</h2>
            <p data-id="oiigh1nzr" data-path="pages/About.js">{aboutContent.mission}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6" data-id="sfczbjown" data-path="pages/About.js">
            <div className="text-primary text-3xl mb-4" data-id="vrklhv42y" data-path="pages/About.js">
              <i className="fas fa-eye" data-id="5kofchwnz" data-path="pages/About.js"></i>
            </div>
            <h2 className="text-xl font-bold mb-3" data-id="524hzvt5g" data-path="pages/About.js">Nuestra Visión</h2>
            <p data-id="a9uih6dc4" data-path="pages/About.js">{aboutContent.vision}</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6" data-id="m5huprlv5" data-path="pages/About.js">
            <div className="text-primary text-3xl mb-4" data-id="vuu4em6mu" data-path="pages/About.js">
              <i className="fas fa-star" data-id="kq794mo9q" data-path="pages/About.js"></i>
            </div>
            <h2 className="text-xl font-bold mb-3" data-id="8mzxgcxzy" data-path="pages/About.js">Nuestros Valores</h2>
            <ul className="list-disc pl-5" data-id="ohxjy14uv" data-path="pages/About.js">
              {aboutContent.values.map((value, index) =>
              <li key={index} className="mb-1" data-id="gazlhnwke" data-path="pages/About.js">{value}</li>
              )}
            </ul>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="mb-8" data-id="yd37y9cmh" data-path="pages/About.js">
          <h2 className="text-2xl font-bold text-center mb-8" data-id="e14uciwsp" data-path="pages/About.js">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-6" data-id="3rlnx8qa0" data-path="pages/About.js">
            {aboutContent.team.map((member, index) =>
            <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center" data-id="hjnib5cdp" data-path="pages/About.js">
                <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" data-id="h75t2ft69" data-path="pages/About.js" />

                <h3 className="font-bold text-lg" data-id="qdjwxptnz" data-path="pages/About.js">{member.name}</h3>
                <p className="text-gray-600" data-id="vgwbm1qtz" data-path="pages/About.js">{member.position}</p>
              </div>
            )}
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="bg-gray-50 rounded-lg p-8 mb-8" data-id="x2n2wm5rp" data-path="pages/About.js">
          <h2 className="text-2xl font-bold text-center mb-8" data-id="etf36qeq6" data-path="pages/About.js">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-6" data-id="0go2nz75z" data-path="pages/About.js">
            <div className="flex" data-id="4mvn6ulqh" data-path="pages/About.js">
              <div className="text-primary text-2xl mr-4" data-id="fk5ugrb6g" data-path="pages/About.js">
                <i className="fas fa-check-circle" data-id="wczsmx943" data-path="pages/About.js"></i>
              </div>
              <div data-id="wh87kvqfp" data-path="pages/About.js">
                <h3 className="font-bold mb-2" data-id="ynnfpwkib" data-path="pages/About.js">Amplio Catálogo</h3>
                <p data-id="j0o045io6" data-path="pages/About.js">Ofrecemos una extensa variedad de autopartes para todas las marcas y modelos de vehículos.</p>
              </div>
            </div>
            
            <div className="flex" data-id="9ue4o2qbk" data-path="pages/About.js">
              <div className="text-primary text-2xl mr-4" data-id="rc7lngzmr" data-path="pages/About.js">
                <i className="fas fa-check-circle" data-id="61p6jyqnl" data-path="pages/About.js"></i>
              </div>
              <div data-id="40bbc979u" data-path="pages/About.js">
                <h3 className="font-bold mb-2" data-id="z127w2r74" data-path="pages/About.js">Asesoramiento Técnico</h3>
                <p data-id="l1zpgrqn2" data-path="pages/About.js">Nuestro equipo de especialistas le ayudará a encontrar exactamente lo que necesita.</p>
              </div>
            </div>
            
            <div className="flex" data-id="fvex2p3ke" data-path="pages/About.js">
              <div className="text-primary text-2xl mr-4" data-id="2k10b9uta" data-path="pages/About.js">
                <i className="fas fa-check-circle" data-id="jlj32qiww" data-path="pages/About.js"></i>
              </div>
              <div data-id="j6m3i44is" data-path="pages/About.js">
                <h3 className="font-bold mb-2" data-id="janv46pyw" data-path="pages/About.js">Respuesta Inmediata</h3>
                <p data-id="88yvxnqmr" data-path="pages/About.js">Atendemos sus consultas por WhatsApp de manera rápida y eficiente.</p>
              </div>
            </div>
            
            <div className="flex" data-id="ajsqr88x2" data-path="pages/About.js">
              <div className="text-primary text-2xl mr-4" data-id="erbvh9pzj" data-path="pages/About.js">
                <i className="fas fa-check-circle" data-id="sx8ezjfd1" data-path="pages/About.js"></i>
              </div>
              <div data-id="hi8sm5vgr" data-path="pages/About.js">
                <h3 className="font-bold mb-2" data-id="g8lpa6bfx" data-path="pages/About.js">Calidad Garantizada</h3>
                <p data-id="7g13mun7g" data-path="pages/About.js">Trabajamos con las mejores marcas y proveedores para asegurar productos de calidad.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-primary text-white rounded-lg p-8 text-center" data-id="l8xha6kub" data-path="pages/About.js">
          <h2 className="text-2xl font-bold mb-4" data-id="1bmz60xlf" data-path="pages/About.js">¿Listo para encontrar la pieza que necesita?</h2>
          <p className="mb-6" data-id="mwlzejqwq" data-path="pages/About.js">Explore nuestro catálogo o contáctenos directamente para una atención personalizada</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4" data-id="shidhrn8q" data-path="pages/About.js">
            <ReactRouterDOM.Link to="/catalogo" className="btn bg-white text-primary hover:bg-gray-100" data-id="5nx30sei3" data-path="pages/About.js">
              Ver Catálogo
            </ReactRouterDOM.Link>
            <a
              href={`https://wa.me/${whatsappConfig.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hola, quisiera información sobre sus productos.")}`}
              className="btn btn-whatsapp"
              target="_blank"
              rel="noopener noreferrer" data-id="dkfydlbfp" data-path="pages/About.js">

              <i className="fab fa-whatsapp mr-2" data-id="08a31c33e" data-path="pages/About.js"></i>
              Contáctenos
            </a>
          </div>
        </section>
      </div>
    </div>);

}