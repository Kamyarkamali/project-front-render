import { AiOutlineLike } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

function Comments() {
  return (
    <div className="mt-8 px-3 sm:px-6 lg:px-12">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-[#0B3C3A] font-bold text-base sm:text-lg md:text-xl">
          Got a question? Leave me a comment below…
        </h3>
        <p className="text-[#0B3C3A] text-xs sm:text-sm md:text-base">
          I usually respond within 24 hours.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center border-b border-[#81888F] py-3">
        <img
          className="w-16 sm:w-24 rounded-full"
          src="images/imageMainContent/matt.jpg"
          alt="Matt Kirman"
        />
        <div className="sm:ml-4 text-center sm:text-left">
          <p className="text-[#0B3C3A] font-bold text-sm">
            Matt Kirman –{" "}
            <span className="text-[#81888F] font-medium">
              Matched Betting Blogger
            </span>
          </p>
          <p className="text-[#0B3C3A] mt-2 text-xs sm:text-sm leading-relaxed">
            Since 2014, I’ve blogged over £90,000 worth of profit, making
            matched betting accessible to everyone.
          </p>
        </div>
      </div>

      <div className="mt-4 sm:mt-6 space-y-4 sm:space-y-6 max-w-3xl mx-auto">
        {commentsData.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </div>
    </div>
  );
}

const commentsData = [
  {
    name: "Mark H",
    role: "Guest user",
    image: "/images/imageMainContent/user.jpg",
    date: "January 24, 2022 at 1:24 pm",
    likes: 2,
    content: [
      "Hello Matt.",
      "I appreciate your open and honest appraisal. The fact that you offer your services for free says a lot.",
      "I was kinda thinking that joining Oddsmonkey was not strictly necessary however…",
    ],
  },
  {
    name: "Matt",
    role: (
      <>
        <FaRegStar /> 1540
      </>
    ),
    image: "/images/imageMainContent/matt.jpg",
    date: "January 24, 2022 at 1:24 pm",
    likes: 3,
    content: [
      "Hi Mark.",
      "I appreciate your open and honest appraisal. The fact that you offer your services for free says a lot.",
      "Now I’m wondering whether if I invest say £200 and follow just horses and greyhounds I could make a go of match betting again.",
    ],
  },
  {
    name: "Yoshi",
    role: (
      <>
        <FaRegStar /> 3
      </>
    ),
    image: "/images/imageMainContent/user.jpg",
    date: "January 24, 2022 at 1:24 pm",
    likes: 1,
    content: [
      "Hi Matt",
      "I appreciate your open and honest appraisal. The fact that you offer your services for free says a lot.",
    ],
  },
];

function Comment({ name, role, image, date, likes, content }) {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-lg shadow-md">
      <div className="flex items-center gap-2 sm:gap-3">
        <img className="w-10 sm:w-12 rounded-full" src={image} alt={name} />
        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
          <p className="text-[#0B3C3A] font-bold">{name}</p>
          <p className="text-[#0B3C3A] bg-[#F2F2F2] p-1 rounded text-[10px] sm:text-xs">
            {role}
          </p>
        </div>
      </div>
      <div className="mt-3 space-y-2 text-[#0F514E] text-xs sm:text-sm leading-relaxed">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="flex justify-end mt-3 items-center gap-2 text-xs sm:text-sm">
        <p className="text-[#1ABB9C] font-medium">{date}</p>
        <p className="text-[#1ABB9C] cursor-pointer">REPLY</p>
        <p className="text-[#1ABB9C] bg-[#CCF5F1] font-bold px-2 py-1 rounded">
          +{likes}
        </p>
        <AiOutlineLike color="#1ABB9C" />
      </div>
    </div>
  );
}

export default Comments;
