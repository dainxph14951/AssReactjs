import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='container-fuild'>
      {/* Trending Now */}
      <div className="row p-5">
        <h2 className='text-center p-2'>New Products</h2>
        <div className="col mt-2">
          <div className="card" style={{ width: '18rem' }}>
            <img src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <span>Giá: 245VNĐ</span>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">Card link</a>
              <a href="#" className="card-link">Another link</a>
            </div>
          </div>

        </div>

      </div>
            {/* Danh mục */}
            <div className="row-root-2ni departments-wrapper mt-5">
        <div className="row-contained-LS3">
          <div className="wrapper">
            <div className="row-contained-LS3 departments desktop">
              <div style={{ padding: '0px 50px 17px', display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                <div>
                  <style dangerouslySetInnerHTML={{ __html: "\n        main .departments-wrapper:after {\n          max - width: 1440px;\n        position: relative;\n        align-self: center;\n    }\n\n        main .departments-wrapper .departments-circle-wrapper:hover img {\n          filter: brightness(80%) contrast(130%);\n    }\n        .departments-wrapper .departments-circle-wrapper img {\n          transition: filter 200ms ease-out;\n\n        width: 100%;\n        height: auto;\n        max-width: 150px;\n        max-height: 150px;\n    }\n        .departments-wrapper .departments-circle-wrapper a {\n          display: block;\n        padding-bottom: 20px;\n    }\n\n        main .departments-wrapper .departments-circle-wrapper:hover button.btn:after {\n          width: 100%;\n    }\n        main .departments-wrapper .departments-circle-wrapper button.btn:after {\n          -ms - transition: none;\n        -moz-transition: none;\n        -webkit-transition: none;\n        content: \"\";\n        position: absolute;\n        height: 2px;\n        width: 0;\n        bottom: -6px;\n        left: 0;\n        background: #4a4a4a;\n    }\n        main .departments-wrapper .departments-circle-wrapper button.btn {\n          color: #4a4a4a;\n        font-family: -apple-system, system-ui, BlinkMacSystemFont, segoe ui, Roboto, helvetica neue, Arial, sans-serif;\n        font-weight: 500;\n        font-size: 15px;\n    }\n\n        @media screen and (min-width: 1440px) {\n          main.departments - wrapper.departments.desktop {\n          width: 1300px;\n        }\n    }\n\n        @media screen and (min-width: 768px) and (max-width: 1280px) {\n        .departments - wrapper.departments.desktop > div {\n          margin: 0 auto !important;\n        padding-right: 20px !important;\n        padding-left: 20px !important;\n        }\n    }\n      " }} />
                </div>
                <div className="columnGroup-root-1P5" style={{ display: 'flex' }}>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Baume Mercier</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Breitling</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Cartier</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Citizen</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Hamilton</button>
                    </div>
                    </div>
                  </div>
                  <div className="column-root-1Gk pagebuilder-column departments-circle-wrapper" style={{ textAlign: 'center', width: '16.6667%' }}>
                    <div style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0, margin: 0, padding: 0 }}>
                      <a href="/watches-for-men.html">
                        <img loading="lazy" alt="watches for men" src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" title="watches for men" style={{ borderWidth: 1, borderStyle: 'none', borderImage: 'initial', borderRadius: 0 }} width={150} height={150} />
                      </a></div>
                    <div className="buttons-root-3W5 buttons-inline-1H1" style={{ justifyContent: 'flex-start' }}><div>
                      <button type="button" className="btn bg-secondary text-white" style={{ textAlign: 'center', justifyContent: 'center' }}>Hublot</button>
                    </div>
                    </div>
                  </div>


                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
  <hr />

      <div className="row text-center px-3 py-3">
      <h2 className='text-center p-2'>News</h2>
        <div className="col-lg-4">
          <a href=""><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" alt="" /></a>
          <br />
          <br /><p className=''>JOMASHOP PROMISE</p>
          <h5 className='p-2'>WARRANTY INCLUDED</h5>
          <p><a className="btn  btn-secondary" href="#">View details »</a></p>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
          <a href=""><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" alt="" /></a>
          <br />
          <br /><p className=''>ASSURANCE OF BUYING</p>
          <h5 className=''>AUTHENTICITY GUARANTEED</h5>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>{/* /.col-lg-4 */}
        <div className="col-lg-4">
          <a href=""><img className="bd-placeholder-img rounded-circle" width={140} height={140} src="https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_590,c_limit/e10fa75a-d5dc-42d1-b3d9-d9348f37bd8c/nike-just-do-it.png" alt="" /></a>
          <br />
          <br /><p className=' '>EXPERT GUIDANCE</p>
          <h5 className=''>FAST & EASY RETURNS</h5>
          <p><a className="btn btn-secondary" href="#">View details »</a></p>
        </div>{/* /.col-lg-4 */}
      </div>







    </div>
  )
}

export default HomePage