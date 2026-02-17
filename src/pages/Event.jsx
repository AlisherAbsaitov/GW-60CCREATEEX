import React from 'react'
import qiz from "../assets/ochkitaqqanqiz.png"
import logos from "../assets/Eventlogos.png"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import kom from "../assets/kompyter.png"
import bola from "../assets/shkof.png"
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
export default function Event() {
  return (
    <main>
        <section className='bg-[#FEDCD2] pt-30 pb-30'>
            <div className="container mx-auto px-40">
                <h4 className='text-center text-[#FF3F3A] text-[16px] font-bold'>Online lecture</h4>
                <h1 className='w-300 text-center text-[#1E212C] text-[46px] font-black mt-3'>Formation of the organizational structure of the company in the face of uncertainty</h1>
            </div>
        </section>
        <section className='bg-white pt-30 pb-28.5'>
            <div className="container mx-auto px-40">
                <div className='flex gap-33.5'>
                    <div className='w-153'>
                        <h1 className='text-[#1E212C] text-[46px] font-black'>We will talk about:</h1>
                        <div className='flex flex-col gap-y-6'>
                            <div>
                                <div className='flex flex-col gap-y-4'>
                                    <div className='flex gap-3 items-center'>
                                        <h5 className='text-[#FF3F3A] text-[20px] font-bold'>-</h5>
                                        <div className='flex gap-0.5'>
                                            <p className='text-[#FF3F3A] text-[20px] font-normal'>Theme 1.</p>
                                            <p className='text-[#1E212C] text-[20px] font-bold'>Aliquet lectus urna viverra in odio.</p>
                                        </div>
                                    </div>
                                    <p className='text-[#424551] text-[16px] font-normal w-140 ml-10'>Nulla amet, sagittis potenti rhoncus sit. Elit lectus nec pulvinar aliquet donec enim, ornare. Lacus facilisi curabitur turpis varius mauris. Nisi, tempus risus, odio mi suscipit sed. Curabitur faucibus porttitor quis sem lacus, arcu feugiat facilisis. Commodo nunc orci vitae accumsan id.</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <h5 className='text-[#FF3F3A] text-[20px] font-bold'>+</h5>
                                <div className='flex gap-0.5'>
                                    <p className='text-[#FF3F3A] text-[20px] font-normal'>Theme 2.</p>
                                    <p className='text-[#1E212C] text-[20px] font-bold'>Orci commodo, viverra orci mollis ut euismod.</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <h5 className='text-[#FF3F3A] text-[20px] font-bold'>+</h5>
                                <div className='flex gap-0.5'>
                                    <p className='text-[#FF3F3A] text-[20px] font-normal'>Theme 3.</p>
                                    <p className='text-[#1E212C] text-[20px] font-bold'>Sagittis vitae facilisi rutrum amet mauris quisque vel.</p>
                                </div>
                            </div>
                            <div className='flex gap-3 items-center'>
                                <h5 className='text-[#FF3F3A] text-[20px] font-bold'>+</h5>
                                <div className='flex gap-0.5'>
                                    <p className='text-[#FF3F3A] text-[20px] font-normal'>Theme 4.</p>
                                    <p className='text-[#1E212C] text-[20px] font-bold'>In id dolor quis nunc, urna hendrerit pharetra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-123.75 h-113.75 border border-[#E5E8ED] py-10 px-8 rounded-sm'>
                        <div className='flex flex-col'>
                            <p className='text-[#1E212C] text-[14px] font-normal'>Time</p>
                            <h4 className='text-[#FF3F3A] text-[24px] font-bold mt-1 mb-2'>August 5, 11:00 – 14:00</h4>
                            <p className='text-[#787A80] text-[16px] font-normal'>Metus turpis sit lorem lacus, in elit tellus lacus.</p>
                        </div>
                        <div className='flex flex-col mt-8 mb-8'>
                            <p className='text-[#1E212C] text-[14px] font-normal'>Price</p>
                            <h4 className='text-[#FF3F3A] text-[24px] font-bold mt-1 mb-2'>Free</h4>
                            <p className='text-[#787A80] text-[16px] font-normal'>Nulla sem adipiscing adipiscing felis fringilla. Adipiscing mauris quam ac elit tristique dis.</p>
                        </div>
                        <p className='text-[#FF3F3A] text-[14px] font-bold underline underline-offset-1 mb-10'>Event on Facebook</p>
                        <button className='bg-[#FF3F3A] w-full h-11 rounded-sm text-white text-[14px] font-bold'>Join the event</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='bg-white pt-16.5 pb-13'>
            <div className="container mx-auto px-40">
                <div className='flex gap-33.75 mb-45'>
                    <img className='w-123.75 h-150' src={qiz} />
                    <div className='pt-5'>
                        <h6 className='text-[#1E212C] text-[16px] font-bold'>Speaker</h6>
                        <h1 className='text-[#1E212C] text-[46px] font-black mt-2 mb-4'>Kathryn Murphy</h1>
                        <p className='text-[#787A80] text-[20px] font-normal'>Analyst and Marketing specialist in IT company</p>
                        <p className='w-150 text-[#424551] text-[16px] font-normal mt-8 mb-10'>Mattis adipiscing aliquam eu proin metus a iaculis faucibus. Tempus curabitur venenatis, vulputate venenatis fermentum ante. Nisl, amet id semper semper quis commodo, consequat. Massa rhoncus sit morbi odio. Sit maecenas nibh consectetur vel diam. Sem vulputate molestie laoreet at massa sed pharetra. Ac commodo platea id habitasse proin. Nullam sit nec ipsum posuere non. Nam vel aliquam tristique sollicitudin interdum quam. </p>
                        <img className='w-98.75 h-12.5' src={logos} />
                        <div className='flex gap-6 mt-10'>
                            <p className='text-[#424551] text-[24px] font-medium hover:text-[#FF3F3A]'><FaFacebookF/></p>
                            <p className='text-[#424551] text-[24px] font-medium hover:text-[#FF3F3A]'><FaInstagram/></p>
                            <p className='text-[#424551] text-[24px] font-medium hover:text-[#FF3F3A]'><FaTwitter/></p>
                            <p className='text-[#424551] text-[24px] font-medium hover:text-[#FF3F3A]'><FaLinkedinIn/></p>
                        </div>
                    </div>
                </div>
                    <div className='flex gap-34.5'>
                        <div className='flex flex-col gap-y-2'>
                            <h6 className='text-[#1E212C] font-bold text-[16px]'>For whom?</h6>
                            <h1 className='text-[#1E212C] font-black text-[46px]'>Who will benefit from the event:</h1>
                        </div>
                        <div className='flex flex-col gap-y-5 pt-8'>
                            <a className='flex gap-1.5'>
                                <p className='text-[20px] text-[#FF3F3A] font-black'>✓</p>
                                <p className='text-[#424551] font-bold text-[20px]'>Specialists with more than 1 year of active work experience</p>
                            </a>
                            <a className='flex gap-1.5'>
                                <p className='text-[20px] text-[#FF3F3A] font-black'>✓</p>
                                <p className='text-[#424551] font-bold text-[20px] w-141'>Mobile app designers who want to improve their skills in solving business problems, creating and testing human-centered interfaces</p>
                            </a>
                            <a className='flex gap-1.5'>
                                <p className='text-[20px] text-[#FF3F3A] font-black'>✓</p>
                                <p className='text-[#424551] font-bold text-[20px]'>Professional designers who want to feel more confident in UX</p>
                            </a>
                        </div>
                    </div>
                </div>
        </section>
        <section className='bg-white pt-32 pb-30'>
            <div className="container mx-auto px-40">
                <div className='w-307.5 h-88.5 bg-[#FEDCD2] py-15 pl-25.75 pr-26.25 flex gap-28.5'>
                    <img className='w-77 h-58.5' src={kom} />
                    <div>
                        <h2 className='text-[#1E212C] text-[32px] font-black mb-12'>Don’t want to miss the best events? Subscribe to our newsletter!</h2>
                        <div className='flex gap-6 mb-6'>
                            <input className='font-normal text-[16px] w-105.5 h-13 rounded-sm border border-[#D7DADD] py-3.25 px-4 bg-white' type="email" placeholder='Your working email' />
                            <button className='bg-[#F75E05] rounded-sm w-38.5 h-13 text-white text-[16px] font-bold'>Subscribe</button>
                        </div>
                        <a className='flex gap-1.5 items-center'>
                            <button className='w-4 h-4 text-[12px] bg-[#FF3F3A] text-white font-black rounded-sm'>✓</button>
                            <p className='text-[#424551] font-normal text-[16px]'>I agree to receive communications from Createx Online School</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className='pb-30'>
            <div className="container mx-auto px-40">
                <div className='flex gap-31.25 items-center'>
                    <div>
                        <h6 className='text-[#1E212C] font-bold text-[16px] mb-2'>Don’t miss the event</h6>
                        <h1 className='text-[#1E212C] font-black text-[46px] mb-10'>Leave a request</h1>
                        <form>
                            <label className='flex flex-col gap-y-2 mb-6'>Full Name
                                <input className='border border-[#D7DADD] w-123.75 h-13 rounded-sm px-4' type="text" placeholder='Your full name'/>
                            </label>
                            <label className='flex flex-col gap-y-2 mb-6'>Email
                                <input className='border border-[#D7DADD] w-123.75 h-13 rounded-sm px-4' type="email" placeholder='Your working email'/>
                            </label>
                            <label className='flex flex-col gap-y-2 mb-10'>Phone
                                <input className='border border-[#D7DADD] w-123.75 h-13 rounded-sm px-4' type="number" placeholder='Your phone number'/>
                            </label>
                            <button className='text-white font-bold text-[16px] bg-[#FF3F3A] w-123.75 h-13 rounded-sm mb-6'>Join the event</button>
                            <p className='text-[#424551] text-[15px] font-normal'>* You will receive a link to the online lecture in an email after registration.</p>
                        </form>
                    </div>
                    <img className='w-150 h-117' src={bola} />
                </div>
            </div>
        </section>
        <section className='bg-[#E5E8ED] pt-25 pb-45'>
            <div className="container mx-auto px-40">
                <h6 className='text-[#1E212C] text-[16px] font-bold'>Check other online events</h6>
                <div className='flex justify-between items-center'>
                    <h1 className='text-[#1E212C] text-[46px] font-black'>You may be interested in</h1>
                    <div className='flex gap-5'>
                        <p className='text-[20px] font-medium'><FaArrowLeftLong/></p>
                        <p className='text-[20px] font-medium'><FaArrowRightLong/></p>
                    </div>
                </div>
                <div className='mt-15 flex gap-7.5'>
                    <div className='w-97.5 h-80.75 bg-white p-6'>
                        <div className='flex flex-col mb-6.75'>
                            <h3 className='text-[#FF3F3A] text-[28px] font-bold mb-1'>05 Aug</h3>
                            <p className='text-[#787A80] text-[16px] font-normal mb-5'>11:00 – 14:00</p>
                            <p className='text-[#1E212C] text-[18px] font-bold mb-2'>Formation of the organizational structure of the company in the face of uncertainty.</p>
                            <p className='text-[#787A80] text-[16px] font-normal'>Onine master-class</p>
                        </div>
                        <button className='text-[#FF3F3A] font-bold text-[14px] border border-[#FF3F3A] rounded-sm w-85.5 h-11'>View more</button>
                    </div>
                    <div className='w-97.5 h-80.75 bg-white p-6'>
                        <div className='flex flex-col mb-6.75'>
                            <h3 className='text-[#FF3F3A] text-[28px] font-bold mb-1'>24 Jul</h3>
                            <p className='text-[#787A80] text-[16px] font-normal mb-5'>11:00 – 12:30</p>
                            <p className='text-[#1E212C] text-[18px] font-bold mb-2'>Building a customer service department. Best Practices.</p>
                            <p className='text-[#787A80] text-[16px] font-normal'>Onine lecture</p>
                        </div>
                        <button className='text-[#FF3F3A] font-bold text-[14px] border border-[#FF3F3A] rounded-sm w-85.5 h-11'>View more</button>
                    </div>
                    <div className='w-97.5 h-80.75 bg-white p-6'>
                        <div className='flex flex-col mb-6.75'>
                            <h3 className='text-[#FF3F3A] text-[28px] font-bold mb-1'>10 Jul</h3>
                            <p className='text-[#787A80] text-[16px] font-normal mb-5'>9:00 – 14:00</p>
                            <p className='text-[#1E212C] text-[18px] font-bold mb-2'>Find and evaluate: search and assessment tools for candidates.</p>
                            <p className='text-[#787A80] text-[16px] font-normal'>Onine workshop</p>
                        </div>
                        <button className='text-[#FF3F3A] font-bold text-[14px] border border-[#FF3F3A] rounded-sm w-85.5 h-11'>View more</button>
                    </div>
                </div>
                <div className='mt-20 flex gap-10 items-center justify-center'>
                    <h3 className='text-[#1E212C] text-[28px] font-bold'>Do you want more?</h3>
                    <button className='text-white font-bold text-[16px] bg-[#FF3F3A] w-53.5 h-13 rounded-sm'>Explore all events</button>
                </div>
            </div>
        </section>
    </main>
  )
}
