"use client";
import React, { useState, useRef, startTransition } from "react";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface XChatWindowProps {
    buttonText?: string;
    profileName?: string;
    profileTitle?: string;
    profileHandle?: string;
    profileImage?: string;
    welcomeText?: string;
    helperText?: string;
    placeholderText?: string;
    actionUrl?: string;
    ctaLabel?: string;
    accentColor?: string;
    backgroundColor?: string;
    textColor?: string;
    secondaryTextColor?: string;
    separatorColor?: string;
    className?: string;
}

function IconEnvelopePlus({ color }: { color: string }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    );
}

function IconDoubleChevron({ color }: { color: string }) {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m7 11 5-5 5 5" />
            <path d="m7 18 5-5 5 5" />
        </svg>
    );
}

export default function XChatWindow({
    buttonText = "Talk with Manish",
    profileName = "Manish Bhakti Sagar",
    profileTitle = "Full Stack Engineer",
    profileHandle = "AWS Certified · AI Engineer · Cloud & Backend",
    profileImage = "/profile.png",
    welcomeText = "Interested in AI products, AdTech, startups, or engineering? Send me a message.",
    helperText = "I'll respond fastest on LinkedIn.",
    placeholderText = "Describe what you'd like to discuss…",
    actionUrl = "https://www.linkedin.com/in/manish-bhaktisagar",
    ctaLabel = "Connect on LinkedIn",
    accentColor = "#6366f1",
    backgroundColor = "#000000",
    textColor = "#E7E9EA",
    secondaryTextColor = "#71767B",
    separatorColor = "#2F3336",
    className = "",
}: XChatWindowProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const toggleOpen = () => startTransition(() => setIsOpen((prev) => !prev));

    const handleSubmit = () => {
        if (actionUrl && typeof window !== "undefined") {
            window.open(actionUrl, "_blank");
            startTransition(() => setInputValue(""));
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <div className={className} style={{ width: 350, maxWidth: "100%", fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}>
            <motion.div
                initial={false}
                animate={{ height: isOpen ? 450 : 53 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                    width: "100%",
                    backgroundColor,
                    boxShadow: isOpen
                        ? "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px"
                        : "none",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "16px 16px 0px 0px",
                    border: `1px solid ${separatorColor}`,
                    borderBottom: "none",
                }}
            >
                <div
                    onClick={toggleOpen}
                    style={{
                        height: 53,
                        minHeight: 53,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 16px",
                        cursor: "pointer",
                        borderBottom: isOpen ? `1px solid ${separatorColor}` : "none",
                    }}
                >
                    <span style={{ color: textColor, fontSize: 20, fontWeight: 700 }}>{buttonText}</span>
                    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                        <IconEnvelopePlus color={textColor} />
                        <div
                            style={{
                                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                                transition: "transform 0.2s ease",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <IconDoubleChevron color={textColor} />
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        opacity: isOpen ? 1 : 0,
                        transition: "opacity 0.2s ease",
                        pointerEvents: isOpen ? "auto" : "none",
                    }}
                >
                    <div
                        style={{
                            flex: 1,
                            padding: "20px 16px 12px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            gap: 6,
                        }}
                    >
                        <div
                            onClick={handleSubmit}
                            style={{
                                width: 64,
                                height: 64,
                                borderRadius: "50%",
                                overflow: "hidden",
                                marginBottom: 8,
                                cursor: "pointer",
                            }}
                        >
                            <img
                                src={profileImage}
                                alt={profileName}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        </div>
                        <span style={{ color: textColor, fontSize: 18, fontWeight: 700 }}>{profileName}</span>
                        <span style={{ color: accentColor, fontSize: 15, fontWeight: 700 }}>{profileTitle}</span>
                        <span style={{ color: secondaryTextColor, fontSize: 13 }}>{profileHandle}</span>
                        <div style={{ marginTop: 12, color: textColor, fontSize: 14, lineHeight: 1.5, maxWidth: 280 }}>
                            {welcomeText}
                        </div>

                        {/* CTA Button */}
                        <button
                            onClick={handleSubmit}
                            style={{
                                marginTop: 16,
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "10px 24px",
                                borderRadius: 999,
                                border: "none",
                                backgroundColor: accentColor,
                                color: "#fff",
                                fontSize: 14,
                                fontWeight: 600,
                                cursor: "pointer",
                                transition: "opacity 0.2s",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                        >
                            <Linkedin size={16} />
                            {ctaLabel}
                        </button>
                    </div>

                    <div
                        style={{
                            padding: "10px 16px 14px",
                            borderTop: `1px solid ${separatorColor}`,
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            backgroundColor,
                        }}
                    >
                        <div style={{ color: secondaryTextColor, fontSize: 11, lineHeight: 1.3 }}>{helperText}</div>
                        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                            <div style={{ flex: 1, backgroundColor, borderRadius: 16, display: "flex", alignItems: "center" }}>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    placeholder={placeholderText}
                                    value={inputValue}
                                    onChange={(e) => startTransition(() => setInputValue(e.target.value))}
                                    onKeyDown={handleKeyDown}
                                    style={{
                                        width: "100%",
                                        background: "transparent",
                                        border: "none",
                                        color: textColor,
                                        outline: "none",
                                        padding: "8px 0",
                                        fontFamily: "inherit",
                                        fontSize: 14,
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    opacity: inputValue.length > 0 ? 1 : 0.5,
                                    cursor: inputValue.length > 0 ? "pointer" : "default",
                                }}
                                onClick={inputValue.length > 0 ? handleSubmit : undefined}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
