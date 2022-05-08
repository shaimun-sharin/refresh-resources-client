import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faAward,
  faBusinessTime,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
import "./WhyChoose.css";

const WhyChoose = () => {
  return (
    <div className="choose mb-4">
      <div className=" container text-center">
        <h1 className="text-white">Why Choose us</h1>
        <div>
          <div className="text-info">
            <FontAwesomeIcon size="3x" icon={faCube}></FontAwesomeIcon>
          </div>
          <div className="text-white">
            <h6>
              We offer you some of the best cutting edge technologies for your
              sales and brand value across multiple retail channels at a very
              competitive price.
            </h6>
          </div>
        </div>
        <div>
          <div className="text-info">
            <FontAwesomeIcon size="3x" icon={faBusinessTime}></FontAwesomeIcon>
          </div>
          <div className="text-white">
            <h6>
              It’s our attention to the small stuff, scheduling of timelines and
              keen project management that makes us stand out from the rest. We
              are creative, while keeping a close eye on the calendar and your
              budget.
            </h6>
          </div>
        </div>
        <div>
          <div className="text-info">
            <FontAwesomeIcon size="3x" icon={faAward}></FontAwesomeIcon>
          </div>
          <div className="text-white">
            <h6>
              We’ve won the international Communicator’s Award on behalf of our
              clients six times, chosen from over 6000 entries.
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
