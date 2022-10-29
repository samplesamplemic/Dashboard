import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Icon from '@mdi/react';
import { mdiApple, mdiMicrosoftXbox, mdiMicrosoftWindows, mdiSonyPlaystation, mdiAndroid, mdiNintendoSwitch, mdiWeb } from '@mdi/js';
import { upcomingGamesUrl } from "./RAWG-API"
import "./UpcomingGames.css"
import "tailwindcss/tailwind.css"

export function UpcomingGames() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.all(upcomingGamesUrl().map(el => axios.get(el))).then(axios.spread(function (...res) {
            const key = "released";
            setData([...new Map((res.map(el => Object.values(el.data.results)).flat(1)).map(item => [item[key], item])).values()])
        }))
    }, []);

    const newArray = data.map(el => [(el.name), (el.released), (el.platforms), (el.genres.map(subEl => subEl.name)), (el.background_image)])


    const releaseDateFormat = (dateString) => {
        const date = new Date(dateString);
        return <p className="w-fit text-white px-1 flex gap-0.5 items-center">
            <span className="font-bold">{date.getDate()}</span>
            <span>|</span>
            <span className="text-ten">{date.toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
        </p>
    }

    function gamePlatformID(platform) {
        return (
            platform.map((subItem) => (
                subItem.platform.id === 1 || !subItem.platform.id === 186 ?
                    <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mx-px" key={subItem.platform.id}>
                        <Icon className="text-gray-new w-2.5" path={mdiMicrosoftXbox} />
                    </span>
                    : subItem.platform.id === 187 || !subItem.platform.id === 18 ?
                        <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mr-px" key={subItem.platform.id}>
                            <Icon className="text-gray-new w-2.5" path={mdiSonyPlaystation} />
                        </span>
                        : subItem.platform.id === 21 ?
                            <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mr-px" key={subItem.platform.id}>
                                <Icon className="text-gray-new w-2.5" path={mdiAndroid} />
                            </span>
                            : subItem.platform.id === 4 ?
                                <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mr-px" key={subItem.platform.id}>
                                    <Icon className="text-gray-new w-2.5" path={mdiMicrosoftWindows} />
                                </span>
                                : subItem.platform.id === 7 ?
                                    <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mr-px" key={subItem.platform.id}>
                                        <Icon className="text-gray-new w-2.5" path={mdiNintendoSwitch} />
                                    </span>
                                    : subItem.platform.id === 5 ?
                                        <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mr-px" key={subItem.platform.id}>
                                            <Icon className="text-gray-new w-2.5" path={mdiApple} />
                                        </span>
                                        : subItem.platform.id === 171 ?
                                            <span className="flex justify-center items-center w-3 h-3 bg-white rounded-full mr-px" key={subItem.platform.id}>
                                                <Icon className="text-gray-new w-2.5" path={mdiWeb} />
                                            </span>
                                            : null)
            ))
    }

    return (<>
        <div className="bg flex flex-col items-center">
            {/* <h2 className="text-2xl font-bold text-white flex-[100%]">Upcoming Games</h2> */}
            <Slider className="slider" {...settings}>
                {newArray.map((item, index) =>
                    <div key={index}>
                        <div className="rounded-tr-3xl rounded-bl-3xl rounded-br-lg rounded-tl-lg border border-white mt-2.5 mb-2.5 h-130px"
                            style={{ backgroundImage: "url(" + item[4] + ")", width: '100%', height: '130px', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="bg-gradient-to-t from-black to-gradient-end flex flex-col justify-between w-full h-full rounded-tr-2xl rounded-br-lg rounded-tl-lg rounded-bl-3xl">
                                <div className="w-full">
                                    <h4 className="px-1 text-white text-nine m-1 italic bg-neutral-400/50 rounded-lg w-fit text-center text-shadow-title">{item[0]}</h4>
                                </div>
                                <div className="w-full m-2.5">
                                    {releaseDateFormat(item[1])}
                                    <div className="flex justify-end h-fit w-5/6 mt-1">
                                        {item[2] === null ? "Loading..." : gamePlatformID(item[2])}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        </div>
    </>)
}


const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 4,
                infinite: true,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }
    ]
};
