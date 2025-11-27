import React from "react";
import FeedbackCard from "../feedbackCard/FeedbackCard";
import MainBtn from "../Mainbtn/MainBtn";

export default function Feedback() {
  return (
    <div className=" ">
      <h2 className="text-center pb-24 text-[4rem] font-bold text-[#2E2F35]">
        PostPilot makes it a <span className="text-[#009387]">cinch</span> send
        personalized, profit-
        <br />
        generating postcards.
      </h2>
      <FeedbackCard
        span={`Powerful`}
        generalP={` Send one-off or triggered campaigns to customers prospects.
          Target email leads with MailMatch™.`}
        heading={`acquisition & retention`}
        quateP={`It's like Klaviyo for direct mail. The results are absolutely insane.`}
        writer={`Ash Melwani, CMO`}
        image="/src/assets/images/obvi.png"
        spanFirst={true}
      />
      
        <FeedbackCard
          reverse={true}
          span={`Fight back`}
          generalP={` Deliver your message to all of your customers — for less than the cost of a click.`}
          heading={`against iOS updates, jacked-up CPCs & spam folders`}
          quateP={`PostPilot is our new weapon against sinking email engagement and rising PPC costs.
             The results and ROI have been outstanding. 
            It’s now one of our core marketing channels 
            to increase acquisition & LTV.`}
          writer={`Leah Keith, GM`}
          image="/src/assets/images/overLander.png"
          spanFirst={true}
        />
      
       <FeedbackCard
        span={`you`}
        spanFirst={false}
        heading={`Done for `}
        generalP={`From design & strategy to stamp-licking, our ecom experts help you every step of the way.`}
        quateP={`The team is so knowledgeable and beyond helpful. I’m blown away by their communication, detail, and attentiveness and
             always feel like they have our best interest in mind. Definitely worth a try.`}
        writer={`Holly Davies, Marketing Director`}
        image="/src/assets/images/pargon.png"
      />
      <MainBtn txt="Try it RISK-free"/>
    </div>
  );
}
