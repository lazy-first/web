import React, { useEffect, useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getMetadata, listAll } from "firebase/storage";
import { error } from "jquery";



export default function Resume() {
    const handleFileSelect = (e) => {
        e.preventDefault(); // 이벤트 발생시 새로고침 막아줌
        const file = e.target.files[0];
        // console.log(file);
        // UploadFiles(file)   //바로 저장
        //버튼 눌렀을 때 저장하고싶으면 useState 통해서 이벤트를 불러와서 상태에 저장하고
        // onclick을 통해서 upload 파일에 보냄

        setFileInfo(file); // input - 이벤트발생 - file저장
        
    };

    const [fileInfo, setFileInfo] = useState()
    const handleOnclick = () => {
        if (fileInfo){
            UploadFiles(fileInfo)
        
    }
        
    }

    const UploadFiles = (file) => {
        //firebase에 업로드
        const storageRef = ref(storage, 'upload/'+file.name);
        
        uploadBytes(storageRef, file).then((snapshot) => {
            console.log('Uploaded a blob or file!');
          }).catch((error) => {console.error('error', error)});

    };

    const GetFiles = async() => {

        const listRef = ref(storage, 'upload');
    
        const files = await listAll(listRef);
    
        const fileInfo = await Promise.all(
          files.items.map(async (item) => {
            const metadata = await getMetadata(item);
            const created = metadata.timeCreated; 
            return {
              name: item.name,
              created: created,
            };
          })
        );
    
        return fileInfo;
    }
    

    const [viewFile, setViewFile] = useState([]) // useState초기값이 배열
    useEffect(() => {
        const asyncFileInfo = async () => {
        const files = await GetFiles();
        setViewFile(files);
      };
      asyncFileInfo();

    },[viewFile])//대괄호가 비어있으면 처음랜더링시 한번만호출

    return(
        <div className="Resume">
            <form>
                <input type="file" className="input" onChange={handleFileSelect}/>
                <button type="button" onClick={handleOnclick}>Upload</button>
            </form>
            <div>
                {viewFile.map((item, index) => (<div key={index}>
                    {item.name}
                    {item.created}
                </div>))}
            </div>
        </div>
    )
}