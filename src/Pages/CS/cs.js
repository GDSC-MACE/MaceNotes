import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import './cs.css'
import Fetchnote from "../../components/fetchnote/fetchnote";


function Cs(props) {
    const history = useNavigate();
    const search = useLocation().search;
    const [sem, setsem] = useState(3);


    return (<div>
        <Fetchnote sub="COMPUTER NETWORKS"
                      mod="2" />

            <h2> viofniwoefnwriofn</h2>


    </div>
);


}

export default Cs;