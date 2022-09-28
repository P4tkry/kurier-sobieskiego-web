import {useEffect, useState} from "react"
import {IArticle} from "../../models";
import api from "../../utils/api";
import {Routes, Route, Link} from "react-router-dom";
import Articles from "./Articles";
import EditArticle from "./EditArticle";

export default function Index() {

    return (
        <div>
            <Routes>
                <Route path="/" element={<Articles />}/>
                <Route path="createArticle" element={<EditArticle type={'create'} />}/>
                <Route path="edit/:id" element={<EditArticle type={'edit'} />}/>
            </Routes>

        </div>
    )
}