
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


