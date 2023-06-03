import React from "react";

export default function SignUp({email, setOnModal}) {

    const CloseOnClick = () => {
        setOnModal(0)
    }

    return(
        <>
            <div className="modal-overlay">
                <div className="modal-window">
                    <div className="close-area" onClick={CloseOnClick}>X</div>
                    
                    <div className="name_label">
                        <label>이메일</label>
                    </div>
                    <div className="name_input">
                        <input type="email" value={email} placeholder=""/>
                    </div>
                    <div className="name_label">
                        <label>이름</label>
                    </div>
                    
                    <div className="name_input">
                        <input type="name" placeholder="이름을 입력해주세요."/>
                    </div>

                    <div className="phonenumber_label">
                        <label>휴대폰 번호</label>
                    </div>

                    <div className="phonenumber_country">
                        대한민국 +82
                    </div>
                    <div className="certify">
                        <div className="phonenumber_input">
                            <input type="phonenumber" placeholder="(예시) 01012345678"/>
                        </div>
                        <button type="button" className="certify_run">
                            <span color="var(--theme-palette-colors-black-100)">인증번호 받기</span>
                        </button>
                    </div>
                    <div className="number_input">
                        <input type="input" color="var(--theme-palette-colors-black-100)" placeholder="인증번호를 입력해주세요."/>
                    </div>
                    
                    <div className="password_label" style={{marginTop:30}}>
                        <label>비밀번호</label>
                    </div>
                    <div className="password_input">
                        <input type="name" placeholder="비밀번호를 입력해주세요."/>
                    </div>
                    <div className="password_label2">
                        <label>영문 대소문자, 숫자, 특수문자를 3가지 이상으로 포함하여 8자 이상 입력해 주세요.</label>
                    </div>



                    <div className="join_button">
                        <button type="submit">
                            <span color="var(--theme-palette-colors-black-100)">회원가입하기</span>
                        </button>
                    </div>
                    


            
                </div>


            </div>
        
        </>
    )
}