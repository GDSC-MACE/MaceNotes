import { history, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import Papa from 'papaparse'

import { readFile } from "xlsx";
import { withRouter } from 'react-router';
//import React from 'react';

import { useNavigate } from "react-router-dom";

import React, { Component } from 'react';



function Fetchnote(props) {
    let history = useNavigate();
    var data;
    useEffect(() => {

        var f = -1;
        //console.log(props);
        Papa.parse("./MACE NOTES.csv", {
            download: true,
            header: false,
            complete(results) {
                //console.log(results.data);
                for (let i = 1; i < results.data.length && f != 1; i++) {
                    for (let j = 0; j < (results.data[i].length) - 1 && f != 1; j++) {
                        if (results.data[i][j] == props.sub && results.data[i][j + 1] == props.mod) {

                            data = results.data[i][j + 2].toString();
                            console.log(data);
                            f = 1;
                        }

                    }
                }
                f = 0;
            }
        });
    })


    return ( <
        div >
        <
        button onClick = {
            () => window.location.href = data
        }
        id = "btn1" > get < /button>


        <
        /div>
    );


}

export default Fetchnote;