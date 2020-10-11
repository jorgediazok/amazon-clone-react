import React from 'react'
import Product from "./Product"
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="banner"/>
      <div className="home__row">
      <Product id="12321341" title="The Lean Startup: Radically Succesfull Businessess Paperback" price={11.96} rating={5} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
      <Product id="12321342" title="Kenwood kMix Stand Mixer for Baking. Stylish Kitchen Mixer with K-beater." price={239} rating={4} image="https://www.220-electronics.com/media/catalog/product/k/e/kenwood-kmix-kmx51-mixer--up.jpg" />
      </div>
      <div className="home__row">
      <Product id="12321343" title="Samsung LC49RG90SSUXEN 49 Curved LED Gaming Monitor" price={499.99} rating={5} image="https://image-us.samsung.com/SamsungUS/home/computing/monitors/gaming-monitors/pdp/lc49hg90dmnxza/gallery/09142017/CHG90-NEW_2.jpg?$product-details-jpg$" />
      <Product id="12321344" title="Amazon Echo | Smart speaker Alexa" price={98.99} rating={3} image="https://lh3.googleusercontent.com/proxy/HfKtv7Bu_kCiIhGqqMzJ_QVdPPzc3MgHgA4G4Rd6QvQ1Th9Kmqkpoi8NdIeihkooWb7MOCtF2cuK01PtTt6yZF17t7fdjQ2WaMGv77FlASc_-UGT0VJwRZ8sirYezMhiMYs" />
      <Product id="12321345" title="New Apple Ipad Pro | Ipad Apple." price={399.99} rating={5} image="https://assets.kogan.com/files/product/etail/Apple-/KHIPP1291864CSIL_1.jpg?auto=webp&canvas=753%2C502&fit=bounds&height=502&quality=75&width=753" />
      </div>
      <div className="home__row">
      <Product id="12321346" title="Sony Playstation 5. New and with 2 games and 2 joysticks. 2021 console." price={699.99} rating={5} image="https://media.malditosnerds.com/p/a724dfffe0300747163b4282d3320a44/adjuntos/290/imagenes/000/070/0000070133/ps5-digital-boxjpg.jpg" />
      </div>
    </div>
  )
}

export default Home
