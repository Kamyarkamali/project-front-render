import React from "react";

function Contact() {
  return (
    <div className="p-4 md:p-8">
      {/* Header */}
      <h1 className="text-[#0B3C3A] font-bold text-2xl sm:text-3xl md:text-4xl text-center">
        Contact Me
      </h1>

      {/* Content */}
      <div className="mt-6 sm:mt-8">
        <p className="text-[#DC3545] text-lg sm:text-xl text-center">
          * Website-related queries only, please. *
        </p>
        <p className="text-[#17615F] text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
          If you have a matched betting query, you’ll hopefully find the answer
          you’re looking for on my ‘Frequently Asked Questions‘ page. There’s
          also a wealth of information available on the forum, so it’s worth
          running a quick search there too. If you don’t find an answer to your
          query, please feel free to create a new thread.
        </p>
        <p className="text-[#17615F] text-base sm:text-lg leading-relaxed mt-4 sm:mt-6">
          You’ll find a comments section at the bottom of most posts and pages
          across the site, and I’ll always try and get back to you within 24
          hours. If you wish to contact me directly regarding a matched betting
          query, please do so via Twitter or Facebook. I’ll get back to you as
          soon as I can.
        </p>
      </div>

      {/* Contact Form */}
      <form className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8">
        <input
          className="border-2 w-full max-w-[700px] mx-auto border-[#63beba] p-2 sm:p-3 rounded-lg outline-none"
          type="text"
          placeholder="Name *"
        />
        <input
          className="border-2 w-full max-w-[700px] mx-auto border-[#63beba] p-2 sm:p-3 rounded-lg outline-none"
          type="email"
          placeholder="Email *"
        />
        <input
          className="border-2 w-full max-w-[700px] mx-auto border-[#63beba] p-2 sm:p-3 rounded-lg outline-none"
          type="text"
          placeholder="Subject *"
        />
        <textarea
          className="border-2 h-48 sm:h-64 resize-y w-full max-w-[700px] mx-auto border-[#63beba] p-2 sm:p-3 rounded-lg outline-none"
          placeholder="Message"
        />
        <button
          type="submit"
          className="bg-[#29E0CB] text-[#33726f] cursor-pointer w-fit mx-auto text-sm sm:text-base font-bold px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-[#1fb8a5] transition-colors"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
