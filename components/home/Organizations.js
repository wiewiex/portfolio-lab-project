import style from "../../styles/home/Organizations.module.scss";
import firebaseApp from "../../firebase.config";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";

export default function Organizations() {
  const db = getFirestore(firebaseApp);
  const [fetchedData, setFetchedData] = useState(null);
  const [currentList, setCurrentList] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    async function getData() {
      const querySnapshot = await getDocs(collection(db, "data"));
      querySnapshot.forEach((doc) => {
        setFetchedData(doc.data());
      });
    }

    getData();
  }, []);

  const setActiveList = (e) => {
    document.querySelector(".activeList").classList.remove("activeList");
    e.target.classList.add("activeList");
    setCurrentList(fetchedData[e.target.id]);

    //hide number of page

    if (e.target.id == "foundations") {
      document.getElementById("page1").style.display = "inline";
      document.getElementById("page2").style.display = "inline";
      document.getElementById("page3").style.display = "inline";
    }

    if (e.target.id == "organizations") {
      document.getElementById("page1").style.display = "inline";
      document.getElementById("page2").style.display = "inline";
      document.getElementById("page3").style.display = "none";
    }

    if (e.target.id == "fundraisings") {
      document.getElementById("page1").style.display = "inline";
      document.getElementById("page2").style.display = "none";
      document.getElementById("page3").style.display = "none";
    }
  };

  const setActivePage = (e) => {
    // currentList.slice(currentPage *3, currentPage * 3 + 3)

    document.querySelector(".activePage").classList.remove("activePage");
    e.target.classList.add("activePage");

    if (e.target.id == "page1") {
      setCurrentPage([currentList[0], currentList[1], currentList[2]]);
    }

    if (e.target.id == "page2") {
      setCurrentPage([currentList[3], currentList[4], currentList[5]]);
    }

    if (e.target.id == "page3") {
      setCurrentPage([currentList[6], currentList[7], currentList[8]]);
    }
  };

  //autostart

  useEffect(() => {
    if (fetchedData) {
      setCurrentList(fetchedData.foundations);
    }
  }, [fetchedData]);

  useEffect(() => {
    if (currentList) {
      document.getElementById("page1").click();
    }
  }, [currentList]);

  // const aRef = useRef()

  // console.log(aRef.current);
  return (
    <section
      id="fundacja_i_organizacje"
      className={style.organizationsContainer}
    >
      <div className={style.topBox}>
        <h2>Komu pomagamy ?</h2>
        <img src="/assets/Decoration.svg" />
        <nav>
          <a id="foundations" onClick={setActiveList} className="activeList">
            Fundacjom
          </a>
          <a id="organizations" onClick={setActiveList}>
            Organizacjom pozarządowym
          </a>
          <a id="fundraisings" onClick={setActiveList}>
            Lokalnym zbiórkom
          </a>
        </nav>
        <p>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </p>
      </div>
      <div className={style.bottomBox}>
        <ul>
          {currentPage
            ? currentPage.map((el, i) => {
                return (
                  <li key={i} className={style.singleOrganization}>
                    <div className={style.leftBox}>
                      <h3>{el.name}</h3>
                      <p>{el.description}</p>
                    </div>
                    <div className={style.rightBox}>
                      <p>{el.stuff}</p>
                    </div>
                  </li>
                );
              })
            : null}
        </ul>
        <nav>
          {/* {new Array(Math.ceil(currentList.length / 3)).fill(null).map((_, i) => (
                        <li key={i} onClick={() => setActivePage(i)}>{i + 1}</li>
                    ))} */}
          <style jsx>{".activePage {border: 1px solid black;}"}</style>
          <a
            id="page1"
            className="activePage"
            onClick={setActivePage}
            // ref={aRef}
          >
            1
          </a>
          <a id="page2" onClick={setActivePage}>
            2
          </a>
          <a id="page3" onClick={setActivePage}>
            3
          </a>
        </nav>
      </div>
    </section>
  );
}
