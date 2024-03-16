import React from "react";
import QueryDiv from "./QueryDiv";
import "./Styles/IntroFaq.css";
const IntroFaq = ({ customFaq }) => {
  const query = [
    {
      text: "Why should I opt for Tutedude?",
      extras:
        "Tutedude provides you the professional curated content by Indian instructors along with live doubt solving and personal one to one mentorship which you won't find anywhere else. And amazingly, you learn for Free if you are enrolled under 100% Refund offer.",
    },
    {
      text: "What is the validity of the courses and when can I watch them?",
      extras:
        "You will have lifetime access to the courses and can watch the lectures anytime you want. So it is totally flexible and provides you the comfort of learning anytime anywhere. Also as the technologies progress we keep on updating our courses so you get the access to them too.",
    },
    {
      text: "Will my course validity expire after I receive the 100% Refund amount ?",
      extras:
        "No, you will still have the lifetime access on your courses along with mentor's support, even after you have received your 100% Refund amount.",
    },
    {
      text: "How will I know that 100% Refund offer has been applied ?",
      extras:
        "The 100% Refund offer is running currently on our platform for a limited time, and you are automatically enrolled through the 100% Refund offer. So you are assured that you have currently been enrolled through 100% Refund offer.",
    },
    {
      text: "How will receive my 100% Refund amount ?",
      extras:
        "You will receive the 100% Refund amount through the original mode of payment on completing the courses and submitting the assignments/exercises/projects covered within the time period.",
    },
    {
      text: "How can I access my Mentors?",
      extras:
        "We have a chat system support in the course section, where you can ask your doubts regarding your courses enrolled. Mentors are available from 10am to 10 pm, and will help you to get your doubts solved.  ",
    },
    {
      text: "Why don't you provide live classes and why should I prefer recorded lectures?",
      extras:
        "Tutedude doesn't believe in the idea of teaching 100 students in 1 class where the student sometimes feels hesitant to ask some doubts and where the other student feels that this student is wasting his time by asking silly doubts. Moreover in this busy world it becomes difficult to attend the classes on a specific schedule. So we combined the benefits and provide you interactive video lectures and live one on one doubt solving to learn at your own pace and comfort.",
    },
  ];

  return (
    <div className="ifaq-cont" id="faqss">
      <div className="ifaq-inner-cont">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="ifaq-sub-head">Got Questions?</div>
          <div className="ifaq-head">Check Out Our FAQs!</div>
        </div>

        <div className="ifaq-main-cont">
          {!customFaq && (
            <>
              <QueryDiv key={0} details={query[0]} />
              <QueryDiv key={1} details={query[1]} />
              <QueryDiv key={2} details={query[2]} />
            </>
          )}
          {customFaq &&
            customFaq.map((q, i) => {
              return <QueryDiv key={i} details={q} />;
            })}
        </div>

        <div className="ifaq-head">Tutedude and Refund</div>
        <div className="ifaq-main-cont">
          <QueryDiv key={3} details={query[3]} />
          <QueryDiv key={4} details={query[4]} />
          <QueryDiv key={5} details={query[5]} />
          <QueryDiv key={6} details={query[6]} />
        </div>
      </div>
    </div>
  );
};

export default IntroFaq;
