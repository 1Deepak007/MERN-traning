import React from 'react';

const Section = (props) => {
  return (
    <section className={`w-full py-10 md:py-24 lg:py-32 ${props.bg} ${props.dark}`}>
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{props.heading}</h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {props.detail}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section;
