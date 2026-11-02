// SVG газрын зургийг ачаалах
export async function loadMapSvg() {
  const response = await fetch("./img/map.svg");

  if (!response.ok) {
    throw new Error("Газрын зураг ачаалж чадсангүй");
  }

  return await response.text();
}

// Утгуудыг текстийн массив болгох
function flattenTextValues(value) {
  if (value === null || value === undefined) {
    return [];
  }

  if (typeof value === "string" || typeof value === "number") {
    const text = String(value).trim();
    return text ? [text] : [];
  }

  if (Array.isArray(value)) {
    return value.flatMap(flattenTextValues);
  }

  if (typeof value === "object") {
    return Object.values(value).flatMap(flattenTextValues);
  }

  return [];
}

// Хоолны мэдээллээс аймгийн нэр авах
function getProvinceValues(item) {
  if (!item || typeof item !== "object") {
    return [];
  }

  const values = [
    ...flattenTextValues(item.province),
    ...flattenTextValues(item.province_name),
    ...flattenTextValues(item.province_name_en),
    ...flattenTextValues(item.province_name_mn),
    ...flattenTextValues(item.province_code),
    ...flattenTextValues(item.provinceName),
    ...flattenTextValues(item.aimag),
    ...flattenTextValues(item.aimag_name),
  ];

  return [...new Set(values)];
}

// Аймгийн нэрийг ижил хэлбэрт оруулах
function normalizeProvince(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[-_\s]+/g, "");
}

// Сонгосон аймгийн хоолнуудыг авах
export function getFoodsByProvince(
  nutritionData,
  provinceKey
) {
  if (!Array.isArray(nutritionData)) {
    return [];
  }

  if (!provinceKey) {
    return [];
  }

  const targetProvince = normalizeProvince(provinceKey);

  return nutritionData.filter((item) => {
    const provinceValues = getProvinceValues(item);

    return provinceValues.some(
      (value) =>
        normalizeProvince(value) === targetProvince
    );
  });
}