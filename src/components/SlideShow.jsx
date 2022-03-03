import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import './Medicines.css'



const slideImages = [
    {
        url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-1.48172107.png",
        caption: "Slide 1",
        className: "headBGcolor1",
    },
    {
        url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-2.573c08f7.png",
        caption: "Slide 2",
        className: "headBGcolor2",
    },
    {
        url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-3.8c8ab982.png",
        caption: "Slide 3",
        className: "headBGcolor1",
    },
    {
        url: "https://www.practostatic.com/ecommerce-assets/static/media/home/desktop/full-width-4.2a2a16cc.png",
        caption: "Slide 4",
        className: "headBGcolor3",
    },
];

export const Slideshow = () => {
    return (
        <div className="slide-container">
            <Slide>
                {slideImages.map((slideImage) => (
                    <div className="each-slide">
                        <img
                            src={slideImage.url}
                            alt={slideImage.caption}
                            className={slideImage.className}
                            style={{ width: "100%" }}
                        />
                    </div>
                ))}
            </Slide>
        </div>
    );
};