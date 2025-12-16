export const numberFormatter = (data: number) => new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
}).format(data)