const upLoadFile = async(file:any) => {
    const CLOUDINARY_NAME = "trangltph14650";
    const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`;
    const CLOUDINARY_PRESET = "mavqbcfn";
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_PRESET);
    const response = await (await fetch(CLOUDINARY_API, {
        method: 'POST',
        body: formData
    })).json()
    return response
}
export default upLoadFile