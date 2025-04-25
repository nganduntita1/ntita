import React, { useRef } from "react";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  change border radius to rounded-lg
 *  add margin of md:mt-10
 *  remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
 */
const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  // UseRef hook to create a reference for the recentprojects section
  const recentProjectsRef = useRef<HTMLElement | null>(null);

  // Function to scroll to the recentprojects section
  const scrollToRecentProjects = () => {
    if (recentProjectsRef.current) {
      recentProjectsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Update the handleClick to also trigger scrolling
  const onClick = () => {
    // Call the custom handleClick if provided
    handleClick && handleClick();
    // Scroll to the recentprojects section
    scrollToRecentProjects();
  };

  return (
    <>
      <button
        className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
        onClick={onClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
             bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        >
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
      </button>

      {/* This element will represent the recentprojects section */}
      <div ref={recentProjectsRef} id="recentprojects">
        {/* Content of your recent projects section */}
      </div>
    </>
  );
};

export default MagicButton;
