"use client";

import { UserProfile } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const UserProfilePage = () => (
    <div className="min-h-screen w-full bg-[#0b0f0c] relative flex items-center justify-center py-24 px-4 overflow-hidden">
        {/* Ambient Background Effects */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        {/* Profile Container */}
        <div className="relative z-10 w-full max-w-4xl flex justify-center">
            <UserProfile
                path="/user-profile"
                appearance={{
                    baseTheme: dark,
                    variables: {
                        colorPrimary: "#a855f7", // purple-500
                        colorBackground: "#0b0f0c",
                        colorText: "#ffffff",
                        colorInputBackground: "#171717",
                        colorInputText: "#ffffff",
                        borderRadius: "1rem",
                    },
                    elements: {
                        card: "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                        navbar: "hidden md:flex",
                        navbarButton: "text-neutral-400 hover:text-white hover:bg-white/5",
                        navbarButtonActive: "text-purple-400 bg-purple-500/10 hover:bg-purple-500/20 hover:text-purple-300",
                        headerTitle: "text-2xl font-bold bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent",
                        headerSubtitle: "text-neutral-500",
                        scrollBox: "bg-transparent",
                        pageScrollBox: "bg-transparent",
                        formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white shadow-[0_4px_14px_0_rgba(147,51,234,0.39)] transition-all",
                        formFieldInput: "bg-white/5 border-white/10 focus:border-purple-500/50 transition-colors",
                        footer: "hidden"
                    }
                }}
            />
        </div>
    </div>
);

export default UserProfilePage;
