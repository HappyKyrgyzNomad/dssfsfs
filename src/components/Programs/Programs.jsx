// import { useEffect } from "react";
import { useState } from "react";
import "./Programs.scss";
import Card from "../Card/Card";
const programs=[
  {
    "images": "http://bradleyherald.org/wp-content/uploads/2013/10/1993-2013-FLEX-Anniversary-logo-white-on-blue.png",
    "title": "FLEX",
    "link": "https://www.discoverflex.org/",

    "id": 1
  },
  {
    "images": "http://www.mladiinfo.eu/wp-content/uploads/bfi_thumb/techgirls-3a14txhwlskqh1gitxjwg0.jpg",
    "title": "Tech girls",
    "link": "https://techgirlsglobal.org/",

    "id": 2
  },
  {
    "images": "https://scontent.ffru7-1.fna.fbcdn.net/v/t1.6435-9/199788975_961689884587916_7385480585632228071_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEIRepKOysnaJey2nQPfHfIVSYB_WrTuTxVJgH9atO5PAuY96ql8gsBdbFGaMXZiTQcFIbEQARXrPeNmb_JvFuj&_nc_ohc=hFEP3GjeF-YAX_CUyes&_nc_ht=scontent.ffru7-1.fna&oh=00_AfCcstDIFWDE3ctkTVQA1eyQJ8tt_xwpJZLGk5UvpKCrvA&oe=640AAC24",
    "title": "Programmer ayimdar",
    "link": "https://www.facebook.com/ProgrammerAyimdar/",

    "id": 3
  },
  {
    "images": "https://i0.wp.com/techstour.com/wp-content/uploads/2021/04/DAAD-Scholarship-2022.jpg?resize=1280%2C640&ssl=1",
    "title": "DAAD",
    "like": "https://cdn-icons-png.flaticon.com/512/833/833300.png",
    "link": "https://www.daad.de/en/",
    "id": 4
  },
  {
    "images": "https://stipendiumhungaricum.hu/uploads/2022/06/SH_logo_vertical_color.jpg",
    "title": "Stipendium Hungaricum",
    "link": "https://apply.stipendiumhungaricum.hu/",

    "id": 5
  },
  {
    "images": "https://uploads.mwp.mprod.getusinfo.com/uploads/sites/77/2022/11/globalugrad-banner-22.jpg",
    "title": "Global ugrad",
    "link": "https://exchanges.state.gov/non-us/program/global-undergraduate-exchange-program-global-ugrad",
    "id": 6
  },
  {
    "images": "data:image/jpeg;base64,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",
    "title": "ISEP ",
    "link": "https://www.isepstudyabroad.org/programs/program-types-and-deadlines/isep-exchange",

    "id": 7
  },
  {
    "images": "https://pbs.twimg.com/media/Fd1eIoeXwAA2cRT.jpg",
    "title": "Congress–Bundestag ",
    "link": "https://exchanges.state.gov/us/program/congress-bundestag-youth-exchange",

    "id": 8
  },
  {
    "images": "https://d2v9ipibika81v.cloudfront.net/uploads/sites/32/YA-2022-750x450-1-1140x684.png",
    "title": "Youth Ambassadors ",
    "link": "https://exchanges.state.gov/non-us/program/youth-ambassadors#:~:text=The%20Youth%20Ambassadors%20Program%20brings,a%20difference%20in%20their%20communities.",
    "id": 9
  }
]

export default function Programs() {
  
  const [searh, setSearch] = useState("");
  console.log(searh);

  return (
    <div className="programs">
      <div className="programs__bar">
        <form>
          <input
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            type="text"
            placeholder="Найти программу..."
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="programs__sort">
        {" "}
        <h1 className="programs__pop">Популярные программы</h1>
        <h1 className="programs__all">Все программы</h1>
      </div>

      <div className="programs__card">
        {programs
          .filter((data) => {
            return searh.toLowerCase() === ""
              ? data
              : data.title.toLowerCase().includes(searh);
          })
          .map((data) => (
            <Card
              key={data.id}
              title={data.title}
              images={data.images}
              like={data.like}
              link={data.link}
            />
          ))}
      </div>
    </div>
  );
}
