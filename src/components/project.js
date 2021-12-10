import React, {useState, useEffect, useRef} from "react";

const Artworks = () => {

    const [image, setImage] = useState(null)

    const canvas = useRef(null)

    useEffect(() =>{
        const artImage = new Image();
        artImage.src = "https://thisartworkdoesnotexist.com/"
        artImage.onload = () => setImage(artImage)
    },[])

    useEffect(() => {
        if (image && canvas) {
            const ctx = canvas.current.getContext("2d")
            ctx.fillStyle = "Saddlebrown"
            ctx.fillRect(0, 0, 600, 600)
            ctx.drawImage(image, (600-510) / 2, 40)
        }
    }, [image, canvas])

    return(
        <div>
            <h1>AI Generated Artworks</h1>

            <div>
                <canvas
                ref={canvas}
                width={600}
                height={600}
                />
            </div>
        </div>
    )
}

export default Artworks;
