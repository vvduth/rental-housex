"use client";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { PropertyInterface } from "@/types";
import React from "react";
import { FaShare } from "react-icons/fa";

const ShareButton = ({ property }: { property: PropertyInterface }) => {
  const shareUrl = `http://${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`;
  return (
    <>
      <h3 className="text-xl font-bold text-center pt-2">
        Share this property
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton
          url={shareUrl}
          //quote={property.name}
          hashtag={`#${property.type}ForRent`}
        >
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton
           url={shareUrl}
           title={property.name}
           hashtags={[`${property.type}ForRent`]}
         >
           <TwitterIcon size={40} round={true} />
         </TwitterShareButton>
         <WhatsappShareButton
           url={shareUrl}
           title={property.name}
           separator=':: '
         >
           <WhatsappIcon size={40} round={true} />
         </WhatsappShareButton>
         <EmailShareButton
           url={shareUrl}
           subject={property.name}
           body={`Check out this property: ${shareUrl}`}
         >
           <EmailIcon size={40} round={true} />
         </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButton;
