"use client"

import { useState, useEffect } from "react"

interface AccordionProps {
    children: React.ReactNode,
    title: string,
    id: string,
    active?: boolean
}

export default function AnimatedAccordion() {
    const faqs = [
        {
          title: "What are the advantages of your service?",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: false,
        },
        {
          title: "Are there any fees or commissions in addition to the monthly subscription?",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: false,
        },
        {
          title: "You really don't charge per user? Why not?",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: false,
        },
        {
          title: "What happens when I go over my monthly active limit?",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: true,
        },
        {
          title: "Can your service help me understand how to work with my product?",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: false,
        },
        {
          title: "Which third-party application do you integrate with?",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: false,
        },
        {
          title: "I have another question!",
          text: "If you go over your organisations or user limit, a member of the team will reach out about bespoke pricing. In the meantime, our collaborative features won't appear in accounts or users that are over the 100-account or 1,000-user limit.",
          active: false,
        },
      ]
      return (
        <div className="bg-slate-50 overflow-hidden">
          <div className="w-full max-w-2xl mx-auto px-4 md:px-6 py-24">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">FAQs</h2>
            <div className="divide-y divide-slate-200">
              {faqs.map((faq, index)=>(
                <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                  {faq.text}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      )
}

export function Accordion({
    children,
    title,
    id,
    active=false
}: AccordionProps) {
    const  [accordionOpen, setAccordionOpen] = useState<boolean>(false)

    useEffect(()=>{
        setAccordionOpen(active)
    }, [])

    return (
     <div className="py-2">
      <h3>
       <button type="button"
         className="flex items-center justify-between w-full font-semibold py-2 text-left"
         onClick={(e)=>{e.preventDefault(); setAccordionOpen(!accordionOpen)}}
         aria-expanded={accordionOpen}
         aria-controls={`accordion-text-&{id}`}
       >
        <span>{title}</span>
        <svg className="fill-indigo-500 shrink-0 ml-8" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <rect y="7" width="16" height="2" rx="1" 
            className={`transform origin-center transition duration-200 ease-out 
            ${accordionOpen && '!rotate-180'}`} />
          <rect y="7" width="16" height="2" rx="1" 
            className={`transform origin-center rotate-90 transition duration-200 ease-out 
            ${accordionOpen && '!rotate-180'}`} />
          </svg> 
       </button>
      </h3>
      <div
      id={`accordion-text-&{id}`}
      role="region"
      aria-labelledby={`accordion-text-&{id}`}
      className={`grid text-sm text-slate-600 overflow-hidden transition-all duration-300 
        ease-in-out &{accordionOpen ? 'grid-rows-[1fr] opacity-100'} : 'grid-rows-[0fr] opacity-0'`}>
        <div className="overflow-hiiden">
          <p className="pb-3">
            {children}
          </p>
        </div>
      </div>
     </div>
    )
}
