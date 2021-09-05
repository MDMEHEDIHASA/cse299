import React, { useEffect,useState } from 'react'
import "../css/MainBody.css"
import { Button, IconButton } from "@material-ui/core";
import StorageIcon from '@material-ui/icons/Storage'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useSelector,useDispatch} from 'react-redux'
import rc from '../images/rc.PNG'
import {Link} from 'react-router-dom'
import {updateFormAction} from '../actions/createFormAction'
import { allGenerateCodeAction} from '../actions/teacherResponseAction';

const MainBody = ({history})=>{
     
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    
    const [strs,setStrs] = useState(true)
    const [len,setlen] = useState(0);

    const dispatch = useDispatch();
    const userLogIn = useSelector((state) => state.userLogIn);
    const {userInfo} = userLogIn;
    const allGC = useSelector((state) => state.allGC);
    const { isLoading, allGenerateCode, error } = allGC;
    useEffect(()=>{
        if(userInfo.isStudent===false){
            history.push('/')
        }
        dispatch(allGenerateCodeAction())
        if(allGenerateCode.length > 1){
            setlen(allGenerateCode.length-1);
        }
    },[userInfo,dispatch,allGenerateCode])


    return(<div className='mainbody'>
        <div className="mainbody_top">
            <div className="mainbody_top--left"  style={{fontWeight:'500'}}>
                Recent Form
            </div>
            <div className="mainbody_top--right">
                <div className="mainbody_top--center" style={{fontSize:'14px',marginRight:'125px'}}>
                    Owned By {userInfo.name} <ArrowDropDownIcon/>
                </div>
                <IconButton>
                    <StorageIcon style={{color:'black'}}/>
                </IconButton>
                <IconButton>
                    <FolderOpenIcon style={{color:'black'}}/>
                </IconButton>
            </div>
        </div>
        <div className="mainbody_docs">
        <main style={{marginTop:'1rem',marginLeft:'1rem',marginRight:'1rem' ,display: "grid",gridTemplateColumns: '25rem 25rem 25rem 25rem',gridGap:'4%'}}>
      {allGenerateCode.map((agc,i) => (
          <div key={i} className="ui-cards">
            <div className="card">
              <div className="content" style={{textAlign:'center'}}>
                <div className="header">GenerateCode</div>
                <div style={{cursor:'pointer'}} onClick={()=>{
                  setStrs(!strs)
                  dispatch(updateFormAction(agc.uniqueCode,strs))
                  {strs ? alert(`Responses on for this ${agc.uniqueCode}`) : alert(`Responses off for this ${agc.uniqueCode}`) }
                console.log(strs)
                }}
                  className="description">Name:{agc.uniqueCode}</div>
              </div>
            
            </div>
          </div>
        
      ))}
      </main>
        </div>
    </div>)
}

export default MainBody