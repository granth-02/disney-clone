import styled from "styled-components";
import Bg from "../images/home-background.png"
import ImgSlider from "./imageSlider";
import Viewers from "./Viewers";
import Reccomends from "./Reccomends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trendings";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import db from '../firebase';
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/userSlice";
import { onSnapshot, collection } from "firebase/firestore";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisney = [];
  let originals = [];
  let trending = [];
  useEffect(() => {
    console.log("hello")
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
        snapshot.docs.forEach((doc) => {
            console.log(recommends)
            switch (doc.data().type) {
              case "recommend":
                recommends.push({ id: doc.id, ...doc.data() });
                break;
              case "new":
                newDisney.push({ id: doc.id, ...doc.data() });
                break;
              case "original":
                originals.push({ id: doc.id, ...doc.data() });
                break;
              case "trending":
                trending.push({ id: doc.id, ...doc.data() });
                break;
              
            }
          });

          dispatch(
            setMovies({
              recommend: recommends,
              newDisney: newDisney,
              original: originals,
              trending: trending,
            })
          );
        
          
        });
      
        return unsubscribe;
      }, [userName]);


    return(
        
        <Container>
            <ImgSlider />
            <Viewers />
            <Reccomends />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
        
    )
}

// Styling

const Container = styled.main`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    top: 72px;

    &:after{
        background: url(${Bg}) center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        inset: 0px;
        opacity: 1;
        z-index: -1;
    }
`







export default Home;