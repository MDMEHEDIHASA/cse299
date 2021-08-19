import React from 'react'
import '../css/Tab.css';
import {makeStyles} from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const useStyles = makeStyles({
    root:{
        flexGrow:1,
    },
    tab:{
        fontSize:12,
        color:'#5f6368',
        textTransform:'capitalize',
        height:10,
        fontWeight:'600'
    },
    tabs:{
        height:10
    }
})


const CenterTab = ()=>{
    const classes = useStyles();
    return (<Paper className={classes.root} style={{width:'100%',height:'4rem'}}>
        <Tabs centered textColor='primary' indicatorColor='primary' className={classes.tabs}>
            <Tab label='Questions' className={classes.tab}>

            </Tab>
            <Tab label='Responses' className={classes.tab}>

            </Tab>
        </Tabs>
    </Paper>)
}

export default CenterTab;