export function localizeRecord(record, language) {
  if (!record || typeof record !== "object") {
    return record;
  }

  const localized = { ...record };

  const pick = (field) =>
    record[`${field}_${language}`] ||
    record[`${field}_fr`] ||
    record[`${field}_en`] ||
    record[`${field}_ar`] ||
    record[field] ||
    "";

  localized.name = pick("name");
  localized.country = pick("country");
  localized.region = pick("region");
  localized.wilaya = pick("wilaya");
  localized.tag = pick("tag");
  localized.description = pick("description");
  localized.hotel = pick("hotel");

  if (Array.isArray(record.highlights)) {
    localized.highlights = record.highlights.map((item) => (typeof item === "object" ? localizeRecord(item, language) : item));
  }

  if (Array.isArray(record.included)) {
    localized.included = record.included.map((item) => (typeof item === "object" ? localizeRecord(item, language) : item));
  }

  if (Array.isArray(record.itinerary)) {
    localized.itinerary = record.itinerary.map((item) => localizeRecord(item, language));
  }

  return localized;
}