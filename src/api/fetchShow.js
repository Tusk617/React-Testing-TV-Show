
import React from "react"
import axios from "axios"


export const fetchShow = () => {
    return axios.get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(response => {
        return response.data;
    })
}