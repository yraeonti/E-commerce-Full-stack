import React, {useState} from "react";

const ProductCarousel = ({img, name}) => {

    console.log(img?.[0]?.image);    
    
    return(
        <>
        <div className="min-h-fit">

        <div id="carouselExampleIndicators" className="carousel slide relative xl:w-[520px] md:w-[400px] xl:h-[700px] h-[600px]" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left w-full">
                <img
                    src={img?.[0]?.image}
                    className="block w-full xl:h-[700px] h-[600px]"
                    alt={name}
                />
                </div>
                <div className="carousel-item float-left w-full">
                <img
                    src={img?.[1]?.image}
                    className="block w-full xl:h-[700px] h-[600px]"
                    alt={name}
                />
                </div>
                <div className="carousel-item float-left w-full">
                <img
                    src={img?.[2]?.image}
                    className="block w-full xl:h-[700px] h-[600px]"
                    alt={name}
                />
                </div>
            </div>

                          <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
            
            </div>

            </div>
            
        </>
    )
}


export default ProductCarousel


{/* <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                ></button>
                <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                ></button>
            </div>
            <div className="carousel-inner relative w-full overflow-hidden">
                <div className="carousel-item active float-left w-full">
                <img
                    src={image}
                    className="block w-full xl:h-[700px] h-[600px]"
                    alt={name}
                />
                </div>
                <div className="carousel-item float-left w-full">
                <img
                    src={image2}
                    className="block w-full xl:h-[700px] h-[600px]"
                    alt={name}
                />
                </div>
                <div className="carousel-item float-left w-full">
                <img
                    src={image3}
                    className="block w-full xl:h-[700px] h-[600px]"
                    alt={name}
                />
                </div>
            </div> */} 

            // {`${index == 0 ? "carousel-item active float-left w-full" : "carousel-item float-left w-full"}`}