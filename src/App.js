import Book from "./components/Book"

const App = () => {
  const books = [
    {
      id: 1,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/425944388/3.jpg",
      title: "Five Nights at Freddy's 1: Stříbrné oči",
      published: 2018,
      description: "Deset let po strašlivých vraždách v pizzerii Freddyho Fazbeara, které vyděsily celé město, se Charlie, dcera majitele restaurace, a její přátelé z dětství vrací na místo činu. Sešli se přesně na výročí tragédie a opět otevírají dveře prokleté pizzerie, která byla celé dlouhé roky opuštěná. Jakmile se však ocitnou uprostřed restaurace, uvědomí si, že se něco změnilo. Čtyři maskoti, kteří kdysi bavili návštěvníky pizzerie, se změnili.",
      price: 330,
    },
    {
      id: 2,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/380765479/freddy-titulka-velka2.jpg",
      title: "Five Nights at Freddy 2: Znetvoření",
      published: 2019,
      description: "Uplynul rok od děsivých událostí v Freddy Fazbear's Pizza a Charlie se jen snaží jít dál. I přes vzrušení z nové školy a nový začátek jí stále pronásledují noční můry maskovaného vraha a čtyř děsivých animatronických loutek. Charlie si myslí, že její utrpení skončilo, ale když je poblíž její školy objevena řada těl nesoucích rány, které jsou znepokojivě známé, ocitne se vtažena zpět do světa děsivých výtvorů jejího otce.",
      price: 345,
    },
    {
      id: 3,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/f/five-nights-at-freddy-s-ctvrta-satna-9788076832183_11.png",
      title: "Five Nights at Freddy 3: Čtvrtá šatna",
      published: 2020,
      description: "Co se doopravdy stalo s Charlie? To je otázka, která Johna stále trápí – spolu s nočními můrami o jejím zmizení a zázračném znovuzjevení. Nejraději by na všechny příšerné zážitky spojené s pizzerií Freddyho Fazbeara zapomněl, jenže minulost se jen tak pohřbít nedá. Mezitím se v Hurricane koná otevření nové pizzerie s animatronickými loutkami, které doprovází nová vlna únosů. A ty jsou až děsivě povědomé.",
      price: 360,
    },
    {
      id: 4,
      image: "https://www.knihydobrovsky.cz/thumbs/book-detail-fancy-box/mod_eshop/produkty/f/five-nights-at-freddy-s-do-jamy-9788076834125_2.jpg",
      title: "Five Nights at Freddy's: Do jámy",
      published: 2021,
      description: "Co si přejete ze všeho nejvíc? Oswald, Sára a Millie si myslí, že na tuhle otázku znají odpověď. Oswald si přeje, aby jeho léto nebylo tak nudné, Sára touží být krásná a Millie by nejradši prostě zmizela z povrchu zemského. Ve zvráceném světě Five Nights at Freddy's ale budou mít jejich nejniternější touhy nečekanou cenu. Trojice vražedně napínavých vyprávění pořádně otřese i těmi nejotrlejšími fanoušky strašidelných příběhů!",
      price: 349,
    },
  ]

  return (
    <div className="all-books">
    <Book 
      image={books[0].image} 
      title={books[0].title} 
      published={books[0].published}
      description={books[0].description}
      price={books[0].price}
    />
    <Book 
      image={books[1].image} 
      title={books[1].title} 
      published={books[1].published}
      description={books[1].description}
      price={books[1].price}
    />
    <Book 
      image={books[2].image} 
      title={books[2].title} 
      published={books[2].published}
      description={books[2].description}
      price={books[2].price}
    />
    <Book 
      image={books[3].image} 
      title={books[3].title} 
      published={books[3].published}
      description={books[3].description}
      price={books[3].price}
    />
  </div>
  )
}

export default App

// komponenta je obyčejná js funkce
// komponenta má stejný název jako je název souboru
// komponenta obsahuje return
// na konci souboru musí být řádek s exportem
// v return musí něco být
// return dokáže vrátit jen jeden tag