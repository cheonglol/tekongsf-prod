import { Button } from "primereact/button";
import Header from "../Components/Common/Header";
import { BasicLayout } from "../Layouts/Base/BasicLayout";
import { contentSectionHeader } from "../Constants/CustomTailwindClassnames";
import { AboutUs } from "../Components/AboutUs";
import FindUs from "../Components/FindUs";

export const LandingView = () => {
    // TODO: we need to change this or at least redircet
    return (
        <BasicLayout
            headerContent={<Header />}
            includesBottomNav={true}
            mainContent={
                <>
                    <div className="flex flex-row m-auto mx-10">
                        <iframe
                            className="flex-3 m-auto h-[500px] w-[50vw]"
                            src="https://www.youtube-nocookie.com/embed/kW3zm9-F3Cs?si=h8xdp2QgpFEI2UxU"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        <blockquote
                            className="tiktok-embed max-w-[605px] min-w-[325px] m-auto"
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
                                    德光岛上 50多年的海鲜楼，每道菜都吃出古早味。您喜欢吃海鲜吗？@Edmund Chen 陈之财
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
                    <hr className="my-[6rem]" />
                    {/* CONTACT US (Map & Shit Here) */}
                    <div className="min-h-[42rem]">
                        {/* <h1 className={`${componentHeaderClassname}`}>Make a Reservation</h1> */}
                        <h1>Make a Reservation</h1>
                        <div className="md:flex md:flex-row-reverse">
                            <div className="m-0 md:m-4 md:flex-grow-[1]">
                                <h2>Address or something</h2>
                                {/* <Button
                                    className="my-8 p-8 bg-orange-500 text-white text-[1.5rem]"
                                    onClick={() => {
                                        window.open("https://www.quandoo.sg/place/tekong-seafood-restaurant-40499");
                                    }}
                                >
                                    {`${String("Make a Reservation").toUpperCase()}`}
                                </Button> */}
                                {/* TODO: Button not working get from https://admin.quandoo.com/ | FIND A WAY TO PUT RAW HTML */}
                                <div
                                    className="quandoo-widget-builder"
                                    data-config='{"format":"text-button","bgcolor":"#f5b016","txcolor":"#ffffff","round":"yes","position":"","font":"md","merchant":40499,"txt":"Reserve now"}'
                                ></div>
                                {/* <script src="https://s3-eu-west-1.amazonaws.com/quandoo-website/widget-builder/quandoo-widget-builder.js"></script> */}
                            </div>
                            <div className="m-0 md:m-4 md:flex-grow-[3]">
                                <iframe
                                    title="Google Maps"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15954.57717929964!2d103.9887667!3d1.3899862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf95959e509a6e27!2sTekong+Seafood+Restaurant!5e0!3m2!1sen!2sau!4v1546924456558"
                                    width="100%"
                                    height="850"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    </div>
                </>
            }
        />
    );
};
