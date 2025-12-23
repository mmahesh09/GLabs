"use client";

import { useUser, SignOutButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import {
    Home,
    FileText,
    Clock,
    User,
    LogOut,
    Edit2,
    MapPin,
    Mail,
    Phone,
    LayoutGrid,
    Settings
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
    const { user, isLoaded } = useUser();
    const [activeTab, setActiveTab] = useState("profile");

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#0b0f0c]">
                <div className="flex gap-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                </div>
            </div>
        );
    }

    const SidebarItem = ({ id, icon: Icon, label, badge }: { id: string, icon: any, label: string, badge?: number }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${activeTab === id
                    ? "bg-purple-500/10 text-purple-400"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                }`}
        >
            <Icon size={18} className={activeTab === id ? "text-purple-400" : "text-neutral-500 group-hover:text-white"} />
            <span className="text-sm font-medium">{label}</span>
            {badge && (
                <span className="ml-auto flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-red-500 rounded-full">
                    {badge}
                </span>
            )}
        </button>
    );

    return (
        <div className="min-h-screen bg-[#0b0f0c] text-neutral-200 flex">
            {/* Sidebar - Matches lefthand panel in image */}
            <aside className="w-72 fixed h-screen border-r border-white/5 bg-[#0b0f0c] p-6 flex flex-col pt-24">
                {/* User Mini Profile */}
                <div className="flex items-center gap-4 mb-10 px-2">
                    <img
                        src={user?.imageUrl}
                        alt="Profile"
                        className="w-12 h-12 rounded-full border border-white/10"
                    />
                    <div className="overflow-hidden">
                        <h3 className="font-semibold text-white truncate">{user?.fullName || "User"}</h3>
                        <p className="text-xs text-neutral-500 capitalize">{user?.publicMetadata?.role as string || "Agent Builder"}</p>
                        <p className="text-[10px] text-neutral-600 truncate">San Francisco, CA</p>
                    </div>
                </div>

                <div className="space-y-1 mb-auto">
                    <p className="px-4 text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-2">Menu</p>
                    <SidebarItem id="home" icon={Home} label="Home" />
                    <SidebarItem id="requests" icon={LayoutGrid} label="View Requests" badge={7} />
                    <SidebarItem id="track" icon={Clock} label="Track Request" />
                    <SidebarItem id="history" icon={FileText} label="History" />
                    <div className="my-4 h-px bg-white/5 mx-4" />
                    <SidebarItem id="profile" icon={User} label="My profile" />
                </div>

                <SignOutButton>
                    <button className="flex items-center gap-3 px-4 py-3 text-neutral-500 hover:text-red-400 transition-colors mt-auto">
                        <LogOut size={18} />
                        <span className="text-sm font-medium">Logout</span>
                    </button>
                </SignOutButton>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 ml-72 p-8 pt-24 bg-[#0b0f0c] min-h-screen">
                <div className="max-w-4xl mx-auto">
                    {activeTab === "profile" && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-6"
                        >
                            <h1 className="text-2xl font-bold text-white mb-8">Account Settings</h1>

                            <div className="bg-black/40 border border-white/5 rounded-3xl p-6 backdrop-blur-xl">
                                <h2 className="text-lg font-semibold text-white mb-6">My Profile</h2>

                                {/* Header Card */}
                                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 p-6 rounded-2xl bg-white/5 border border-white/5 relative group">
                                    <div className="relative">
                                        <img
                                            src={user?.imageUrl}
                                            alt="Profile Large"
                                            className="w-24 h-24 rounded-full border-2 border-purple-500/20"
                                        />
                                    </div>
                                    <div className="flex-1 text-center md:text-left">
                                        <h3 className="text-xl font-bold text-white">{user?.fullName}</h3>
                                        <p className="text-sm text-neutral-400 mb-1">{user?.publicMetadata?.role as string || "Agent Builder"}</p>
                                        <p className="text-xs text-neutral-500">San Francisco, CA</p>
                                    </div>
                                    <button className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                                        Edit <Edit2 size={12} />
                                    </button>
                                </div>

                                {/* Personal Information */}
                                <div className="mb-6 p-6 rounded-2xl border border-white/5 bg-transparent relative">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-semibold text-white">Personal information</h3>
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                                            Edit <Edit2 size={12} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        <div>
                                            <label className="text-xs text-neutral-500 block mb-1">First Name</label>
                                            <p className="text-sm text-neutral-200 font-medium">{user?.firstName}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs text-neutral-500 block mb-1">Last Name</label>
                                            <p className="text-sm text-neutral-200 font-medium">{user?.lastName}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs text-neutral-500 block mb-1">Email Address</label>
                                            <p className="text-sm text-neutral-200 font-medium">{user?.emailAddresses[0]?.emailAddress}</p>
                                        </div>
                                        <div>
                                            <label className="text-xs text-neutral-500 block mb-1">Phone</label>
                                            <p className="text-sm text-neutral-200 font-medium">{user?.phoneNumbers[0]?.phoneNumber || "+1 (555) 000-0000"}</p>
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="text-xs text-neutral-500 block mb-1">Role</label>
                                            <p className="text-sm text-neutral-200 font-medium">{user?.publicMetadata?.role as string || "Agent Builder"}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="p-6 rounded-2xl border border-white/5 bg-transparent relative">
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-lg font-semibold text-white">Address</h3>
                                        <button className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 text-xs font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-colors">
                                            Edit <Edit2 size={12} />
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                                        <div>
                                            <label className="text-xs text-neutral-500 block mb-1">Country</label>
                                            <p className="text-sm text-neutral-200 font-medium">United States</p>
                                        </div>
                                        <div>
                                            <label className="text-xs text-neutral-500 block mb-1">City/State</label>
                                            <p className="text-sm text-neutral-200 font-medium">San Francisco, CA</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )}

                    {activeTab !== "profile" && (
                        <div className="flex flex-col items-center justify-center h-[60vh] text-neutral-500">
                            <Settings size={48} className="mb-4 opacity-20" />
                            <p>This section is under construction.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
