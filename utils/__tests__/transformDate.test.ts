import { transformDateFromISO } from "../transformDate";

describe("transformDateFromISO", () => {
  it("returns a formatted date string containing month, day, year, and AM/PM", () => {
    const isoString = "2025-09-11T14:30:00Z";
    const result = transformDateFromISO(isoString);

    expect(result).toMatch(/Sep 11, 2025/);

    expect(result).toMatch(/AM|PM/);

    expect(result).toMatch(/\d{1,2}:\d{2}/);
  });
});
