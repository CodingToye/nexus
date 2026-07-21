"use client";

import { createPortal } from "react-dom";
import { useEffect, type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div
      className={`
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
       bg-black/50
        p-4
        backdrop-blur-sm
        sm:p-6
      `}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        className="
          relative
          h-[calc(100dvh-2rem)]
          w-full
          max-w-4xl
          overflow-hidden
          sm:h-auto
          sm:max-h-[calc(100dvh-3rem)]
        "
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
