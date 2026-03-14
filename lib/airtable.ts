const AIRTABLE_API_BASE = "https://api.airtable.com/v0";

function getEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required env var: ${name}`);
  }
  return value;
}

export const airtableConfig = {
  baseId: getEnv("AIRTABLE_BASE_ID"),
  token: getEnv("AIRTABLE_TOKEN"),
  leadsTable: process.env.AIRTABLE_LEADS_TABLE || "Leads",
  auditTable:
    process.env.AIRTABLE_AUDIT_SUBMISSIONS_TABLE || "Audit Submissions",
  pipelineTable: process.env.AIRTABLE_PIPELINE_TABLE || "Pipeline",
  bookingsTable: process.env.AIRTABLE_BOOKINGS_TABLE || "Bookings"
};

type AirtableRecord<T = Record<string, unknown>> = {
  id: string;
  fields: T;
};

async function airtableRequest<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const res = await fetch(`${AIRTABLE_API_BASE}/${airtableConfig.baseId}/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${airtableConfig.token}`,
      "Content-Type": "application/json",
      ...(init?.headers || {})
    },
    cache: "no-store"
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Airtable error (${res.status}): ${text}`);
  }

  return res.json() as Promise<T>;
}

function encodeFormula(formula: string) {
  return encodeURIComponent(formula);
}

export async function findLeadByEmail(email: string) {
  const formula = `{Email}='${email.replace(/'/g, "\\'")}'`;
  const path = `${encodeURIComponent(
    airtableConfig.leadsTable
  )}?filterByFormula=${encodeFormula(formula)}&maxRecords=1`;

  const data = await airtableRequest<{ records: AirtableRecord[] }>(path);
  return data.records[0] || null;
}

export async function createLead(fields: Record<string, unknown>) {
  return airtableRequest<{ records: AirtableRecord[] }>(
    encodeURIComponent(airtableConfig.leadsTable),
    {
      method: "POST",
      body: JSON.stringify({
        records: [{ fields }]
      })
    }
  );
}

export async function updateLead(recordId: string, fields: Record<string, unknown>) {
  return airtableRequest<{ id: string; fields: Record<string, unknown> }>(
    encodeURIComponent(airtableConfig.leadsTable),
    {
      method: "PATCH",
      body: JSON.stringify({
        fields,
        typecast: true
      })
    }
  );
}

export async function createAuditSubmission(fields: Record<string, unknown>) {
  return airtableRequest<{ records: AirtableRecord[] }>(
    encodeURIComponent(airtableConfig.auditTable),
    {
      method: "POST",
      body: JSON.stringify({
        records: [{ fields }],
        typecast: true
      })
    }
  );
}

export async function createPipelineRecord(fields: Record<string, unknown>) {
  return airtableRequest<{ records: AirtableRecord[] }>(
    encodeURIComponent(airtableConfig.pipelineTable),
    {
      method: "POST",
      body: JSON.stringify({
        records: [{ fields }],
        typecast: true
      })
    }
  );
}
