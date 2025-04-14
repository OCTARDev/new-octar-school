const handleRemoveImage = (index,setImages,setValue,getValues) => {
    const existingImages = getValues("media") || [];
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setValue("media", existingImages.filter((_, i) => i !== index));
};

export default handleRemoveImage;