import { Layers, LucideIcon, Snowflake, Sun, SunSnow } from "lucide-react";

export type Link = {
    id: number;
    label: string;
    href: string;
    subLabel?: string;
    subLinks?: Link[];
    icon?: LucideIcon;
    iconColor?: string;
};

export const LINKS: Link[] = [
    {
        id: 1,
        label: "Početna",
        href: "/",
    },
    {
        id: 2,
        label: "Gume",
        href: "/tires",
        subLabel: "Tipovi guma",
        subLinks: [
            {
                id: 1,
                label: "Sve gume",
                href: "/tires?tireType=all",
                icon: Layers,
            },
            {
                id: 2,
                label: "Letnje gume",
                href: "/tires?tireType=summer",
                icon: Sun,
                iconColor: "orange",
            },
            {
                id: 3,
                label: "Zimska guma",
                href: "/tires?tireType=winter",
                icon: Snowflake,
                iconColor: "#99c4ce",
            },
            {
                id: 4,
                label: "Gume za sve sezone",
                href: "/tires?tireType=all-season",
                icon: SunSnow,
                iconColor: "#FF4437",
            },
        ],
    },
    {
        id: 3,
        label: "Brendovi",
        subLabel: "Brendovi guma",
        href: "/brands",
        subLinks: [
            {
                id: 1,
                label: "Sava",
                href: "/tires?brand=sava",
            },
            {
                id: 2,
                label: "Nexen",
                href: "/tires?brand=nexen",
            },
            {
                id: 3,
                label: "Pirelli",
                href: "/tires?brand=pirelli",
            },
            {
                id: 4,
                label: "Michelin",
                href: "/tires?brand=michelin",
            },
            {
                id: 5,
                label: "Continental",
                href: "/tires?brand=continental",
            },
            {
                id: 6,
                label: "Goodyear",
                href: "/tires?brand=goodyear",
            },
        ],
    },
];
