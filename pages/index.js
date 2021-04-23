import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import CardTop from "components/items/CardTop";
import CardType from "components/items/CardType";

//Impor data
import { section1, section2 } from "data/info";

export default function Home() {
  return (
    <>
      <div className="container">
        <Header title="el heraldo" />

        <div className="content pt-2">
          <section>
            <div className="row justify-content-between">
              {section1.map((data) => (
                <CardTop
                  title={data.title}
                  img={data.img}
                  content={data.content}
                />
              ))}
            </div>
          </section>

          <section>
            <div className="justify-content-between">
              {section2.map((data) => (
                <CardType
                  title={data.title}
                  img={data.img}
                  content={data.content}
                />
              ))}
            </div>
          </section>
        </div>

        <Footer />
      </div>

      <style jsx global>{`
        p {
          text-align: justify;
        }
      `}</style>
    </>
  );
}
