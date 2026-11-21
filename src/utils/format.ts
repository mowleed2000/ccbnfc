export function formatGBP(pence: number): string {
  const pounds = pence / 100;
  return new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(pounds);
}

export function isValidUrl(url: string): boolean {
  if (!url) return false;
  try {
    const trimmed = url.trim();
    if (trimmed.startsWith('wa.me/') || trimmed.startsWith('+')) return true;
    const parsed = new URL(trimmed.startsWith('http') ? trimmed : `https://${trimmed}`);
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}
