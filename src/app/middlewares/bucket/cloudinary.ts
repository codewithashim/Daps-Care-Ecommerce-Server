import { v2 as cloudinary } from 'cloudinary'
import fs from "fs"
import config from '../../../config';

cloudinary.config({
    cloud_name: config.cloude.cloude_name,
    api_key: config.cloude.cloude_api_key,
    api_secret: config.cloude.cloude_secret
});

export const uploadCloudinary = async (localFilePath: string) => {
    try {
        if (!localFilePath) {
            return null
        } else {
            const responce = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto",
            })
            console.log(responce.url)
            return responce
        }

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
    }
}
