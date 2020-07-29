"use strict"

const axios = require("axios")
let url = "http://localhost"
const port = 8991

const getUser = endpoint => {

  return axios.request({
    method: "GET",
    baseURL: `${url}:${port}`,
    url: "/users/1",
    headers: { Accept: "application/json" },
  })
}

module.exports = {
getUser}