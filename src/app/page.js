import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-16" id="about">
        <SectionHeaders
          subHeader={'Our story'}
          mainHeader={'About us'}
        />
        <div className="text-gray-500 max-w-md mx-auto mt-4 flex flex-col gap-4">
          <p>
          Presentamos BiciFlex, tu nueva manera de movilizarte. BiciFlex es una aplicación innovadora que le brinda un fácil alcance a una bicicleta en cualquier lugar que lo necesite, cuenta con una amplia gama de opciones específicas de bicicletas para ejercicios, transporte y competencias entre muchas otras. 

            BiciFlex tiene como objetivo ayudar a encontrar la bicicleta perfecta de manera fácil y segura, ya que la reserva se realiza directamente con el proveedor y la bicicleta se entrega a tiempo

          </p>
      
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-gray-500" href="tel:+46738123123">
            +51 987 654 321
          </a>
        </div>
      </section>
    </>
  )
}
