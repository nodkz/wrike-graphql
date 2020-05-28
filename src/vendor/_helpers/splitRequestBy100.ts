/**
 * Split findByIds requests by 100 ids and combine responce back in one array.
 *
 * @example
 *   return splitRequestBy100(ids, async (preparedIds) => {
 *     const res = await client.get(`/approvals/${preparedIds}`, { params });
 *     return res?.data?.data;
 *   });
 */
export async function splitRequestBy100(
  ids: ReadonlyArray<string>,
  cb: (preparedIds: string) => Promise<any>
) {
  // no request
  if (!ids || !Array.isArray(ids) || !ids.length) {
    return [];
  }

  // one request
  if (ids.length < 100) {
    return cb(ids.join(','));
  }

  // several requests
  const chunk = 100;
  const subReqs = [] as any[];
  for (let i = 0; i < ids.length; i += chunk) {
    const preparedIds = ids.slice(i, i + chunk);
    subReqs.push(cb(preparedIds.join(',')));
  }
  const reqs = await Promise.all(subReqs);
  return [].concat(...reqs);
}
