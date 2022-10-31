import "../style/timer.css";
import { FiBellOff } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";

const Timer = ({
  stage,
  switchStage,
  getTickingTime,
  seconds,
  ticking,
  startTimer,
  isTimeUp,
  muteAlarm,
  reset,
  setOpenSetting,
}) => {
  const options = ["Pomodoro", "Short Break", "Long Break"];

  return (
    <div className="glass-component big:w-[95%] m-auto smaller:p-3">
      {/* main-container  */}
      <div className="card-container">
        <div className="card-items w-10/12 mx-auto pb-5 text-black flex flex-col justify-center items-center relative !p-5">
          <nav className="text-secondary-light flex justify-end w-fit absolute top-0 right-[-1.2rem] mx-auto">
            <FiSettings
              className="text-2xl cursor-pointer "
              onClick={() => setOpenSetting((value) => !value)}
            />
          </nav>
          <div className="text-secondary-light flex gap-5 items-center">
            {options.map((option, index) => {
              return (
                <h1
                  key={index}
                  className={`${
                    index === stage ? "bg-gray-500 bg-opacity-30" : ""
                  } p-1 cursor-pointer transition-all rounded`}
                  onClick={() => switchStage(index)}
                >
                  {option}
                </h1>
              );
            })}
          </div>

          <div className="mt-10 mb-10">
            <h1 className="text-secondary-light text-8xl font-bold select-none m-0">
              {getTickingTime()}:{seconds.toString().padStart(2, "0")}
            </h1>
          </div>
          <div className="flex gap-20 smaller:gap-8 items-center">
            <button
              className="px-16 smaller:px-4 py-1 text-2xl rounded-md bg-primary-dark text-secondary-light uppercase font-bold"
              onClick={startTimer}
            >
              {ticking ? "Stop" : "Start"}
            </button>
            <button
              className="px-16 smaller:px-4 py-1 text-2xl rounded-md bg-primary-dark text-secondary-light uppercase font-bold"
              onClick={reset}
            >
              Reset
            </button>
            {isTimeUp && (
              <FiBellOff
                className="text-3xl text-white cursor-pointer"
                onClick={muteAlarm}
              />
            )}
          </div>
          {/* {ticking && ( */}
          {/* <button className="mt-5 px-14 py-2 text-2xl rounded-md bg-primary-dark text-secondary-light uppercase font-bold" onClick={reset}>
                            Reset
                        </button> */}
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Timer;
