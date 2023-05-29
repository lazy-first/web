import image1 from "../detailPage/images/image1.png";
import image2 from "../detailPage/images/image2.png";
import image3 from "../detailPage/images/image3.png";
import image4 from "../detailPage/images/image4.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export default function JobImageSlide() {
  const images = [
    {
      id: "image1",
      image: image1,
    },
    {
      id: "image2",
      image: image2,
    },
    {
      id: "image3",
      image: image3,
    },
    {
      id: "image4",
      image: image4,
    },
  ];

  return (
    <>
      <div className="job-image-slide">
        <Carousel>
          {images.map((i, index) => {
            return (
              <Carousel.Item key={`jis-${index}`}>
                <img
                  style={{ width: "700px", height: "490px" }}
                  className="d-block w-100"
                  src={i.image}
                  alt={i.id}
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
