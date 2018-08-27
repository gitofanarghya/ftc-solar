export function sitetozone(zoneid) {
    return {
      type: 'sitetozone',
      payload: zoneid
    }
  }

  export function zonetorow(rowid) {
    return {
      type: 'zonetorow',
      payload: rowid
    }
  }

  export function zonetosite() {
    return {
      type: 'zonetosite',
      payload: null
    }
  }

  export function rowtozone() {
    return {
      type: 'rowtozone',
      payload: null
    }
  }

  export function rowtorow(row) {
    return {
      type: 'rowtorow',
      payload: row
    }
  }