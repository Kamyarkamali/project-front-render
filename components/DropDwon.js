"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-white text-black transition-all cursor-pointer duration-300 border-b-1 p-4 flex justify-between items-center hover:bg-gray-50"
      >
        <span className="text-base sm:text-lg font-bold">{title}</span>
        <span className="text-xl transform transition-transform duration-300">
          {isOpen ? "-" : <IoIosArrowDown />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 p-4 bg-gray-50 rounded-lg text-[#0F514E] text-sm sm:text-base">
          {content}
        </div>
      )}
    </div>
  );
};

const FaqSection = () => {
  const faqData = [
    {
      title: "Is matched betting free?",
      content: (
        <p>
          My site is completely free to use. I recommend a starting bankroll of
          around £100 to place your first bets and make your first profit.
          Because we’re matched betting, you’ll get that £100 back, plus your
          profit. You can then use it again on your next offer, and so on.
          <br />
          <br />
          Starting with £100 doesn’t limit how much you can make; it only
          determines how quickly you can progress. With a £100 bankroll, you’ll
          need to wait for your bets to settle before using your winnings on
          another offer. If you can start with more than £100, you can profit
          from multiple offers alongside each other.
          <br />
          <br />
          Many people start small and work up. There are plenty of smaller
          offers to do while you build up your bankroll and confidence.
        </p>
      ),
    },
    {
      title: "Do I need to be good at maths?",
      content: (
        <p>
          Over the last few years, I’ve spoken to plenty of people who have
          given up their day jobs to do matched betting full-time. It involves
          learning the more advanced methods and taking your matched betting to
          a high level. Still, it’s certainly possible for those with the
          determination and commitment required.
          <br />
          <br />
          When starting out, it’s best to view matched betting as a way to earn
          some extra money on the side and take it from there.
        </p>
      ),
    },
    {
      title: "Is matched betting safe and risk-free?",
      content: (
        <p>
          When done correctly, matched betting is risk-free in a mathematical
          sense. By claiming your free bet and covering all outcomes of an
          event, you will make a profit no matter the outcome.
          <br />
          <br />
          It’s important to take care when placing bets, though. Otherwise,
          mistakes can happen. Sometimes, they will work in your favour; other
          times, they won’t. You should also always bet responsibly.
        </p>
      ),
    },
    {
      title: "How much money do I need to start matched betting?",
      content: (
        <p>
          I recommend a starting bankroll of around £100 for your first offer.
          Once you’ve profited from that, you can use the same money to fund
          your next offer. If you can put in more than that, you can have
          multiple offers running alongside one another – no need to wait for
          the previous one to settle. Having a smaller starting bankroll does
          not affect how much you can make; it only affects how quickly you can
          complete all the offers.
        </p>
      ),
    },
    {
      title: "Can I use multiple accounts at the same bookmaker?",
      content: (
        <p>
          Multi-accounting, or gnoming as it’s often referred to in matched
          betting circles, is a no-go. Bookmakers use systems to flag up users
          who are running multiple accounts. It goes beyond simple things like
          names, postal addresses and IP addresses. If a bookmaker finds you
          multi-accounting, your accounts will be closed, and you may lose any
          funds you have in them.
          <br />
          <br />
          Is multi-accounting illegal? There’s no definitive answer to this. The
          worst the bookmakers will do is close your accounts. Still, setting up
          multiple accounts with fake credentials is essentially committing
          fraud. While tempting and easy to do, it’s best left alone.
        </p>
      ),
    },
    {
      title: "Can I use a VPN while matched betting?",
      content: (
        <p>
          Many people use a VPN to give themselves an extra layer of security
          online. However, for matched betting, it’s best to avoid it. Using one
          is often against a bookmaker’s terms and conditions. It may result in
          your accounts being closed and any winnings withheld.
          <br />
          <br />
          Look at my ‘Matched Betting and VPNs‘ article for more in-depth
          information.
        </p>
      ),
    },
    {
      title:
        "Does matched betting affect my credit rating or mortgage approval?",
      content: (
        <p>
          Bookmakers can verify your identity as part of their anti-money
          laundering checks. These checks won’t affect your credit score in any
          way.
          <br />
          <br />
          Regarding mortgages, your application will be unaffected as long as
          you’re prepared. Keep your matched betting activity separate from your
          main bank account, as mortgage providers won’t differentiate matched
          bettors from those with gambling problems. My ‘Matched Betting and
          Mortgages‘ article has more in-depth information
        </p>
      ),
    },
    {
      title: "Does matched betting still work in 2024?",
      content: (
        <p>
          Absolutely. While bookmakers are more streetwise to matched bettors
          and generally offer lower free bet amounts than they used to, you can
          still make plenty of profit. In my Matched Betting Academy, you’ll see
          over £600 to be made from welcome offers alone, with another £500 or
          more every month in reload offers depending on how much time you’re
          willing to put in.
        </p>
      ),
    },
    {
      title: "How easy is matched betting?",
      content: (
        <p>
          Once you’ve grasped the initial concept, you’ll be completing offers
          without too much thought. For each type of offer, the process remains
          the same. My calculators ensure all you need to do is input the
          details of your selected offer, and it tells you what you need to
          stake and where
          <br />
          <br />
          Take your time when following along with your first offer, and don’t
          be put off if it’s not immediately clear. After placing your first set
          of bets, things often become clearer and, with repetition, quickly
          become second nature.
        </p>
      ),
    },
    {
      title: "Can I do matched betting outside the UK?",
      content: (
        <p>
          While my site focuses mainly on the UK, the principles of matched
          betting can be applied to an offer in any country where betting is
          legal. The details in my Academy still apply, but instead of following
          the offer detailed in my examples, you can use them for a similar
          offer in your own country.
          <br />
          <br />
          If you’re in one country and want to place bets in a different
          country, it can cause problems. Often, you’ll need a VPN to access the
          bookmaker’s site, which can be against their terms and conditions, and
          you take the risk of a bookmaker withholding any winnings.
        </p>
      ),
    },
    {
      title: "Do existing users still get matched betting offers?",
      content: (
        <p>
          Absolutely. Existing customer offers (or ‘reload’ offers as they’re
          better known) are one of the cornerstones of matched betting once
          you’ve completed all the new customer offers. It means new offers
          constantly appear, and you’re unlikely ever to get close to running
          out. Plenty of offers like price boosts or 2UPs are open to all
          customers, both new and existing.
        </p>
      ),
    },
  ];

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-[#062221] mb-6">
        Frequently Asked Questions
      </h2>
      {faqData.map((faq, index) => (
        <Dropdown key={index} title={faq.title} content={faq.content} />
      ))}
    </div>
  );
};

export default FaqSection;
