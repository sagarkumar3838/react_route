import React from "react";
import { FiCreditCard, FiMail, FiUser, FiUsers , } from "react-icons/fi";
import { TiNews } from "react-icons/ti";
import { MdPreview } from "react-icons/md";
import { PiTextColumnsDuotone } from "react-icons/pi";
import { MdInterests } from "react-icons/md";

const HoverDevCards = () => {
  return (
    <div className="p-4">
      <p className="text-xl font-semibold mb-2 ">ALL <span className="bg-gradient-to-r from-orange-800 via-white to-green-800 bg-clip-text text-transparent text-3xl">INDIA</span></p>
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
        <Card
          title="News"
          subtitle="Top News"
          href="#"
          Icon={ TiNews}
        />
        <Card title="Reviews" subtitle="Show Others People review" href="#" Icon={MdPreview} />
        <Card title="Columns" subtitle="Know about latest MANGA Series" href="#" Icon={PiTextColumnsDuotone} />
        <Card
          title="Interest"
          subtitle="Anime , Manga , Novels"
          href="#"
          Icon={MdInterests}
        />
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, Icon, href }) => {
  return (
    <a
      href={href}
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;