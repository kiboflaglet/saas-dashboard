import type { Post } from "../../Posts/_common/types";
import type { ActivityFeedType } from "../../SecondarySidebar/types";

export const statsOverviewData = {
    followers: 123450,
    following: 152,
    likes: 2900,
    comments: 3543,
}

//dashboard/reach/?startDate="2025-03-01"&endDate="2025-03-07"
export const reachData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 1_005_000,
        previous: 985_000,    // compare to start: 2025-02-21, end: 2025-02-28
        changePercent: 2.03, // ((current - previous) / previous ) * 100
        increase: true,
    },

    series: [
        { label: "2025-03-01", value: 120_000 },
        { label: "2025-03-02", value: 135_000 },
        { label: "2025-03-03", value: 142_000 },
        { label: "2025-03-04", value: 150_000 },
        { label: "2025-03-05", value: 160_000 },
        { label: "2025-03-06", value: 170_000 },
        { label: "2025-03-07", value: 128_000 }
    ]
};

export const impressionsData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 4_820_000,
        previous: 4_310_000,
        changePercent: 11.83, // ((current - previous) / previous) * 100
        increase: true,
    },

    series: [
        { label: "2025-03-01", value: 620_000 },
        { label: "2025-03-02", value: 650_000 },
        { label: "2025-03-03", value: 670_000 },
        { label: "2025-03-04", value: 690_000 },
        { label: "2025-03-05", value: 710_000 },
        { label: "2025-03-06", value: 740_000 },
        { label: "2025-03-07", value: 740_000 }
    ]
} satisfies typeof reachData;



export const newFollowersData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 428,
        previous: 392,
        changePercent: 9.18, // ((current - previous) / previous) * 100
        increase: true,
    },

    series: [
        { label: "2025-03-01", value: 48 },
        { label: "2025-03-02", value: 55 },
        { label: "2025-03-03", value: 60 },
        { label: "2025-03-04", value: 58 },
        { label: "2025-03-05", value: 65 },
        { label: "2025-03-06", value: 72 },
        { label: "2025-03-07", value: 70 }
    ]
} satisfies typeof reachData;

export const postSharesData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 1_284,
        previous: 1_110,
        changePercent: 15.68, // ((current - previous) / previous) * 100
        increase: true,
    },

    series: [
        { label: "2025-03-01", value: 145 },
        { label: "2025-03-02", value: 160 },
        { label: "2025-03-03", value: 175 },
        { label: "2025-03-04", value: 168 },
        { label: "2025-03-05", value: 185 },
        { label: "2025-03-06", value: 225 },
        { label: "2025-03-07", value: 226 }
    ]
} satisfies typeof reachData;

export const profileVisitsData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 18_420,
        previous: 19_050,
        changePercent: -3.31, // ((current - previous) / previous) * 100
        increase: false,
    },

    series: [
        { label: "2025-03-01", value: 2_850 },
        { label: "2025-03-02", value: 2_720 },
        { label: "2025-03-03", value: 2_680 },
        { label: "2025-03-04", value: 2_610 },
        { label: "2025-03-05", value: 2_590 },
        { label: "2025-03-06", value: 2_480 },
        { label: "2025-03-07", value: 2_490 }
    ]
} satisfies typeof reachData;

export const linkClicksData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 3_240,
        previous: 2_980,
        changePercent: 8.72,
        increase: true,
    },

    series: [
        { label: "2025-03-01", value: 410 },
        { label: "2025-03-02", value: 430 },
        { label: "2025-03-03", value: 445 },
        { label: "2025-03-04", value: 460 },
        { label: "2025-03-05", value: 470 },
        { label: "2025-03-06", value: 515 },
        { label: "2025-03-07", value: 510 }
    ]
} satisfies typeof reachData;


export const emailButtonData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07"
    },

    summary: {
        current: 612,
        previous: 710,
        changePercent: -13.80,
        increase: false,
    },

    series: [
        { label: "2025-03-01", value: 105 },
        { label: "2025-03-02", value: 98 },
        { label: "2025-03-03", value: 92 },
        { label: "2025-03-04", value: 88 },
        { label: "2025-03-05", value: 82 },
        { label: "2025-03-06", value: 75 },
        { label: "2025-03-07", value: 72 }
    ]
} satisfies typeof reachData;

export const ageGroupData = {
    range: {
        start: "2025-03-01",
        end: "2025-03-07",
    },

    summary: {
        current: 612,
        previous: 710,
        changePercent: -13.8,
        increase: false,
    },

    series: [
        { label: "18–24", value: 96 },
        { label: "25–34", value: 182 },
        { label: "35–44", value: 141 },
        { label: "45–54", value: 103 },
        { label: "55–64", value: 68 },
        { label: "65+", value: 22 },
    ],
} satisfies typeof reachData;

export const genderBreakdownData = {
    range: {
        start: "2025-02-01",
        end: "2025-02-28",
    },

    series: [
        { label: "Female", value: 61 },
        { label: "Male", value: 31 },
        { label: "Other", value: 8 },
    ],
}

export const posts = [
    {
        id: "1",
        username: "kiboflaglet",
        title: "Shipping a side project at 2am",
        body: "Finally pushed my side project live after weeks of procrastination. Nothing fancy, but it works and that already feels like a win.",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
        likes: 342,
        comments: 28,
        saves: 61,
        createdAt: "2025-02-01T22:14:00Z",
    },
    {
        id: "2",
        username: "kiboflaglet",
        title: "Minimal dashboard concept",
        body: "Playing around with dark dashboards and subtle contrasts. Less color, more clarity.",
        imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
        likes: 1240,
        comments: 94,
        saves: 312,
        createdAt: "2025-02-02T09:32:00Z",
    },
    {
        id: "3",
        username: "kiboflaglet",
        title: "Morning in Lisbon",
        body: "Quiet streets, warm coffee, and that feeling that the day might actually go right for once.",
        imageUrl: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad",
        likes: 892,
        comments: 47,
        saves: 140,
        createdAt: "2025-02-03T07:10:00Z",
    },
    {
        id: "4",
        username: "kiboflaglet",
        title: "Recharts vs Chart.js",
        body: "Spent the whole evening comparing chart libraries. Recharts feels nicer in React, Chart.js feels more powerful but heavier.",
        imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        likes: 515,
        comments: 63,
        saves: 89,
        createdAt: "2025-02-03T19:45:00Z",
    },
    {
        id: "5",
        username: "kiboflaglet",
        title: "Code, coffee, repeat",
        body: "Some days are just debugging, refactoring, and refilling coffee. Today is one of those days.",
        imageUrl: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
        likes: 2310,
        comments: 118,
        saves: 402,
        createdAt: "2025-02-04T08:01:00Z",
    },

    ...Array.from({ length: 35 }, (_, i) => ({
        id: String(i + 6),
        username: "kiboflaglet",
        title: [
            "Late night debugging",
            "UI details nobody notices",
            "Another refactor nobody asked for",
            "Building in public",
            "Small wins matter",
        ][i % 5],
        body:
            "Worked on this a bit longer than planned. Nothing groundbreaking, but it feels cleaner and easier to maintain than before.",
        imageUrl: [
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
            "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
        ][i % 5],
        likes: Math.floor(Math.random() * 3000) + 50,
        comments: Math.floor(Math.random() * 200),
        saves: Math.floor(Math.random() * 600),
        createdAt: new Date(
            Date.now() - Math.floor(Math.random() * 20) * 86400000
        ).toISOString(),
    })),
] satisfies Post[]

export const activityData = [
    {
        userName: "DercoMani",
        time: "2 mins ago",
        isActive: false,
        message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
    },
    {
        userName: "MiaMore",
        time: "9 mins ago",
        isActive: true,
        message: 'Started following you'
    },
    {
        userName: "RinaMenol",
        time: "11 mins ago",
        isActive: false,
        message: 'Started following you'
    },
    {
        userName: "IngaV",
        time: "23 mins ago",
        isActive: false,
        message: 'Started following you'
    },
    {
        userName: "DercoMani",
        time: "2 mins ago",
        isActive: false,
        message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
    },
    {
        userName: "HouseHoleJohn",
        time: "49 mins ago",
        isActive: true,
        message: 'Started following you'
    },
    {
        userName: "RinaMenol",
        time: "1h ago",
        isActive: false,
        message: 'Commented “ What airline do you always fly with? I’m a Delta man myself but you ...”'
    },
    {
        userName: "DercoMani",
        time: "2 mins ago",
        isActive: false,
        message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
    },
    {
        userName: "MiaMore",
        time: "9 mins ago",
        isActive: true,
        message: 'Started following you'
    },
    {
        userName: "RinaMenol",
        time: "11 mins ago",
        isActive: false,
        message: 'Started following you'
    },
    {
        userName: "IngaV",
        time: "23 mins ago",
        isActive: false,
        message: 'Started following you'
    },
    {
        userName: "DercoMani",
        time: "2 mins ago",
        isActive: false,
        message: 'Commented “Yes, I have been there and I would love to go there again! Do you ...”'
    },
    {
        userName: "HouseHoleJohn",
        time: "49 mins ago",
        isActive: true,
        message: 'Started following you'
    },
    {
        userName: "RinaMenol",
        time: "1h ago",
        isActive: false,
        message: 'Commented “ What airline do you always fly with? I’m a Delta man myself but you ...”'
    },
] satisfies ActivityFeedType[]




