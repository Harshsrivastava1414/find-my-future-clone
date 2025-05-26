import React from "react";

export const Textarea = React.forwardRef(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`w-full rounded-lg border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none ${className}`}
        rows={4}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";
