type AirtableCreatePayload = {
  records: Array<{ fields: Record<string, any> }>;
};

export async function createAirtableLead(fields: Record<string, any>) {
  const token = process.env.AIRTABLE_TOKEN;
  const baseId = process.env.AIRTABLE_BASE_ID;
  const tableName = process.env.AIRTABLE_TABLE_NAME;

  if (!token || !baseId || !tableName) return { ok: false, skipped: true as const };

  const url = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`;

  const payload: AirtableCreatePayload = { records: [{ fields }] };

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable error: ${res.status} ${text}`);
  }

  const data = await res.json();
  return { ok: true, data };
}
