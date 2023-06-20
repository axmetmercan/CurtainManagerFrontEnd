import axios from "axios";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export async function  uploadPictureHandler(url, config, FormData) {

    const upload_Img = await axios.post(String(url), config, FormData)

    return upload_Img

}