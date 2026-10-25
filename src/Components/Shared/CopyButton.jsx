"use client";
import React, { useState } from "react";
import { Copy, Check2 } from "react-bootstrap-icons";

const CopyButton = ({ text, label = "Copy", className = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <>
      <button
        onClick={handleCopy}
        type="button"
        title={`Copy ${label}`}
        aria-label={`Copy ${label}`}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md border duration-300 transition-all ${
          copied
            ? "bg-clr_base border-clr_base text-clr_title font-medium shadow-md shadow-emerald-950/40"
            : "bg-[rgb(38_37_37)] border-[rgb(55_55_55)] text-clr_pra hover:text-white hover:border-clr_base hover:bg-[rgb(45_45_45)]"
        } ${className}`}
      >
        {copied ? (
          <>
            <Check2 className="text-sm stroke-[1.5]" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="text-xs" />
            <span>{label}</span>
          </>
        )}
      </button>

      {/* Floating Toast notification */}
      {copied && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[rgb(20_20_20)] border border-clr_base/80 text-white px-5 py-3 rounded-lg shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="w-6 h-6 rounded-full bg-clr_base flex items-center justify-center text-clr_title text-sm">
            <Check2 className="stroke-[2]" />
          </span>
          <div>
            <p className="text-sm font-semibold text-white">Copied to clipboard!</p>
            <p className="text-xs text-clr_pra truncate max-w-[220px]">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CopyButton;
