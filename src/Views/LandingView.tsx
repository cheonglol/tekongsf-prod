import Header from "../Components/Common/Header";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import ContentSection from "../Components/Common/ContentSection";
import DishMenu from "../Components/DishMenu";
import { Image } from "primereact/image";
// import { IconOptions } from "primereact/utils";
// import { PrimeIcons } from "primereact/api";

export const LandingView = () => {
    // TODO: we need to change this or at least redircet
    return (
        <BasicLayout
            headerContent={<Header />}
            // includesBottomNav={true}
            mainContent={
                <>
                    <ContentSection
                        titleEng="ongoing promotion"
                        content={
                            <div className="text-center md:max-w-[60vw] mx-auto">
                                <h2 className="my-8">2025 CNY Promotion Packages</h2>
                                <Image
                                    src="/images/promo-menus/2025-CNY-promo-package.jpg"
                                    indicatorIcon={<i className="pi-expand" />}
                                    alt="Image"
                                    preview
                                />
                                <span className="text-sm text-gray-500">tap or click to enlarge</span>
                            </div>
                        }
                    />
                    <ContentSection
                        titleEng="about us"
                        content={
                            <div className="text-center">
                                <h2 className="my-8">A Seaside Dining Experience in Changi</h2>
                                <p className="m-auto text-justify w-[75vw] md:[60vw] lg:w-[40vw]">
                                    Nestled in the heart of Changi, Tekong Seafood Restaurant offers a delectable
                                    Chinese seafood dining experience for locals and tourists alike. Originally
                                    established on Tekong Island, our restaurant has since moved to the Singapore
                                    mainland, where we continue to offer the freshest catches and exceptional service in
                                    a casual and inviting setting. Indulge in our menu's highlights, including succulent
                                    red flower crabs, tender boiled pork belly, and a wide selection of seafood dishes,
                                    many of which are sourced from local fishermen to ensure the utmost quality and
                                    freshness. Whether you're celebrating a special occasion or simply looking for a
                                    laid-back meal with loved ones, Tekong Seafood Restaurant promises a memorable
                                    dining experience that celebrates the bounty of Singapore's coastal waters. Join us
                                    for a taste of local seafood cuisine at its finest, set against the backdrop of
                                    Changi's tranquil seaside charm. Our spacious dining area can accommodate groups
                                    large and small, so make a reservation today and come experience the flavors that
                                    have kept our patrons coming back for over 35 years.
                                </p>
                            </div>
                        }
                    />
                    <ContentSection
                        titleEng="Media"
                        content={
                            <div className="md:flex md:flex-row m-auto">
                                <iframe
                                    title="Youtube Video Player"
                                    src="https://www.youtube-nocookie.com/embed/kW3zm9-F3Cs?si=h8xdp2QgpFEI2UxU"
                                    className="flex-1 h-[50vh] w-[100%] m-auto"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                />
                                {/* <iframe
                                    title="Tiktok"
                                    className="flex-1 m-auto h-[50vh] w-[100%] mx-4"
                                    src="https://www.tiktok.com/@iamxiangyun/video/7386976927015292181"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                /> */}
                                <blockquote
                                    className="tiktok-embed w-[50vw] min-w-[50vw] m-auto flex-1"
                                    cite="https://www.tiktok.com/@iamxiangyun/video/7386976927015292181"
                                    data-video-id="7386976927015292181"
                                    data-embed-from="embed_page"
                                    // style="max-width:605px; min-width:325px; margin:auto;"
                                >
                                    <section>
                                        <a
                                            target="_blank"
                                            title="@iamxiangyun"
                                            href="https://www.tiktok.com/@iamxiangyun?refer=embed"
                                            rel="noreferrer"
                                        >
                                            @iamxiangyun
                                        </a>
                                        <p>
                                            德光岛上 50多年的海鲜楼，每道菜都吃出古早味。您喜欢吃海鲜吗？@Edmund Chen
                                            陈之财
                                            <a
                                                title="今天吃什么"
                                                target="_blank"
                                                href="https://www.tiktok.com/tag/%E4%BB%8A%E5%A4%A9%E5%90%83%E4%BB%80%E4%B9%88?refer=embed"
                                                rel="noreferrer"
                                            >
                                                #今天吃什么
                                            </a>
                                        </p>
                                        <a
                                            target="_blank"
                                            title="♬ original sound - Xiang Yun - Xiang Yun"
                                            href="https://www.tiktok.com/music/original-sound-Xiang-Yun-7386976993629195009?refer=embed"
                                            rel="noreferrer"
                                        >
                                            ♬ original sound - Xiang Yun - Xiang Yun
                                        </a>
                                    </section>
                                </blockquote>
                            </div>
                        }
                    />

                    {/* CONTACT US (Map & Shit Here) */}
                    <ContentSection
                        titleEng="RESERVATION"
                        titleChi="预订"
                        // backgroundImgSrc="images/Backdrop.jpg"
                        content={
                            <>
                                <div className="md:flex md:flex-row-reverse">
                                    <div className="m-0 md:m-4 md:flex-grow-[1] min-h-fit">
                                        <iframe
                                            id="qd-booking"
                                            title="Quandoo Booking Widget"
                                            src="https://www.quandoo.sg/checkout-widget/widget?agentId=2&amp;merchantId=40499&amp;primaryColor=f5b016&amp;theme=light&amp;widgetType=calendar"
                                            className="min-h-[685px] w-[100%] shadow mb-6"
                                        ></iframe>
                                        {/* <div id="quandoo-booking-widget" className="m-auto"></div> */}
                                    </div>
                                    <div className="m-0 md:m-4 md:flex-grow-[1.5] md:w-[40vw]">
                                        <iframe
                                            title="Google Maps"
                                            className="rounded-md shadow"
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.57717929964!2d103.9887667!3d1.3899862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf95959e509a6e27!2sTekong+Seafood+Restaurant!5e0!3m2!1sen!2sau!4v1546924456558"
                                            width="100%"
                                            height={document.getElementById("qd-booking")?.offsetHeight}
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                                <img
                                    alt="reservation_image"
                                    src="images/backdrop.jpg"
                                    // src="https://scontent.fsin11-1.fna.fbcdn.net/v/t39.30808-6/304190411_582497816972327_1151698159248212944_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=KOsQJVqNMzcQ7kNvgHrtcZf&_nc_ht=scontent.fsin11-1.fna&oh=00_AYD9NyBwBJxxUMEIEURDpuot3buRo5xTlUeVMuaTzEUl_w&oe=66AE9C0F"
                                    className="shadow-sm rounded-md block my-4 m-auto"
                                />
                            </>
                        }
                    />
                    {/* MENU */}
                    <ContentSection titleChi="菜单" titleEng="MENU" content={<>{DishMenu()}</>} />
                </>
            }
        />
    );
};
