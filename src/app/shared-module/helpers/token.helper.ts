


export function getRoleFromToken(token: any) {
  return ['doctor', 'patient', 'manager', 'recepcionist'].includes(token.authorities[0]) ? token.authorities[0] : token.authorities[1];
}
