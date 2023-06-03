import { Outlet } from "react-router-dom";
import Nav from "../../main/Nav";
import { useEffect } from "react";


export default () => {

    // useEffect(() => {
    //     popup
    //     ? document.body.classList.remove("fixed")
    //     : document.body.classList.add("fixed");
    // }, [popup]);
    return (
        <>
        {/* 헤더 */}
        <Nav/>
        {/* 컨텐츠 */}
        <Outlet/>
        {/* 푸터 */}
        </>
    );
}