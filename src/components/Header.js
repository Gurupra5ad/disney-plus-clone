import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>
            <Logo src="/images/logo.svg" />
            <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src="data:image/jpeg;base64,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" />
        </Nav>
    );
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background: #090b13;
    display:flex;
    align-items:center;
    padding:0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width:80px;
`

const NavMenu = styled.div`
    display:flex;
    flex:1;
    margin-left:25px;
    align-items:center;

    a{
        display:flex;
        align-items:center;
        padding:0 12px;
        cursor:pointer;
        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:right center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94)0s;
                transform:scaleX(0);
            }
        }
        &:hover { 
            span:after{
                transform:scaleX(1);
                opacity:1;
            }
        }
    }
`

const UserImg = styled.img`
    width:48px;
    height:48px;
    border-radius:50%;
    cursor:pointer;
`


