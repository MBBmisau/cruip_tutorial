"use client"

import Fragment from "react"
import Image, { StaticImageData } from "next/image"
import { Caveat } from "next/font/google"
import { Tab } from "@headlessui/react"
import tabsImg01 from "@/public/tabs-image-01.webp"
import tabsImg02 from "@/public/tabs-image-02.webp"
import tabsImg03 from "@/public/tabs-image-03.webp"

const caveat = Caveat({
    subsets: ['latin'],
    variable: '--font-caveat',
    display: 'swap'
})

interface Tab {
    title: string
    img: StaticImageData
    tag: string
    excerpt: string
    link: string
}

export default function UnconventionalTabs() {
    const tabs: Tab[] = [
        {
      title: 'Lassen Peak',
      img: tabsImg01,
      tag: 'Mountain',
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: '#0'
    },
    {
      title: 'Mount Shasta',
      img: tabsImg02,
      tag: 'Mountain',
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: '#0'
    },
    {
      title: 'Eureka Peak',
      img: tabsImg03,
      tag: 'Mountain',
      excerpt: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: '#0'
    },
    ]

    return (
        <Tab.Group>
          {({ selectedIndex })=>(
            <div className={`${caveat.variable}`}>
              {/* Buttons */}
              <div className="flex justify-center">
                <Tab.List className="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center 
                bg-slate-200 rounded-[20px] pl-1 mb-8 min-[480]:mb-12">
                  {tabs.map((tab, index)=>(
                    <Tab key={index} as={Fragment}>
                      <button type="button" 
                       className={`flex-1 font-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap
                       focus-visible:outline-none ui-focus:visible:outline-none ui-focus-visible:ring
                       iu-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out
                       ${selectedIndex === index ? 'bg-white text-slate-900' 
                       : 'text-slate-600 hover:text-slate-900'}`}
                      >
                        {tab.title}
                      </button>
                    </Tab>
                  ))}
                </Tab.List>
              </div>

              {/* Panels */}
              <Tab.Panels className="max-w-[640px] mx-auto">
                <div className="relative flex flex-col">
                  {tabs.map((tab, index)=>(
                    <Tab.Panel
                     key={index}
                     as={Fragment}
                    >
                      <article className="w-full rounded-2xl shadow-xl min-[480]:flex items-stretch 
                        focus-visible:outline-none focus-visible-ring">
                        <figure className="min-[480]:w-1/2 p-2">
                          <Image className="w-full h-[180px] min-[480px]:h-full object-cover rounded-lg" 
                            src={tab.img} width="304" height="214" alt={tab.title} />
                        </figure>
                        <div className="min-[480px]:w-1/2 flex flex-col justify-center p-5 pl-3">
                          <div className="flex justify-between mb-2">
                            <header>
                              <div className="font-caviat text-xl font-medium text-sky-500">{tab.tag}</div>
                              <h1 className="text-xl font-bold text-slate-900">{tab.title}</h1>
                            </header>
                            <button type="button" className="shrink-0 h-[30px] w-[30px] border border-slate-200
                              hover:border-slate-300 rounded-full shadow inline-flex items-center 
                              justify-center focus-visible:outline-none focus-visible:ring 
                              focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-outs"
                              aria-label="Like">
                                <svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                                  <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                                      </svg><svg className="fill-red-500" xmlns="http://www.w3.org/2000/svg" width="14" height="13">
                                  <path d="M6.985 1.635C5.361.132 2.797.162 1.21 1.7A3.948 3.948 0 0 0 0 4.541a3.948 3.948 0 0 0 1.218 2.836l5.156 4.88a.893.893 0 0 0 1.223 0l5.165-4.886a3.925 3.925 0 0 0 .061-5.663C11.231.126 8.62.094 6.985 1.635Zm4.548 4.53-4.548 4.303-4.54-4.294a2.267 2.267 0 0 1 0-3.275 2.44 2.44 0 0 1 3.376 0c.16.161.293.343.398.541a.915.915 0 0 0 .766.409c.311 0 .6-.154.767-.409.517-.93 1.62-1.401 2.677-1.142 1.057.259 1.797 1.181 1.796 2.238a2.253 2.253 0 0 1-.692 1.63Z" />
                          </svg>
                              </button>
                              <div className="text-slate-500 text-sm line-cap-3 mb-2">{tab.excerpt}</div>
                              <div className="text-right">
                                <a href="" className="text-sm font-medium text-indigo-500  r"></a>
                              </div>
                          </div>
                        </div>
                      </article>
                    </Tab.Panel>
                  ))}
                </div>
              </Tab.Panels>
            </div>
          )}
        </Tab.Group>
    )
}