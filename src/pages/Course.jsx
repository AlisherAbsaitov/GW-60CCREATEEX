import React from "react";
import { useState } from "react";
import brbrjson from "../data/brbr..json"
import e from "../assets/e.svg";
import lo from "../assets/lo.svg";
import log from "../assets/log.svg";
import logo0 from "../assets/logo0.svg";
import i from "../assets/i.svg";
export default function Course() {
  const [data, setData] = useState(brbrjson);
  return (
    <main>
      <section>
        <div className="w-full dark:bg-black dark:text-white">
          <div className="container mx-auto">
            <div className="flex flex-wrap gap-6 ml-30">
              {data.map((value, index) => {
                return (
                  <div>
                    <div className="">
                      <div className="  p-6 w-100">
                        <div className="w-90 h-50 rounded-2xl ">
                          <img src={value.img} alt={value.author} />
                        </div>

                        <div className="mt-5">
                          <div className="bg-green-100 text-green-700  rounded-sm w-50 text-center">
                            <p className=" items-center gap-2   text-sm  px-3 py-1  mb-2">
                              {value.category}
                            </p>
                          </div>

                          <h3 className="text-lg font-semibold text-gray-900 w-60 ">
                            {value.title}
                          </h3>

                          <div className="text-sm text-gray-600 mt-3 flex ">
                            <p className="text-red-500 ">{value.price}</p>
                            <p className="">|</p>
                            <p> by Jerome Bell </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full bg-[#F4F5F6] mt-20  dark:bg-black dark:text-white dark:mt-0 ">
          <div className="container mx-auto">
            <div>
              <div className="items-center text-center mt-10">
                <p>TESTIMONIALS</p>
                <h2 className="text-2xl">What our students say</h2>
              </div>
              <div className="mt-20  w-195 items-center justify-center p-20 pt-8 ml-100 dark:mb-0 mb-30">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Justo, amet lectus quam viverra mus lobortis fermentum amet,
                    eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus
                    ornare turpis quis non. Congue tortor in euismod vulputate
                    etiam eros. Pulvinar neque pharetra arcu diam maecenas diam
                    integer in.
                  </p>
                </div>
                <div className="mt-5 flex">
                  <div>
                    <img src={e} alt="" />
                  </div>
                  <div className="ml-2">
                    <p>Eleanor Pena</p>
                    <p>Position, Course</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="w-full dark:bg-black dark:text-white">
          <div className="container mx-auto ">
            <div className="flex mt-50 ml-50 dark:mt-0">
              <div>
                <p className="text-[30px]">Createx Certificate</p>
                <h2 className="text-[46px] w-125">
                  Your expertise will be confirmed
                </h2>
                <p className="w-75 mt-10">
                  We are accredited by international professional organizations
                  and institutes:
                </p>

                <div className="flex mt-12.5">
                  <img src={lo} alt="" />
                  <img src={log} alt="" />
                  <img src={logo0} alt="" />
                </div>
              </div>
              <div>
                <img className="w-150" src={i} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
