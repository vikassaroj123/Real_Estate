import React, { useState } from 'react'
import './Value.css'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'
import data from '../../utils/accordion'

const Value = () => {
    return (
        <div className="v-wrapper">
            <div className="v-container paddings innerWidth flexCenter">

                {/* Left section start from here */}
                <div className="v-left ">
                    <div className="image-container">
                        <img src="./value.png" alt="" className="value-image" />
                    </div>
                </div>

                {/* Right section start from here */}
                <div className="v-right flexColStart ">
                    <div className="value-head flexColStart">
                        <span className='orangeText'>Our Value</span>
                        <span className='primaryText'>Value We Give to You</span>
                    </div>
                    <div className="v-description flexColStart">
                        <span className="secondaryText">We always ready to help you poroviding the best service for you</span>
                        <span className='secondaryText'> We beleive a good place to live can make your life better</span>
                    </div>

                    {/* Accordion section start from here */}
                    <Accordion
                        className='accordion-1'
                        allowMultipleExpanded={false}
                        preExpanded={[0]}
                    >
                        {
                            data.map((item, i) => {
                                const [className ,setClassName] = useState(null);
                                return (
                                    <AccordionItem className={`accordionItem ${className}`} key={i}>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordionButton flexCenter '>

                                                <AccordionItemState>
                                                    {({ expanded }) => expanded ? setClassName("expanded") : setClassName("collapsed")}
                                                </AccordionItemState>

                                                <div className="flexCenter icon">
                                                    {item.icon}
                                                </div>
                                                <span className="primaryText-1">{item.heading}</span>
                                                <div className="flexCenter icon">
                                                    <MdOutlineArrowDropDown size={20}></MdOutlineArrowDropDown>
                                                </div>
                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <p className="secondaryText">{item.detail}</p>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                )
                            })
                        }
                    </Accordion>

                </div>
            </div>
        </div>
    )
}

export default Value