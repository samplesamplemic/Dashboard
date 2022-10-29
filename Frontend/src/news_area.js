import { News } from "./news/news-gaming/News.tsx";
import { YoutubeNews } from "./news/news-gameplay/YoutubeNews";
import { UpcomingGames } from "./news/upcoming-games-slider/UpcomingGames";
import "./news/news_area.css";

export function NewsArea() {
  return (
    <div className="p-8 h-auto md:h-[100%] big:w-[100vw] w-[calc(100vw-135px)]">
      <UpcomingGames />
      <div className="flex justify-center gap-4 flex-col md:flex-row h-[90%]">
        <News />
        <YoutubeNews />
      </div>
    </div>
  );
}
