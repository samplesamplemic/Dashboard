import List from "./todo/List";
import Todo from "./todo/Todo";
import BtnNote from "./sticky-note/BtnNote";
import ListNote from "./sticky-note/ListNote";
import Notes from "./sticky-note/Notes";
import RenderTimer from "./timer/RenderTimer";

const Productivity = () => {
  return (
    <>
      <div className="flex grow big:flex-col m-auto pb-4 justify-center gap-16 ">
        <div className="overflow-hidden prod">
          <div className="w-fit m-auto pt-4  glass-component !p-3 big:w-[95%]">
            {/* sm:w-80 */}
            <Todo />
            <List />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-around prod">
          <div className="h-fit">
            <RenderTimer />
          </div>
          <div className=" flex flex-col-reverse gap-1 !w-[70%] smaller:!w-[95%] h-fit glass-component m-auto smaller:p-3 ">
            <BtnNote />
            <ListNote />
          </div>
        </div>
      </div>
    </>
  );
};

export default Productivity;
