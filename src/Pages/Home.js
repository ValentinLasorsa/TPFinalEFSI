/* eslint-disable jsx-a11y/anchor-is-valid */
const Home = () => {
  return (
    <>
      <body data-spy="scroll" data-target="#navbar" class="static-layout">
        <div class="jumbotron d-flex align-items-center">
          <div class="container text-center">
            <h1 class="display-1 mb-4">PORTFOLIO</h1>
            <h2 >by MATIAS MAKISHI & VALEN LASORSA & NACHO SALIP</h2>
          </div>
          <div class="rectangle-1"></div>
          <div class="rectangle-2"></div>
          <div class="rectangle-transparent-1"></div>
          <div class="rectangle-transparent-2"></div>
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-3"></div>
          <div class="triangle triangle-1">
            <img src="img/obj_triangle.png" alt="" />
          </div>
          <div class="triangle triangle-2">
            <img src="img/obj_triangle.png" alt="" />
          </div>
          <div class="triangle triangle-3">
            <img src="img/obj_triangle.png" alt="" />
          </div>
          <div class="triangle triangle-4">
            <img src="img/obj_triangle.png" alt="" />
          </div>
        </div>

        <section id="features" class="bg-white">
          <div class="container">
            <div class="section-content">
              <div class="title-wrap mb-5" data-aos="fade-up">
                <h2 class="section-title">
                  LA MEJOR GALERÍA DE MÚSICA
                </h2>
              </div>
              <div class="row">
                <div class="col-md-10 offset-md-1 features-holder">
                  <div class="row">
                    <div class="col-md-4 col-sm-12 text-center mt-4">
                      <div
                        class="shadow rounded feature-item p-4 mb-4"
                        data-aos="fade-up"
                      >
                        <div class="my-4">
                          <i class="lnr lnr-cog fs-40"></i>
                        </div>
                        <h4>Artistas de todo el mundo</h4>
                        <p>
                          Escucha música de todo el mundo
                        </p>
                      </div>
                      <div
                        class="shadow rounded feature-item p-4 mb-4"
                        data-aos="fade-up"
                      >
                        <div class="my-4">
                          <i class="lnr lnr-frame-contract fs-40"></i>
                        </div>
                        <h4>24 Hrs</h4>
                        <p>
                          Escucha nuevos lanzamientos en tiempo real y a pocos minutos de haber salido
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center">
                      <div
                        class="shadow rounded feature-item p-4 mb-4"
                        data-aos="fade-up"
                      >
                        <div class="my-4">
                          <i class="lnr lnr-bubble fs-40"></i>
                        </div>
                        <h4>Escucha música offline</h4>
                        <p>
                          Puedes pre-descargar cualquie canción en formato .mp3
                        </p>
                      </div>
                      <div
                        class="shadow rounded feature-item p-4 mb-4"
                        data-aos="fade-up"
                      >
                        <div class="my-4">
                          <i class="lnr lnr-magic-wand fs-40"></i>
                        </div>
                        <h4>Diseño intuitivo</h4>
                        <p>
                          Una interfaz fácil e intuitiva para todos
                        </p>
                      </div>
                    </div>
                    <div class="col-md-4 col-sm-12 text-center mt-4">
                      <div
                        class="shadow rounded feature-item p-4 mb-4"
                        data-aos="fade-up"
                      >
                        <div class="my-4">
                          <i class="lnr lnr-clock fs-40"></i>
                        </div>
                        <h4>+1M</h4>
                        <p>
                          más de 1 millon de usuaios por mes
                        </p>
                      </div>
                      <div
                        class="shadow rounded feature-item p-4 mb-4"
                        data-aos="fade-up"
                      >
                        <div class="my-4">
                          <i class="lnr lnr-thumbs-up fs-40"></i>
                        </div>
                        <h4>Sitio web</h4>
                        <p>
                          Se utilizo principalmente javascript
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="section-featurettes" class="featurettes overlay bg-fixed" style={{ backgroundImage: `url(img/bg.jpg)`}}>

        <div class="container">
            <div class="section-content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="row align-items-center text-white">
                            <div class="col-md-4 offset-md-2 col-sm-6" data-aos="fade-right">
                            <h4 class="mb-4">Capture every moments and share it to all your friends</h4>
                            <p>Nulla vitae elit libero, a pharetra augue. Maecenas sed diam eget risus varius blandit sit amet non magna. Cras mattis consectetur purus sit amet.</p>
                            <button type="button" class="btn btn-outline-primary">FEATURES</button>
                        </div>
                        <div class="col-md-4 offset-md-right-2 col-sm-6" data-aos="flip-right">
                            <img class="my-5" src="img/app-profile-mockup.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</body>
</>
  );
};

export default Home;
