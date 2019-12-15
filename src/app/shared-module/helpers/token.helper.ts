import {JwtHelperService} from '@auth0/angular-jwt';


export function getIdFromToken() {
  const token = new JwtHelperService().decodeToken(JSON.parse(localStorage.getItem('access_token')).access_token);
  return ['doctor', 'patient', 'admin', 'recepcionist'].includes(token.authorities[0]) ? token.authorities[1] : token.authorities[0];
}

export function getRoleFromToken(token: any) {
  return ['doctor', 'patient', 'admin', 'recepcionist'].includes(token.authorities[0]) ? token.authorities[0] : token.authorities[1];
}
