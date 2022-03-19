import {history, useEffect} from 'react';
import { withRouter } from 'react-router';
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import './cs.css'
import axios from "axios";
import React,{useState} from 'react';
import Fetchnote from "../../components/fetchnote/fetchnote";
import {Form, Header, Grid, Select, Button, Card, Icon} from "semantic-ui-react"


function Cs(props) {
    const history =useHistory();
    const search = useLocation().search;
    const [sem,setsem]=useState(3);


        return (
            <div>
            <Fetchnote
                sub="COMPUTER NETWORKS"
                mod="2"
                />


            </div>
        );


}

export default Cs;