


export function getRoleFromToken(token: any) {
  return ['doctor', 'patient', 'admin', 'recepcionist'].includes(token.authorities[0]) ? token.authorities[0] : token.authorities[1];
}
