import styled from "styled-components";
import headimg from '../images/logo.svg'
import homeimg from '../images/home-icon.svg'
import searchimg from '../images/search-icon.svg'
import watchimg from '../images/watchlist-icon.svg'
import oriimg from '../images/original-icon.svg'
import movieimg from '../images/movie-icon.svg'
import seriesimg from '../images/series-icon.svg'
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserEmail, selectUserName, selectUserPhoto, setSignOutState, setUserLoginDetails } from "../features/userSlice";
import { useEffect } from "react";

const Header = (props) => {
    const dispatch = useDispatch();
    const history = useNavigate();
    const userName = useSelector(selectUserName);
    const userEmail = useSelector(selectUserEmail)
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            history("/home");
          }
        });
      }, [userName]);
      

    const handleAuth = () => {
        if(!userName){
            
            signInWithPopup(auth,provider)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                alert(error.messsage);
            }
            )
        }
        else if(userName){
            auth
                .signOut().then(() => {
                    dispatch(setSignOutState());
                    history('/')
                    
                })
        }
        
    };
    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photo
            })
        )
    }
    return(
        <Nav>
            <Logo>
                <Helog src = {headimg} />
            </Logo>
            
            {!userName ? (
            <Login onClick={handleAuth}>Login</Login>
             ) : (
             <>

            <NavMenu>
                <a href="/home">
                    <Homeim src= {homeimg} />
                    <span>Home</span>
                </a>
                <a>
                    <Homeim src= {searchimg} />
                    <span>Search</span>
                </a>
                <a>
                    <Homeim src= {watchimg} />
                    <span>Watchlist</span>
                </a>
                <a>
                    <Homeim src= {oriimg} />
                    <span>Originals</span>
                </a>
                <a>
                    <Homeim src= {movieimg} />
                    <span>Movies</span>
                </a>
                <a>
                    <Homeim src= {seriesimg} />
                    <span>Series</span>
                </a>
                
            </NavMenu>
            <SignOut>
                <UserNm>
                    <h1>{userName}</h1>
                    <DropDown>
                        <span onClick={handleAuth}>Sign Out</span>
                    </DropDown>
                </UserNm>
            </SignOut>
            </>
            )}
            

        </Nav>
    )
}


// Styling

const Nav = styled.nav`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 70px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    z-index: 3;
    letter-spacing: 16px;
`

const Logo = styled.a`
    padding: 0;
    margin-top: 4px;
    max-height: 70px;
    font-size: 0;
    display: inline-block;
    img{
        display: block;
        
    }
    

`

const Helog = styled.img`
    width: 90px;
`

const Homeim = styled.img`
    height: 20px;
    min-width: 20px;
    width: 25px;
    z-index: auto;
`

const NavMenu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
    

    

    span{
        color: rgb(249, 249, 249);
        font-size: 16px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;

        &:before{
            background-color: rgb(249, 249, 249);
            border-radius: 0px 0px 4px 4px;
            bottom: -6px;
            content: "";
            height: 2px;
            left: 0px;
            opacity: 0;
            position: absolute;
            right: 0px;
            transform-origin: left center;
            transform: scaleX(0);
            transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            visibility: hidden;
            width: auto;
        }
    }

    &:hover{
        span:before{
            transform: scaleX(1);
            visibility: visible;
            opacity: 1;
            
            
        }
    }
}
    
    


    @media (max-width: 768px) {
        display: none;
    }
`

const Login = styled.a`
    background-color: #090b13;
    padding: 14px 20px;
    text-transform: capitalize;
    letter-spacing: 1.5px;
    border: 1px solid white;
    border-radius: 4px;
    transition: all 0.2s ease 0s;

    &:hover {
        background-color: #f9f9f9;
        color : #000;
        border-color: transparent;
    }

`

const UserNm = styled.h1`
    letter-spacing: normal;
    font-size: 16px;

    
`

const DropDown = styled.div`
    top: 48px;
    position: absolute;
    right: 0px;
    background: rgb(19, 19, 19);
    border: 1px solid rgba(151, 151, 151, 0.34);
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    padding: 10px;
    font-size: 14px;
    letter-spacing: 1px;
    width: 89px;
    opacity: 0;

    &:hover{
        
        opacity: 1;
        transition-duration: 1s;
    }
`

const SignOut = styled.div`

`

export default Header;