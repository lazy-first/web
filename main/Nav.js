import React, {useState} from 'react';
import './Nav.css'
import Modal from '../modal/Modal';
import { useEffect } from 'react';

export default function HeaderNav(){
    const [onModal, setOnModal] = useState(0);
    const [isLogin, setIsLogin] = useState(false);
    console.log(onModal);

    const localId = localStorage.getItem("logIn");    

    useEffect(()=>{
        if(localId === null){
            setIsLogin(false);
        }else{
            setIsLogin(true);
        }
    }, [onModal]);  
    //null을 쓸필요 없이 !로 표기하거나, if (localId)로 써도 true이므로
    // if (localId) true false 순으로 써주면 더 간결하고 좋을듯

    const logOut = ()=>{
        localStorage.clear();
        setIsLogin(false);
    }

    return(
        <>
            <Modal onModal={onModal} setOnModal={setOnModal}/>
            <nav className= "header">
                <div className="header_wrap">
                    <div className="wrap1 wrap">
                        <div className="content">
                            {/* <!-- menu --> */}
                            <div className="header_logo">
                                <button>
                                    <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Ficon-menu.png&amp;w=17&amp;q=75" alt="menu" height="14px" width="17px" style={{objectFit:"contain"}}/>
                                </button>
                            </div>
                            {/* <!-- wanted  --> */}
                            <div className="header_wanted">
                                <a href="/">
                                    <svg width="74" height="21" viewBox="0 0 140 32"><path fill="currentColor" d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"></path>
                                        <path fill="currentColor" d="M89.8 2.2l-5.6 2.4v4.8h-3.8v5.2h3.8v10.2c0 4.2 2.6 7 6.6 7 1.6 0 2.6-.4 3.2-.6V26c-.2 0-1 .2-1.8.2-1.6 0-2.4-.6-2.4-2.6v-8.8H94V9.6h-4.2V2.2zM28.6 9.6l-4 14-4.6-14h-5.6l-4.6 14L6 9.6H0l6.8 21.8h6l4.4-14.6 4.6 14.6h6l6.8-21.8zM134.4 2.2v8.6c-1.4-1-3-1.6-4.8-1.8h-.4-1.6c-5 .4-8.2 4.2-9.2 9-.2.8-.2 1.4-.2 2.2V22c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.4V0l-5.4 2.2zm-5.2 24.4c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM116.2 18c-.8-5.2-4.6-9-10-9s-9.2 3.8-10 9c-.2.8-.2 1.6-.2 2.6v1.6c.6 5.6 4.4 10 10.2 10 4.6 0 8-2.8 9.4-6.8l-5-1.2c-.8 1.8-2.4 3.2-4.4 3.2-2.8 0-4.6-2.2-5-5.2h15.2v-1.6c0-1 0-1.8-.2-2.6zm-14.8 0c.8-2.2 2.4-3.6 4.8-3.6s4 1.6 4.8 3.6h-9.6zM50.6 11c-1.4-1-3.2-1.8-5.2-1.8H44.8h-.6c-5.2.4-8.6 4-9.4 9-.2.8-.2 1.4-.2 2.2v1.8c.6 5.6 4.4 10 10.2 10 2.4 0 4.4-.6 6-1.8v1.4h5.6V9.6h-5.6V11zm-5.2 15.6c-3 0-5.6-2.4-5.6-6.2 0-4 2.6-6.2 5.6-6.2s5.2 2.2 5.2 6c0 4.2-2.2 6.4-5.2 6.4zM71.2 9c-2.2 0-4.6 1-6 3.2V9.6h-5.6v21.8h5.6V18.8c0-2.6 1.4-4.6 4-4.6 2.8 0 3.8 2 3.8 4.4v12.8h5.6V17.6c.2-4.8-2.2-8.6-7.4-8.6z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="wrap2 wrap">
                        <div className="content">
                            <ul>
                                <li><a href="/WdList">채용</a></li>
                                <li><a href="#">이벤트</a></li>
                                <li><a href="#">직군별 연봉</a></li>
                                <li><a href="#">이력서</a></li>
                                <li><a href="#">커뮤니티</a></li>
                                <li><a href="#">프리랜서</a></li>
                                <li><a href="#">AI 합격예측</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="wrap3 wrap">
                        <div className="content">
                            <ul>
                                <li>
                                    <a className="searchbutton">
                                        <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                            <defs>
                                                <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                                            </defs>
                                            <g fill="none" fill-rule="evenodd">
                                                <use fill="#333" fill-rule="nonzero" stroke="#333" stroke-width=".3"></use>
                                            </g>
                                            <path id="qt2dnsql4a" d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    {
                                        !isLogin &&
                                            <button className="loginbutton" onClick={() => setOnModal(1)}>
                                                회원가입/로그인
                                            </button>
                                    }
                                    {
                                        isLogin && 
                                            <a className="servicebutton" onClick={logOut}>
                                                로그아웃
                                            </a>
                                    }
                                </li>
                                <li>
                                    <a className="servicebutton" >
                                        기업 서비스
                                    </a>

                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </nav>

        
        </>
    )

}
