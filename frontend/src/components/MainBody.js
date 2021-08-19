import React from 'react'
import "../css/MainBody.css"
import { IconButton } from "@material-ui/core";
import StorageIcon from '@material-ui/icons/Storage'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import FolderOpenIcon from '@material-ui/icons/FolderOpen'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import rc from '../images/rc.PNG'

const MainBody = ()=>{
     
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;



    return(<div className='mainbody'>
        <div className="mainbody_top">
            <div className="mainbody_top--left"  style={{fontWeight:'500'}}>
                Recent Form
            </div>
            <div className="mainbody_top--right">
                <div className="mainbody_top--center" style={{fontSize:'14px',marginRight:'125px'}}>
                    Owned By me <ArrowDropDownIcon/>
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
            <div className="doc_card">
                <img src={rc} alt="" className="doc_image" />
                <div className="doc_card_content">
                    <h5></h5>
                    <div className="doc_content" style={{fontSize:'12px',color:'grey'}}>
                        <div className="content_left">
                            <StorageIcon style={{
                                color:'white',
                                fontSize:'20px',
                                backgroundColor:'#6E2594',
                                padding:'3px',
                                marginRight:'3px',
                                borderRadius:'2px'
                                }}/>
                        </div>
                        <div style={{padding:'0 1.5rem'}}>Modified:{today}</div>
                        <MoreVertIcon style={{color:'grey'}}/>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>)
}

export default MainBody