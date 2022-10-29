import { News } from "./news-gaming/News.tsx";
import { YoutubeNews } from "./news-gameplay/YoutubeNews";
import { UpcomingGames } from "./upcoming-games-slider/UpcomingGames";
import "./news_area.css";

export function NewsArea() {
  return (
    <div className="m-8 h-auto md:h-[90%]">
      <UpcomingGames />
      <div className="flex gap-4 flex-col md:flex-row h-[90%]">
        <News className="md:flex-[50%]" />
        <YoutubeNews className="md:flex-[50%]" />
      </div>
    </div>
  );
}
