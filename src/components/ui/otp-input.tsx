"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

const OTPInput = React.forwardRef<HTMLDivElement, OTPInputProps>(
  ({ length = 6, value, onChange, className, disabled = false }, ref) => {
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, newValue: string) => {
      if (disabled) return;

      if (newValue.length > 1) {
        // Handle paste
        const pastedValue = newValue.slice(0, length);
        onChange(pastedValue);

        // Focus the last filled input or the next empty one
        const nextIndex = Math.min(pastedValue.length, length - 1);
        inputRefs.current[nextIndex]?.focus();
        return;
      }

      // Handle single character input
      if (!/^\d*$/.test(newValue)) return; // Only allow digits

      const newOtp = value.split("");
      newOtp[index] = newValue;
      onChange(newOtp.join(""));

      // Move to next input if current is filled
      if (newValue && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "Backspace") {
        if (!value[index] && index > 0) {
          // Move to previous input if current is empty
          inputRefs.current[index - 1]?.focus();
        } else {
          // Clear current input
          const newOtp = value.split("");
          newOtp[index] = "";
          onChange(newOtp.join(""));
        }
      } else if (e.key === "ArrowLeft" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    };

    return (
      <div ref={ref} className={cn("flex gap-3", className)}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value[index] || ""}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            disabled={disabled}
            className={cn(
              "w-12 h-12 text-center text-lg font-semibold border-2 rounded-lg",
              "focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500",
              "bg-orange-50 border-orange-200",
              "transition-all duration-200",
              value[index]
                ? "border-orange-400 bg-orange-100"
                : "border-orange-200",
              disabled && "opacity-50 cursor-not-allowed"
            )}
            onFocus={(e) => !disabled && e.target.select()}
          />
        ))}
      </div>
    );
  }
);

OTPInput.displayName = "OTPInput";

export { OTPInput };
