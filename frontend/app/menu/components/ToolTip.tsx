/**
 * @fileoverview ToolTip component to display a tooltip when clicking on button in AddToCart component.
 */
import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  text: string;
  showToolTip: boolean;
  setShowToolTip: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ToolTip({
  children,
  text,
  showToolTip,
  setShowToolTip,
}: Props) {
  const toolTipRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      onMouseLeave={() => setShowToolTip(false)}
      className='relative'
    >
      {text ? (
        <span
          ref={toolTipRef}
          className={`absolute -top-8 right-0  bg-orange-100 text-orange-500 text-xs px-2 py-1 rounded-sm whitespace-nowrap transition-opacity ${
            showToolTip ? "visible opacity-100" : "invisible opacity-0"
          }`}
        >
          {text}
        </span>
      ) : null}
      {children}
    </div>
  );
}
