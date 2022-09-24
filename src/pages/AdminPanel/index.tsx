import {useEffect, useState} from "react"
import {IArticle} from "../../models";
import api from "../../utils/api";
import {Routes, Route, Link} from "react-router-dom";
import Articles from "./Articles";

export default function Index() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Articles />}/>
            </Routes>

        </div>
    )
}