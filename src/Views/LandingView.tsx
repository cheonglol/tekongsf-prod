import Header from "../Components/Common/Header";
import { BasicLayout } from "../Layouts/Base/BasicLayout";

export const LandingView = () => {
    // TODO: we need to change this or at least redircet
    return (
        <BasicLayout
            headerContent={<Header />}
            // includesBottomNav={true}
            mainContent={
                <>
                    <div className="md:flex md:flex-row m-auto">
                        <iframe
                            title="Youtube Video Player"
                            src="https://www.youtube-nocookie.com/embed/kW3zm9-F3Cs?si=h8xdp2QgpFEI2UxU"
                            className="flex-1 m-auto h-[50vh] w-[100%] mx-4"
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
                    <hr />
                    {/* CONTACT US (Map & Shit Here) */}
                    <div>
                        <h1 className="text-center tksf-content-heading">
                            <span className="font-thin block my-8">预订</span>
                            <span>RESERVATION</span>
                        </h1>
                        <div className="md:flex md:flex-row-reverse">
                            <div className="m-0 md:m-4 md:flex-grow-[1] min-h-fit">
                                <iframe
                                    title="Quandoo Booking Widget"
                                    src="https://www.quandoo.sg/checkout-widget/widget?agentId=2&amp;merchantId=40499&amp;primaryColor=f5b016&amp;theme=light&amp;widgetType=calendar"
                                    className="min-h-[685px] w-[100%]"
                                ></iframe>
                                {/* <div id="quandoo-booking-widget" className="m-auto"></div> */}
                            </div>
                            <div className="m-0 md:m-4 md:flex-grow-[2]">
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
                    {/* BLOG */}
                </>
            }
        />
    );
};
